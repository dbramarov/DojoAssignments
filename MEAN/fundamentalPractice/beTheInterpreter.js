//Problem 1 before:
console.log(first_variable);
var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);

console.log('********************');
//Problem 1 after:
var first_variable;
function firstFunc() {
	var first_variable;
  	first_variable = "Not anymore!!!";
  	console.log(first_variable);
}
first_variable = "Yipee I was first!";
console.log(first_variable)

//Problem 2 Before:
var food = "Chicken";
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
}
eat();
console.log(food);

console.log('********************');
//Problem 2 After:
var food;
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
}
food = 'Chicken';
eat();
console.log(food);

//Problem 3 before:
var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);
console.log('********************');

//Problem 3 after:
var new_word;
function lastFunc() {
	 new_word = "old";
}
console.log(new_word);