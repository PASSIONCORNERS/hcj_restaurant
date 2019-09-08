let gulp = require('gulp');
let postcss = require('gulp-postcss');
let browserSync = require('browser-sync').create();
let autoprefixer = require('autoprefixer');
let cssvars = require('postcss-simple-vars');
let cssnested = require('postcss-nested');
let cssimport = require('postcss-import');
let cssmixins = require('postcss-mixins');


function style() {
	//1. Where is my css file
	return gulp.src('./app/css/style.css')
	//2. Passing it through postCSS
	.pipe(postcss([cssimport, cssmixins,cssvars, cssnested, autoprefixer]))
	// error log on your css
	.on('error', function(errorInfo) {
		console.log(errorInfo.toString());
		this.emit('end');
	})
	//3. Where do I save the compliled file
	.pipe(gulp.dest('./app/temp'))
	//4. Stream changes to all browser
	.pipe(browserSync.stream());

}

function watch() {
	browserSync.init({
		server: {
			baseDir: './app'
		}
	});
	//watch all css then compile it through postcss -style
	gulp.watch('./app/css/**/*.css', style)
	//watch all html 
	gulp.watch('./app/*.html').on('change', browserSync.reload);
	//watch all js files
	gulp.watch('./app/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;