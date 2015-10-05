app.controller('cartController', function($scope,$rootScope,ngDialog) {


	$scope.showCart=function (item,b) {
		debugger;
		ngDialog.open({
			template: 'cart.html',
			className: 'ngdialog-theme-default ngdialog-theme-custom',
			controller: 'cartController'
		});

	};
	
	$scope.findTotal=function(){	
		return $rootScope.cart.reduce(add,0);
		function add(a,b){
			return parseFloat(a)+parseFloat(b.price||0);
		}
	}
	$scope.totalAmount=	$scope.findTotal();
});