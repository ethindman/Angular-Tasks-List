app.controller('TasksController', function($scope, TaskFactory) {

	// get tasks
	TaskFactory.getTasks(function(data) {
		$scope.tasks = data;
	})

	// add task
	$scope.addTask = function() {
		TaskFactory.addTask($scope.newTask, function() {
			TaskFactory.getTasks(function(data) {
				$scope.tasks = data;
			});
			$scope.newTask = {};
		});
	};

	// destroy task
	$scope.removeTask = function(task) {
		TaskFactory.removeTask(task, function() {
			TaskFactory.getTasks(function(data) {
				$scope.tasks = data;
			});
		});
	};

});