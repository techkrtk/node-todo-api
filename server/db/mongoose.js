var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://root:root1928@ds159100.mlab.com:59100/todo1928' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
