$(document).ready(function(){

	$('#btn').click(function(){

		var first = $('#fname').val();
		var last = $('#lname').val();
		var desc = $('#tarea').val();

		$('#fname').val('');
		$('#lname').val('');
		$('#tarea').val('');

		$('.right').append("<div class='app'><h2>" + first + " " + last + "</h2><h4 class='des'>Click for description!</h4> <p hidden>" + desc + "</p></div>");
		
	
	});

	$(document).on('click', '.app', function(){

		$(this).children().toggle('slow');

	});
	
});
