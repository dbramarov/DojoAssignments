//function that will return all prime numbers up to number input
function primeNums(num){
	for (var i = 2; i <= num; i++){    //2 - num
		for (var n = 1; n <= i; n++){
			if(i%n !== 0 && i%num !== 0){
				continue;
			}
			else{
				console.log(n);
			}
		}
	}
}