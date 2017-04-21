app.controller('editController', ['$scope','friendsFactory', '$routeParams', '$location' ,function($scope, friendsFactory, $routeParams, $location) {
  $scope.friend = {};

   friendsFactory.show($routeParams.id, function(returnedData){
     $scope.friend = returnedData;
     console.log($scope.friend);
   });

  $scope.edit = function(){
    friendsFactory.update($scope.friend, function(returnedData){
      console.log(returnedData);
      $location.url('/')
    })
  }
}]);