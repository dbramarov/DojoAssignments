app.factory('wallFactory', ['$http', function($http) {
  var factory = {};

  factory.getMessages = function(callback){
    $http.get('/mess').then(function(returned_data){
      callback(returned_data.data);
    })
  }

  factory.message = function(newMessage,  user , callback){
  	$http.post('/message/' + user, newMessage).then(function(returned_data){
  		if(typeof(callback) == "function"){
        	callback(returned_data.data);
        }
  	})
  	.catch(function(err){
   	console.log(err);
    });
  }

  factory.comment = function(newComment,  id , user, callback){
    $http.post('/comment/' + id + "/" + user, newComment).then(function(returned_data){
      if(typeof(callback) == "function"){
          callback(returned_data.data);
        }
    })
    .catch(function(err){
    console.log(err);
    });
  }  
  return factory;
}]);