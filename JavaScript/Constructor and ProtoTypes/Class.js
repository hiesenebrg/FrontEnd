const { PromiseProvider } = require("mongoose");

class Vehicle{
    constructor(numVehilces , price){
        this.numVehilces = numVehilces;
        this.price = price;
    }
    getPrice(){
        return this.price;
    }
}
var vehicle1 = new Vehicle(2,50000);
var vehicle1 = new Vehicle(4,5000000);