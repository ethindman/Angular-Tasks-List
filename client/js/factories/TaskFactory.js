app.factory('TaskFactory', function($http) {
	
	var tasks = [];
	var factory = {};

	// get tasks
	factory.getTasks = function(callback) {
		$http.get('/tasks').success(function(output) {
			tasks = output;
			callback(tasks);
		})
	};

	// add new task
  factory.addTask = function(data, getTasks) {
    $http.post('/tasks/add', data).success(function(data) {
      tasks.push(data);
      getTasks(tasks);
    });
  };

	// destroy task
	factory.removeTask = function(task, callback) {
		$http.post('/tasks/delete', task).success(function(task) {
			tasks.splice(tasks.indexOf(task), 1);
			callback(tasks);
		});
	};

	return factory;

});