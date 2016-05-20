myApp.controller('mShowController', function($scope, $routeParams, $location, mongooseFactory){
	mongooseFactory.getMongoose($routeParams.id, function(data){
		$scope.mongoose = data;
	})
})