module.exports = class Ferry{
    constructor(parking, space){
        this.maxParking = parking;
        this.maxSeats = space;
        this.currentParking = 0;
        this.currentSeats = 0;
        this.parkingLot = []
    }
}