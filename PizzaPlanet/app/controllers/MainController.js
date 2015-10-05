app.controller('mainController', function($scope, $rootScope,$http,Cart) {
	$scope.today = new Date().getMonth()+1+"-"+new Date().getDate()+"-"+new Date().getFullYear();

	$http.get("../assets/data/menu.json").success(function(response) {
		$scope.menu = response.data;
	});

	$rootScope.cart=[];
	$rootScope.cartCount=0;

	$scope.addToCart=function (item,event) {
		//debugger;
		if(event.target.textContent=="Add"){
			$rootScope.cart.push(item);
			event.target.textContent="Remove";
			$rootScope.cartCount++;
		}
		else{
			for (var i =0; i < $rootScope.cart.length; i++)
				if ($rootScope.cart[i].name === item.name) {
					$rootScope.cart.splice(i,1);
					break;
				}
				event.target.textContent="Add";
				$rootScope.cartCount--;
			}
		};

	});
