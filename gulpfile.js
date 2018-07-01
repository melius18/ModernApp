var gulp = require('gulp');
var fs = require('fs');

fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
    require('./gulp/' + task);
});

gulp.task('dev', ['watch:js', 'watch:css', 'dev:server'], function () {
    console.log('watch all gulp tasks.');
});