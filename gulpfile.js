var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var compass = require('gulp-compass');
var less = require('gulp-less');
var fileinclude = require('gulp-file-include');

gulp.task('browser-sync',function(){
	browserSync.init({
		server:'./src'
	});
	gulp.watch("./src/sass/*.scss",['compass']).on('change',reload);
	gulp.watch("./src/less/*.less",['gulpLess']).on('change',reload);
	gulp.watch("./src/*.html").on('change',reload);
	gulp.watch("./src/css/*.css").on('change',reload);
	gulp.watch("./src/js/*.js").on('change',reload);
	gulp.watch("./src/templates/*.html",['fileinclude']).on('change',reload);
	gulp.watch("./src/include/*.html",['fileinclude']).on('change',reload);
});

gulp.task('compass',function(){
	gulp.src('./src/*.scss')
		.pipe(compass({
			css:'./src/css',
			sass:'./src/sass/'
		}))
		.on('error',function(){console.log('sass代码出错，请检查代码');return;});
});

gulp.task('gulpLess',function(){
	gulp.src('./src/less/*.less')
	.pipe(less())
	.pipe(gulp.dest('src/css'));
})


gulp.task('fileinclude', function() {
	console.log('this is file-include');
	gulp.src(['src/templates/*.html'])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
    .pipe(gulp.dest('src/'));
});

gulp.task('dist', function() {
	console.log('正在发布中');
	gulp.src(['src/*.html'])
    	.pipe(gulp.dest('dist/'));
	gulp.src(['src/css/*.css'])
		.pipe(gulp.dest('dist/css/'));
	gulp.src(['src/img/*/*'])
		.pipe(gulp.dest('dist/img/'));
	gulp.src(['src/js/*'])
		.pipe(gulp.dest('dist/js/'));
	gulp.src(['src/js/page/*'])
		.pipe(gulp.dest('dist/js/page'));
	gulp.src(['src/include/*'])
		.pipe(gulp.dest('dist/include'));
});

gulp.task('default',['browser-sync']);

