app.controller('mainController', function($scope,$http) {
	$scope.today = new Date().getMonth()+1+"-"+new Date().getDate()+"-"+new Date().getFullYear();
$scope.loading=[];
 $scope.selected =0;
$http.get("../assets/data/filmlist.json").success(function(response) {

		$scope.filmlist = response.data;
	});
	$scope.someAction = function(recordName, $index) {
		debugger;
  $scope.loading[$index] = true;
   $scope.selected = $index; 
};

	});
