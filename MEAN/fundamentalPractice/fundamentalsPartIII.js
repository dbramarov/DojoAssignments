function personConstructor(name){
	var person = {
		name: name,
		distance_traveled: 0,
		say_name: function(){console.log(person.name);},
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
	person.run();
}

personConstructor('Dorian');

function ninjaConstructor(name, cohort){
	var ninja = {
		name: name,
		cohort: cohort,
		belt_level: 0,
		levelUp: function(){
			ninja.belt_level+=1;
			console.log(ninja.belt_level)
		}
	}
	console.log(ninja);
}

ninjaConstructor('Dorian','Iota');