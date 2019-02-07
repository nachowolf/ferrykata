const FerryMethods = require('../src/methods/ferryMethods.js')
const FerryFilter = require('../src/methods/filter.js');
const filter = FerryFilter();
const method = FerryMethods()

module.exports = function () {

    function home(req, res) {
        let ferry = method.status()
        let test = "hhelo"
        console.log(ferry)
        res.render('home', {
            ferry
        }
        )
    }

    // function dock(req, res) {
    //     let cars = filter.numberFilter(req.body.parkingSpace);
    //     let passengers = filter.numberFilter(req.body.passengerSeats);
    //     if (cars === "declined" || passengers === 'declined') {
    //         req.flash('error1', 'Please insert a number!');
    //         res.redirect('/')
    //     }
    //     else {
    //         console.log(cars, passengers)
    //         console.log(method.createFerry(cars, passengers))
    //         req.flash('success', "New Ferry Docked")
    //         res.redirect('/')
    //     }
    // }
    
    function dock(req, res) {
        try {
        let cars = filter.numberFilter(req.body.parkingSpace);
        let passengers = filter.numberFilter(req.body.passengerSeats);
        if (cars === "declined" || passengers === 'declined') {
            res.json({
                status: "error",
                reason: "car was declined",
                error: err.stack
            });
        }
        else {
            console.log(cars, passengers)
            console.log(method.createFerry(cars, passengers))
            res.json({
                status: 'success',
                data: categories
            });
        }
    }
    catch (err) {
        res.json({
            status: "error",
            reason: "car was declined",
            error: err.stack
        });
    }


    }

    function boardFerry(req, res){
        let color = filter.colorFilter(req.body.carColor);
        let passengers = filter.numberFilter(req.body.carPassengers);
        let ferry = method.status()
        if (color === "declined" || passengers === 'declined') {
            req.flash('error2', 'Please reevaluate choices');
            res.redirect('/')
        }
        else{
            console.log(color, passengers)
            let board = method.board(ferry, color, passengers);
            if(board === 'declined'){
                req.flash("declined", "Vehicle Declined")
                res.redirect('/')
            }
            else if(board === 'accepted'){
                req.flash('accepted', "Vehicle Accepted")
                res.redirect('/')
            }

        }
    }

    return {
        home,
        dock,
        boardFerry
    }

}