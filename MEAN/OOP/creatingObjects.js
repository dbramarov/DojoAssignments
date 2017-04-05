function VehicleConstructor(name, numberOWheels, passengers, speed){
	var distance_traveled = 0;
	var updateDistanceTravelled = function(){
		distance_traveled += speed;
	}

	this.name = name;
	this.numberOWheels = numberOWheels;
	this.passengers = passengers;
	this.speed = speed; 

	this.makeNoise = function(){
		console.log("Beep Beep");
	}
	this.move = function(){
		updateDistanceTravelled();
		this.makeNoise();
	}
	this.checkMiles = function(){
		console.log(distance_traveled);
	}
	return this;
}

var Bike = new VehicleConstructor('Bike', 2, 1,50);

Bike.move()
Bike.checkMiles()
// Bike.makeNoise = function(){
// 	console.log('ring ring!');
// };

// Bike.makeNoise();

// var Sedan = new VehicleConstructor('Sedan', 4, 5);

// Sedan.makeNoise = function(){
// 	console.log("Honk Honk!");
// };

// Sedan.makeNoise();

// var Bus = new VehicleConstructor('Bus', 4, 20);

// Bus.morePassengers = function(num){
// 	Bus.passengers += num;
// 	console.log(Bus.passengers); 
// }

// Bus.morePassengers(10);