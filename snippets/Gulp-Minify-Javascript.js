/*** CONCATENATE AND MINIFY JAVASCRIPT FILES ***/

// INSTALL: 
// $> npm install gulp gulp-concat gulp-strip-debug gulp-rename gulp-uglify --save-dev

var gulp 	   = require('gulp'); 
var concat     = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var rename 	   = require('gulp-rename');
var uglify     = require('gulp-uglify');

gulp.task('scripts',function(){
	gulp.src(['./src/scripts/lib.js','./src/scripts/*.js'])
	.pipe(concat('script.js'))
	.pipe(stripDebug())
	.pipe(uglify())
    .pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./build/scripts/'));
});

gulp.task('default', ['scripts'], function(){});

// RUN:
// $> gulp scripts