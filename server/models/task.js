var mongoose = require('mongoose');

// declares schema
var TaskSchema = new mongoose.Schema({
	name: String,
	priority: String,
	deadline: Date,
	notes: String,
	created_at: Date
});

// creates collection 'friends' (plural) using friendSchema
mongoose.model('Task', TaskSchema);