function fib() {

	var count1 = 0;
	var count2 = 1;
	console.log(count2);

  function nacci() {

  	var count3 = count1 + count2;
  	console.log(count3);
  	count1 = count2;
  	count2 = count3;

  }
  return nacci
}
var fibCounter = fib();

fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"