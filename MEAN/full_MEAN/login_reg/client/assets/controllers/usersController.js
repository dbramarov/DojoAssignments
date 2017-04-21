app.controller('usersController', ['$scope','usersFactory','$location', '$cookies', function($scope, usersFactory, $location, $cookies) {
  $scope.messages = [];
  // $scope.flag = false;
  $scope.user = $cookies.get("user_id");

  $scope.create = function () {
      usersFactory.create($scope.newUser, function(data) {
            if(data.errors){
              if(typeof(data.errors) == "object"){
                angular.forEach(data.errors, function(v, k){
                $scope.messages.push(data.errors[k].message);
              })
            }
            else{
                $scope.messages.push(data.errors);
            }
                // $scope.flag = true;
                $location.url("/");
            }
            else{
                $scope.user = data
                // $scope.flag = false;
                $cookies.put("user_id", data.first_name);
                console.log($cookies.get("user_id"));
                $location.url("/success");
           }
      })
  }
    $scope.login = function(){
        usersFactory.login($scope.user, function(data){
            if(data.errors){
                console.log(data.errors);
                $scope.messages.push(data.errors);
                // $scope.flag = true;
                $location.url("/login");
            }
            else {
                // $scope.flag = false;
                $cookies.put("user_id", data.first_name);
                console.log(data.first_name)
                console.log($cookies.get("user_id"));
                $location.url("/success");
            }
        })
    }
    $scope.logout = function(){
        var cookies = $cookies.getAll();
        angular.forEach(cookies, function(v, k){
            $cookies.remove(k);
        })
        console.log($cookies.get("user_id"));
        $location.url("/");
    }
}]);