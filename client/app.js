var myApp = angular.module('Myapp', ['ngRoute']);

(function(){
	myApp.config(function($routeProvider){
		$routeProvider
			.when('/', 
			{
				controller: 'mIndexController',
				templateUrl: "partials/mongoose/index.html"
			})
			.when('/mongoose/:id',{
				controller: 'mShowController',
				templateUrl: "partials/mongoose/show.html"
			})
			.when('/mongoose/:id/edit', {
				controller: 'mEditController',
				templateUrl: "partials/mongoose/edit.html"
			})
			.otherwise({
				redirectTo: "/"
			})
	})
}());