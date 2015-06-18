var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = (function (){
	return {

		// get all tasks from db
		show: function(request, response) {
			Task.find({}, function(error, data) {
				if(error) {
					console.log(error);
				}
				else {
					response.json(data);
				}
			});
		},

		// add new task to db
		add: function(request, response) {
			var now = new Date();
			var task = new Task({
				name: request.body.name, priority: request.body.priority, deadline: request.body.deadline, notes: request.body.notes, created_at: now
			});

			task.save(function(error) {
				if(error) {
					console.log(error);
				}
				else {
					console.log("New task added!");
					response.json(task);
				}
			});
		},

		// destroy task from db
		delete: function(request, response) {
			Task.remove({_id: request.body._id}, function(error, data) {
				if(error) {
					console.log(error);
				}
				else {
					console.log("Task deleted!");
					response.json(request.body);
				}
			});
		}

	};
})();