var port = 3000;
var express = require('express');
var bodyPaser = require('body-parser');
var Post = require('./models/post');

var app = express();
app.use(bodyPaser.json());

app.get('/api/posts', function (req, res, next) {
    Post.find(function (err, posts) {
        if (err) {
            return next(err);
        }
        res.json(posts);
    });
});

app.post('/api/posts', function (req, res, next) {
    var post = new Post({
        username: req.body.username,
        body: req.body.body
    });
    post.save(function (err, post) {
        if (err) {
            return next(err)
        }
        res.json(201, post);
    });
    // res.send(201);
});

app.get('/', function (req, res) {
    res.sendfile('layouts/posts.html');
});

app.listen(port, function () {
    console.log('Server listening on', port);
});
