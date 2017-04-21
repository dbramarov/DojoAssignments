app.factory('usersFactory', ['$http', function($http) {
  var factory = {};
  var users = [];

  factory.create = function(newUser, callback) {
      $http.post('/register', newUser).then(function(returned_data){
        console.log(returned_data.data);
        if(typeof(callback) == "function"){
          callback(returned_data.data);
        }
      })
        .catch(function(err){
        console.log(err);
      });
  }
  factory.login = function(user, callback){
      $http.post("/login", user)
      .then(function(returned_data){
        console.log(returned_data);
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