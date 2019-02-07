const Car = require('../classes/car.js');
const Ferry = require('../classes/ferry.js');
// const Color = require('./src/options/color.js');

module.exports = function(){
    let ferry;

    function createFerry(cars, passengers){
        ferry = new Ferry(cars, passengers)
        return "New ferry docked"
    
    }

    function board(ferry, color, passengers){
        if(ferry.currentParking == ferry.maxParking || ferry.currentSeats == ferry.maxSeats){
            return "declined"
        }
        else if(ferry.currentParking < ferry.maxParking){
            let ticket = ferry.currentSeats + passengers;

            if(ticket <= ferry.maxSeats){
                ferry.currentSeats += passengers;
                ferry.currentParking ++;
                ferry.parkingLot.push(new Car(color, passengers));
                return "accepted"
            }
            else if(ticket > maxSeats){
                return 'declined'
            }
        }
    }

    function status(){
        return ferry
    }

    return{
        createFerry,
        board,
        status
    }
}