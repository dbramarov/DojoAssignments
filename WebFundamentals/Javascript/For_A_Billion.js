function forABillion(){
	var sum = 0.01;
	for(var i = 1; i <= 30; i++){
		sum *= 2; 
	}
	console.log(sum); //Total after 30 days = $10,737,418.24
}

function forABillion(){
	var sum = 0.01;
	for(var i = 1; i <= 30; i++){ 
		sum *= 2;
		if (sum > 10000){
			break;
		} 
	}
	console.log(i); //20 days to reach over $10,000
	console.log(sum); // Total after 18 days = $10,485.76
}

function forABillion(){
	var sum = 0.01;
	for(var i = 1; i <= 40; i++){ 
		sum *= 2;
		if (sum > 1000000000){
			break;
		} 
	}
	console.log(i); //37 days to reach over $1,000,000,000
	console.log(sum); // Total after 35 days = $1,374,389,534.72
}