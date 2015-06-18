var tasks = require('./../server/controllers/tasks.js');

module.exports = function(app) {
	//place routes here to query database
	
	// get all tasks
	app.get('/tasks', function(request, response) {
		tasks.show(request, response);
	});

	// add task
	app.post('/tasks/add', function(request, response) {
		tasks.add(request, response);
	});

	// destroy task
	app.post('/tasks/delete', function(request, response) {
		tasks.delete(request, response);
	});
	
};