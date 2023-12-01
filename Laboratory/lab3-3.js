function Car(model, milesPerGalon) {
    this.model = model;
    this.milesPerGalon = milesPerGalon;
}

Car.prototype.tank = 0;
Car.prototype.odometer = 0;

Car.prototype.fill = function(gallons) {
    return this.tank = gallons;
}

Car.prototype.drive = function(distance) {

    var gallonsLeft = this.tank - (distance / this.milesPerGalon);

    if(gallonsLeft > 0) {

        this.odometer = distance;
        this.tank = gallonsLeft;
        return `Vehicle has ${distance} miles and ${gallonsLeft} gallons left.`;

    } else {

        this.odometer = this.tank * this.milesPerGalon;
        this.tank = 0;
        return `Vehicle ran out of gas after driving ${this.odometer} miles. Vehicle now has ${this.odometer} miles on the odometer and ${this.tank} gallons of gas.`

    }

}

const car1 = new Car("Toyota", 25);
car1.fill(10);
console.log(car1.drive(100));

const car2 = new Car("Honda", 30);
car2.fill(5);
console.log(car2.drive(200));