class ParkingSlot{
    constructor(slotNumber){
        this.slotNumber = slotNumber;
        this.isOccupied = false;
        this.vehicle = null;
    }

    parkVehicle(vehiclePlate){
        // if not occupied, mark it as occupied, store the vehiclePlate, and log a message
        // if already occupied, log that the slot is full
        
        if(this.isOccupied === true){
            console.log("This slot has been taken...");
        }
        else{
            this.isOccupied = true;
            this.vehicle = vehiclePlate;
            console.log("You are parked...");
        }

    }

    removeVehicle(){
        // if occupied, mark it as available, clear the vehicle, and log a message
        // if not occupied, log that the slot is already empty

        if(this.isOccupied === true){
            this.vehicle = null;
            this.isOccupied = false;
            console.log("This parking spot is available...");
        }
        else{
            console.log("This parking spot is already empty...");
        }
    }

    getStatus(){
        // return a string like "Slot 1 - Available" or "Slot 1 - Occupied by ABC123"

        if (this.isOccupied === true){
            return `This slot ${this.slotNumber} is being occupied by ${this.vehicle}`;
        }
        else{
            return `This spot is available!`;
        }
    }
}

// create 2-3 ParkingSlot instances
// try parking in the same slot twice   
// remove a vehicle and check the status again

let slot1 = new ParkingSlot(1);

slot1.parkVehicle("RJ45");
slot1.parkVehicle("DANI");

console.log(slot1.getStatus());
