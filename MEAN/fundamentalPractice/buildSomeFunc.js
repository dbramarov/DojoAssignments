function runningLogger(){
	console.log('I am running!');
}

runningLogger();

function multiplyByTen(num){
	var x = num*10;
	console.log(x);
}

multiplyByTen(5);

function stringReturnOne(){
	console.log('My name is ');
}

function stringReturnTwo(){
	console.log('Dorian');
}

stringReturnOne();
stringReturnTwo();

function caller(arg){
	if(typeof(arg) == 'function'){
		arg();
	}
}

caller(multiplyByTen(5));

function myDoubleConsoleLog(arg1, arg2){
	if(typeof(arg1)=='function'){
		arg1();
	}
	if(typeof(arg2)=='function'){
		arg2();
	}
}

myDoubleConsoleLog(stringReturnOne(),stringReturnTwo());

function caller2(x){

	console.log('Starting');
	var poop = setTimeout(function(){
		if(typeof(x) == 'function'){
			x(stringReturnOne,stringReturnTwo);
			console.log('Ending');
		}
	}, 2000);
	return "Interesting";
}
caller2(myDoubleConsoleLog);