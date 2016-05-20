var mongooseController = require('./../controllers/mongooses.js')


module.exports = function(app){
	app.get('/mongooses', function(req, res){
		mongooseController.getMongooses(req, res);
	})
	app.post('/mongooses', function(req, res){
		mongooseController.addMongoose(req, res);
	})
	app.post('/mongooses/:id/delete', function(req, res){
		console.log('im getting the route');
		mongooseController.destroyMongoose(req, res);
	})
	app.get('/mongooses/:id', function(req, res){
		console.log('getting to show route');
		mongooseController.getMongoose(req, res);
	})
	app.post('/mongooses/:id/update', function(req, res){
		console.log('getting to the update route');
		mongooseController.updateMongoose(req, res);
	})
	// app.get('/get_topic', function(req, res){
	// 	topicController.getTopics(req, res);
	// })
}