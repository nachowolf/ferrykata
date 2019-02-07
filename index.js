// const FerryMethods = require('./src/ferryMethods.js');


// let method = FerryMethods();

// let ferry = method.createFerry(20, 40);
// console.log(ferry);
// console.log(method.board(ferry, 'red', 2));
// console.log(ferry)
// console.log(method.board(ferry, 'blue', 8));
// console.log(ferry)

const flash = require('express-flash');
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const session = require('express-session');
const routes = require('./api/ferry-api.js');
const FerryServices = require('./services/FerryServices.js')
const pg = require('pg');
const Pool = pg.Pool;

let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
    useSSL = true;
}

// const connectionString = process.env.DATABASE_URL || 'postgresql://coder:pg123@localhost:5432/codex';
const connectionString = process.env.DATABASE_URL || 'postgresql://nachobits:1997@localhost:5432/ferrykata';

const pool = new Pool({
    connectionString,
    ssl: useSSL 
});


const app = express();
const service = FerryServices(pool);
const route = routes(service);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(session({
    secret: '<add a secret string here>',
    resave: false,
    saveUninitialized: true
}));

app.use(flash());

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', route.home);
app.get('/all-ferries', route.allFerries);
app.get('/all-cars', route.allCars);
app.post('/dock/:ferryName/:parking/:seats', route.dock)



let PORT = process.env.PORT || 3008;

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
});
