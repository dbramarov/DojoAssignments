$(document).ready(function(){
	$('img').click(function(){
		var ninjapic = $(this).attr('data-alt-src');
		$(this).attr('src', ninjapic);
	})
});