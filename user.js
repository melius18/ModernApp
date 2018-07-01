var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/auth_demo', function () {
    console.log('mongodb connected');
});

var user = mongoose.Schema({
    username: String,
    password: { type: String, select: true}
});

module.exports = mongoose.model('User', user);