app.controller('mainController', function($scope,$http) {

$http.get("../assets/data/xvsy.json").success(function(response) {

		$scope.xvsy = response.data;
		$scope.comments = response.comments;
	});
	

	});
