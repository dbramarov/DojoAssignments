$(document).ready(function(){

	$('#btn').click(function(){
		var first = $('#fname').val()
		var last = $('#lname').val()
		var mail = $('#email').val()
		var cont = $('#cont').val()
		$('.table').append(
			`<tr><td>${first}</td><td>${last}</td><td>${mail}</td><td>${cont}</td>`
			);
	});




});