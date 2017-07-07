//function that will return all prime numbers up to number input
function primeNums(num){
	var arr = [2,3];
	for (var i = 5; i <= num; i++){   
		var flag = true;
		for (var n = 0; n < arr.length; n++){
			if(i % arr[n] == 0){
				flag = false;
				break;
			}
		}
		if(flag){
			arr.push(i);
		}
	}
	console.log(arr);
	return arr;
}
