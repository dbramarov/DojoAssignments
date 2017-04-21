app.controller('newController', ['$scope','friendsFactory','$location', function($scope, friendsFactory, $location) {
  $scope.friends = {};

  var index = function () {
      friendsFactory.index(function(data) {
          $scope.friends = data;
      })
  }
  index();
  $scope.create = function() {
      friendsFactory.create($scope.newFriend, function(data) {
          $scope.friends = data;
          $location.url('/')
      });
  }
  $scope.new = function(){
    $location.url('/new');
  }
  $scope.delete = function(data){
    friendsFactory.delete(data);
  index();
  }
}]);