var arr = ["James", "Jill", "Jane", "Jack"];

function fancyArray(arr, sym){
	for (var i = 0; i <= arr.length-1; i++){
		console.log(i + " " + sym + " " + arr[i]);
	}
}
fancyArray(arr, "->"); //Will print array position followed by symbol and then array value "name"

function fancyArray(arr, sym, reversed){
	if (reversed === true) {
		for (var i = arr.length-1; i >= 0; i--){
			console.log(i + " " + sym + " " + arr[i]);
		}
	} else {
		for (var i = 0; i <= arr.length-1; i++){
			console.log(i + " " + sym + " " + arr[i]);
			}
		}
	}
fancyArray(arr, "->", true); //If reveresed is true, will print starting at the last array postition