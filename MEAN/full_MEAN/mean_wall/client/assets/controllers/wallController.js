app.controller('wallController', ['$scope','usersFactory','wallFactory','$location', '$cookies', function($scope, usersFactory, wallFactory, $location, $cookies) {
$scope.messages = {};
$scope.newComment = {};

$scope.user = $cookies.get("user_name");

	if(!$scope.user){
		$location.url('/')
	}

	var getMessages = function(){
		wallFactory.getMessages(function(data){
			$scope.messages = data;
		})
	}
	getMessages()

    $scope.logout = function(){
        var cookies = $cookies.getAll();
        angular.forEach(cookies, function(v, k){
            $cookies.remove(k);
        })
        $location.url("/");
    }	
    $scope.message = function(user){
    	wallFactory.message($scope.newMessage, user ,function(data){
    		$scope.newMessage = {};
    		getMessages();
    	})
    }
    $scope.comment = function(id, ind){
    	console.log(id);
    	wallFactory.comment($scope.newComment[ind], id , $scope.user ,function(data){
    		console.log(data)
    		$scope.newComment = {};
    		getMessages();
    	})
    }    
}]);