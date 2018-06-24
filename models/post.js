var db = require('../db');
var Post = db.model('Post', {
    username: { type: String, require: true},
    body: { type: String, require: true},
    date: { type: Date, require: true, default: Date.now},
});

module.exports = Post;