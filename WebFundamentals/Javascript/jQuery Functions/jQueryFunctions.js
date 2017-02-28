// alert("connected");
$(document).ready(function(){

	$('#hide').click(function(){
		$('#theheader').hide('slow');
	});

	$('#show').click(function(){
		$('#theheader').show('slow');
	});

	$('#toggle').click(function(){
		$('#tog').toggle('slow');
	});

	$('#sup').click(function(){
		$('#slide').slideUp('slow');
	});

	$('#sdown').click(function(){
		$('#slide').slideDown('slow');
	});

	$('#fout').click(function(){
		$('#fade').fadeOut('slow');
	});

	$('#fin').click(function(){
		$('#fade').fadeIn('slow');
	});

	$('.list').hover(function(){
		$(this).toggleClass('selected');
	});

	$('#before').click(function(){
		$('#BA').before('<p>On Top!</p>');
	});

	$('#after').click(function(){
		$('#BA').after('<p>On Bottom!</p>')
	});

	$('#append').click(function(){
		$('#spec').append("<p>after!</p>")
	});

	$('#dmon').click(function(){
		$('#dmon').html('<h1>POWERED BY D$</h1>')
	});

	$('#ninja').click(function(){
		$('#ninja').attr('alt', 'cat pic...jk')
	});

	$('#coding').click(function(){
		$('input').val('CODING');
	});

	$('#dojo').click(function(){
		$('input').val('DOJO');
	});

	$('#ninja').click(function(){
		$('button').text('NINJA');
	});

	$( ".footer" ).data( "test", { first: "D", last: "$" } );
	$( "span:first" ).text( $( ".footer" ).data( "test" ).first );
	$( "span:last" ).text( $( ".footer" ).data( "test" ).last );


});