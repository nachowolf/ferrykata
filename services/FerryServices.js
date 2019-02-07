module.exports = function (pool) {

    async function allFerries() {

        try {
            let ferries = await pool.query(`SELECT * from ferry;`)
            return ferries.rows
        }

        catch (err) {
            console.error(err)
        }
    }

    async function allCars(){

        try{
            let cars = await pool.query('Select * from car;')
            return cars.rows
        }

        catch(err){
            console.error(err)
        }
    }

    async function dockFerry(ferryName, parking, seats){

        try{
            let ferry = await pool.query('Insert into ferry (ferryName, parking, seats) values ($1, $2, $3)', [ferryName, parking, seats])
            return true
        }

        catch(err){
            console.error(err)
        }
    }

    return {
        allFerries,
        allCars,
        dockFerry
    }
}