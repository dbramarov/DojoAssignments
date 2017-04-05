function VehicleConstructor(name, numberOWheels, passengers, speed){
	
	this.updateDistanceTravelled = function(){
		this.distance_traveled += speed;
		return this;
	}
	this.distance_traveled = 0;
	this.name = name;
	this.numberOWheels = numberOWheels;
	this.passengers = passengers;
	this.speed = speed; 

	VehicleConstructor.prototype.makeNoise = function(){
		console.log("Beep Beep");
		return this;
	}
	VehicleConstructor.prototype.move = function(){
		this.updateDistanceTravelled();
		this.makeNoise();
		return this;
	}
	VehicleConstructor.prototype.checkMiles = function(){
		console.log(this.distance_traveled);
		return this;
	}
	VehicleConstructor.prototype.vin = function(){
		this.vin = Math.floor(Math.random()*4000)+1;
		console.log(this.vin);
		return this;
	}
	return this;
}

var Bike = new VehicleConstructor('Bike', 2, 1,50);
var Sedan = new VehicleConstructor('Sedan', 4, 5, 40);
var Bus = new VehicleConstructor('Bus', 4, 20, 60);

Bike.vin();

// Sedan.makeNoise = function(){
// 	console.log("Honk Honk!");
// };

// Sedan.makeNoise();


// Bus.morePassengers = function(num){
// 	Bus.passengers += num;
// 	console.log(Bus.passengers); 
// }

// Bus.morePassengers(10);