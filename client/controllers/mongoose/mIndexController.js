myApp.controller('mIndexController', function($scope, $routeParams, $location, mongooseFactory){
	mongooseFactory.getMongooses(function(data){
		$scope.mongooses = data;
	})

	$scope.addMongoose = function(){
		mongooseFactory.addMongoose($scope.newMongoose, function(data){
			$scope.mongooses = data;
		})
	}

	$scope.removeMongoose = function(mongoose){
		mongooseFactory.removeMongoose(mongoose, function(data){
			$scope.mongooses = data;
		})
	}
	$scope.showMongoose = function(mongooseId){
		console.log(mongooseId);
		$location.path('/mongoose/' + mongooseId);
	}
})