$(document).ready(function(){

	for(var i = 1; i <= 151; i++){
		$('.pok').append('<img id=' + i + ' src="http://pokeapi.co/media/img/' + i + '.png">')
	}
	$(document).on('click', 'img', function(){

		var id = $(this).attr('id');
		$.get("http://pokeapi.co/api/v1/pokemon/"+id+"/", function(res){
					 	var html_str = "";
	                    html_str += "<h4>Types</h4>";
	                    html_str += "<ul>"; 
	                    for(var i = 0; i < res.types.length; i++) {
	                        html_str += "<li>" + res.types[i].name + "</li>";
	                    }
	                    html_str += "</ul>";
						$('.type').html(html_str);
					$('.height').html('<h4>Height: </h4>' + res.height);
					$('.weight').html('<h4>Weight: </h4>' + res.weight + " lbs");
					$('.name').html(res.name)
					$('.pic').html('<img id=' + id + ' src="http://pokeapi.co/media/img/' + id + '.png">');
	    }, "json");
	});
});