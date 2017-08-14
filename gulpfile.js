var gulp = require("gulp"),
	uglify = require("gulp-uglify"),
	rename = require("gulp-rename"),
	jshint = require("gulp-jshint"),
	concat = require("gulp-concat"),
	sourcemaps = require("gulp-sourcemaps"),
	del = require("del");
var static = 'server/static';
var staticFolders = ['js', 'css'];
var requiredFiles = {

	'js': [
		'node_modules/html5-boilerplate-npm/js/vendor/jquery-1.9.1.min.js',
		'node_modules/html5-boilerplate-npm/js/vendor/modernizr-2.6.2.min.js',
		'node_modules/angular/angular.min.js',
		'app/lib/angular-ui-router.min.js',
		'node_modules/bootstrap/dist/js/bootstrap.min.js',
		'app/app.js',
	],

	'css': [
		'node_modules/html5-boilerplate-npm/css/main.css',
		'node_modules/html5-boilerplate-npm/css/normalize.css',
		'node_modules/bootstrap/dist/css/bootstrap.css',
	]

};

function packJS() {
	return gulp.src(requiredFiles['js'])
		.pipe(sourcemaps.init())
		.pipe(concat('bootstrapper.bundle.js'))
		.pipe(rename('bootstrapper.bundle.min.js'))
		.pipe(uglify({
			'mangle': false
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(static + '/js'));
}

function packCSS() {
	return gulp.src(requiredFiles['css']).pipe(gulp.dest(static + '/css'));
}

function packPartials() {
	return gulp.src('app/partials/**').pipe(gulp.dest(static + '/partials'));
}

function lint() {
	return gulp.src(requiredFiles['js'])
		.pipe(jshint())
		.pipe(jshint.reporter());

}

function clean() {
	return del([
		"server/static/**"
	]);
}

var build = gulp.series(clean, lint, packJS, packPartials, packCSS);
gulp.task("build", build);