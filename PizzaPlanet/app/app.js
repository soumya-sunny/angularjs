var app = angular.module('pizaPlanet', [ 'ngRoute','ngDialog']);
app.config(['$routeProvider',
  function($routeProvider) {
  
    $routeProvider.
     
      when('/:name', {
        templateUrl: 'views/detailedView.html',
        controller: 'mainController'
      }).
      otherwise({
        redirectTo: '/index'
      });
  }]);