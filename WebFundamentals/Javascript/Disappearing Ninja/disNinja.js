$(document).ready(function(){
	
	$('#btn').click(function(){
		$('.ninja').show("slow");
	});

	$('#dor').click(function(){
		$('.secondrow').append('<img class="ninja" src="ninja.png" alt="ninja pic">');
	});

	$(document).on('click', 'img', function(){
		$(this).hide("slow");
	});

});