function forABillion(){
	var sum = 0.1;
	for(var i = 1; i <= 30; i++){
		sum *= 2; 
	}
	console.log(sum); 
}

function forABillion(){
	var sum = 0.1;
	for(var i = 1; i <= 30; i++){ 
		if (sum > 10000){
			break;
		} sum *= 2;
	}
	console.log(i); //18 days to reach over $10,000
	console.log(sum); // Total after 18 days = $13107.20
}

function forABillion(){
	var sum = 0.1;
	for(var i = 1; i <= 40; i++){ 
		if (sum > 1000000000){
			break;
		} sum *= 2;
	}
	console.log(i); //35 days to reach over $1,000,000,000
	console.log(sum); // Total after 35 days = $1,717,986,918.40
}