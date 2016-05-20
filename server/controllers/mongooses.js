var mongoose = require('mongoose');
var mongooseDb = mongoose.model('Mongoosedb');

module.exports = (function() {
	return {
		getMongooses: function(req, res){
			mongooseDb.find({}, function(err, mongooses){
				if(err){
					console.log(err);
					console.log('i messed up dude');
				} else {
					res.json(mongooses);
				}
			})
		},
		addMongoose: function(req, res){
			var newMongoose = new mongooseDb(req.body);
			newMongoose.save(function(err, mongoose){
				if(err){
					console.log(err);
				} else {
					res.json(newMongoose);
				}
			})
		},
		destroyMongoose: function(req, res){
			mongooseDb.remove({_id: req.params.id}, function(err, mong){
				if(err){
					console.log(err);
					console.log('looks like we have an error in destroyMongoose Controller');
				} else {
					res.json(mong);
				}
			})
		}, 
		getMongoose: function(req, res){
			mongooseDb.findOne({_id: req.params.id}, function(err, mong){
				if(err){
					console.log(err);
					console.log('looks like there was an error in getMongoose Controller');
				} else {
					res.json(mong);
				}
			})
		}, 
		updateMongoose: function(req, res){
			// mongooseDb.findOneAndUpdate({_id: req.params.id}, req.body, function(err, mong){
			// 	if(err){
			// 		console.log(err);
			// 	} else {
			// 		console.log(mong);
			// 	}
			// })
			mongooseDb.findOne({_id: req.params.id}, function(err, mong){
				if(err){
					console.log('could not find mongoose or something happened update mongoose');
				} else {
					mong.name = req.body.name
					mong.age = req.body.age
					mong.color = req.body.color
					mong.save(function(err, updatedMongoose){
						if(err){
							console.log(err);
							console.log('saving updated mongoose');
						} else {
							res.json(updatedMongoose);
						}
					})
				}
			})
		}
	}
})();