var port = 3000;
var express = require('express');
var bodyPaser = require('body-parser');

var app = express();
app.use(bodyPaser.json());

app.use('/api/posts', require('./controllers/api/posts'));
app.use('/', require('./controllers/static'));

app.listen(port, function () {
    console.log('Server listening on', port);
});
