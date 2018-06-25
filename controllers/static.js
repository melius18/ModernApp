var express = require('express');
var router = express.Router();

router.use(express.static(__dirname + '/../assets'));   // folder for static asset
console.log('static.js 1: ' + __dirname);
console.log('static.js 1: ' + process.cwd());

router.get('/', function (req, res) {
    res.sendfile('layouts/posts.html');
    console.log('static.js 2: ' + __dirname);
    console.log('static.js 2: ' + process.cwd());
});

module.exports = router;