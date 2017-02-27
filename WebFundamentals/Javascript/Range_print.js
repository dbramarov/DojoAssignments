//Will print starting at "start" ending at "end" and incrimented by "skip" amount
function rangePrint(start, end, skip) {
	for(var i = start; i < end; i += skip){
		console.log(i);
	}
}
//If the user doesn't pass a skip amount, make it default to 1
function rangePrint(start, end, skip = 1) {
	for(var i = start; i < end; i += skip){
		console.log(i);
	}
}

rangePrint(2, 10, 1);
