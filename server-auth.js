var port = 3000;
var express = require('express');
var jwt = require('jwt-simple');
var _ = require('lodash');
var app = express();
var bcrypt = require('bcrypt');
app.use(require('body-parser').json());

var users = [{ username: 'rcode', password: '$2b$10$M9mgGtrV3Tic2sn7aandm.YfGY2kL3F0EcT.GnECwhSv6o6U7Zhhm' }];
var secretKey = 'supersecretkey';

function findUserByUsername(username) {
    return _.find(users, { username: username });
}

function validateUser(user, password, cb) {
    // return user.password == password;
    bcrypt.compare(password, user.password, cb);
}

app.post('/session', function (req, res) {
    var user = findUserByUsername(req.body.username);
    validateUser(user, req.body.password, function (err, valid) {
        if (err || !valid) { return res.send(401); }
        var token = jwt.encode({ username: user.username }, secretKey);
        res.json(token);
    });
});

app.get('/user', function (req, res) {
    var token = req.headers['x-auth'];
    var user = jwt.decode(token, secretKey);
    res.json(user);
});

app.listen(port);