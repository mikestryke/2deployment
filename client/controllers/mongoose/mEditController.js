myApp.controller('mEditController', function($scope, $routeParams, $location, mongooseFactory){
	mongooseFactory.getMongoose($routeParams.id, function(data){
		$scope.editMongoose = data;
	})
	$scope.updateMongoose = function(){
		mongooseFactory.updateMongoose($scope.editMongoose, function(data){
		// 	if(data.errors.length > 0){
		// 		$scope.errors = data.errors;
		// 	} else {
		// 		$location.path('/');
		// 	}
			$location.path('/');
		});
	}
})