var int = function sum(x,y){
	var sum = 0
	if(y>x){
		for (var i = x; i <= y; i++) {
			sum+=i;
		}
	}
	else{
		for (var i = y; i <= x; i++) {
			sum+=i;
		}		
	}
	console.log(sum);
}

int(10,1);

var minimum = function minArr(arr){
	var min = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if(arr[i]<min){
			min = arr[i];
		}
	}
	console.log(min);
}

minimum([1,2,3,-4,5,6,7]);

var avgg = function average(arr){
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum+=arr[i];
	}
	var avg =sum/arr.length;
	console.log(avg);	
}

avgg([1,2,3,4,5,6]);

var person = {
	name: 'Dorian',
	distance_traveled: 0,
	say_name: function(){alert(person.name);},
	say_something: function(param){console.log(person.name + " says " + param)},
	walk: function(){
		console.log(person.name + " is walking"); 
		person.distance_traveled+=3;
		console.log(person.distance_traveled);
	},
	run: function(){
		console.log(person.name + " is running"); 
		person.distance_traveled+=10;
		console.log(person.distance_traveled);		
	},
	crawl: function(){
		console.log(person.name + " is crawling"); 
		person.distance_traveled+=1;
		console.log(person.distance_traveled);		
	},
}
person.crawl();
