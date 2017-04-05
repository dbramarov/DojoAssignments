var int = (x,y) => {
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

var minimum = (arr) => {
	var min = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if(arr[i]<min){
			min = arr[i];
		}
	}
	console.log(min);
}

minimum([1,2,3,-4,5,6,7]);