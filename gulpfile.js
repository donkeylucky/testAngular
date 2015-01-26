// Gulp and plugins
var gulp = require('gulp'),
    livereload = require('gulp-livereload');

//监听
gulp.task('watch', function () {

    livereload.listen();
    gulp.watch('./**/*.*').on('change',function(e){
        //console.log('Event path: ' + e.path);
        livereload.changed(e.path);
    });

});



