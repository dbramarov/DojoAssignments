		var x = [3,5,'Dojo','rocks','Michael','Sensei'];

		for (var i = 0; i < x.length; i++) {
			console.log(x[i]);
		}

		x.push(100);
		console.log(x);

		x = ["hello", "world", "JavaScript is Fun"];
		console.log(x);

		var sum = 0
		for (var i = 1; i < 501; i++) {
			sum+=i;
		}
		console.log(sum);

		var y = [1, 5, 90, 25, -3, 0];
		var min = y[0];
		for (var i = 1; i < y.length; i++) {
			if(y[i]<min){
				min = y[i];
			}
		}
		console.log(min);

		var z = [1, 5, 90, 25, -3, 0];
		var sum = 0;
		for (var i = 0; i < z.length; i++) {
			sum+=z[i];
		}
		var avg =sum/z.length;
		console.log(avg);

		var newNinja = {
 			name: 'Jessica',
 			profession: 'coder',
 			favorite_language: 'JavaScript', 
 			dojo: 'Dallas'
		}

		for (var key in newNinja){
			if(newNinja.hasOwnProperty(key)){
				console.log(key +": "+ newNinja[key]);
			}
		}