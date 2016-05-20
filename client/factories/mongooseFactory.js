myApp.factory('mongooseFactory', function($http){
	var factory = {}
	var mongooses = []

	factory.getMongooses = function(callback){
		$http.get('/mongooses').then(function(data){
			mongooses = data.data;
			callback(data.data);
		});
	}

	factory.addMongoose = function(info, callback){
		$http.post('/mongooses', info).then(function(data){
			if(data.data.error){
				callback(data.data);
			}else{
				mongooses.push(data.data)
				callback(mongooses);
			}
		})
	}

	factory.removeMongoose = function(mongoose, callback){
		$http.post('/mongooses/' + mongoose._id  + '/delete').then(function(data){
			console.log(data);
			mongooses.splice(mongooses.indexOf(mongoose), 1);
			callback(mongooses);
		})
	}
	factory.getMongoose = function(mongooseId, callback){
		$http.get('/mongooses/' + mongooseId).then(function(data){
			callback(data.data);
		})
	}
	factory.updateMongoose = function(mongoose, callback){
		$http.post('/mongooses/' + mongoose._id + '/update', mongoose).then(function(data){
			mongooses[mongooses.indexOf(data.data)] = data.data;
			callback(data);
		})
	} 

	return factory;
})