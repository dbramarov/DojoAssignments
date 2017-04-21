app.factory('friendsFactory', ['$http', function($http) {
  var factory = {};
  var friends = []
  factory.index = function(callback) {
      $http.get('/friends').then(function(returned_data){
        friends = returned_data.data;
        callback(friends);
      });
  }
  factory.show = function(id, callback) {
      $http.get('/friends/'+ id).then(function(returned_data){
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }    
    })
  }
  factory.create = function(newfriend, callback) {
      $http.post('/friends', newfriend).then(function(returned_data){
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
  }
  factory.update = function(data, callback) {
    $http.put('/friends/'+ data._id, data).then(function(returned_data) {
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
    })
  }
  factory.delete = function(id, callback) {
      $http.delete('/friends/'+ id).then(function(returned_data){
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
    })
  }
  return factory;
}]);