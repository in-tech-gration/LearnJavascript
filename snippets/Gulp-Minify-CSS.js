/*** CONCATENATE AND MINIFY CSS FILES ***/

// INSTALL:
// $> npm install gulp gulp-concat gulp-autoprefixer gulp-minify-css

var gulp 	   = require('gulp');
var concat 	   = require('gulp-concat');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS  = require('gulp-minify-css');

gulp.task('styles',function(){
	gulp.src(['./src/styles/*.css'])
	.pipe(concat('styles.css'))
	.pipe(autoprefix('last 2 versions'))
	.pipe(minifyCSS())
	.pipe(gulp.dest('./build/styles/'));
});

// RUN:
// $> gulp styles
