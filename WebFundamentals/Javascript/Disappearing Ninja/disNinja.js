$(document).ready(function(){
	$('.ninja').click(function(){
		$(this).hide("slow");
	});

	$('#btn').click(function(){
		$('.ninja').show("slow");
	});

});