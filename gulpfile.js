'use strict';

let browserSync  = require('browser-sync').create(),
    // gulp         = require('gulp'),
    pug          = require('gulp-pug'),
    sass         = require('gulp-sass'),
    cleancss     = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin     = require('gulp-imagemin'),
    notify       = require('gulp-notify'),
    rename       = require('gulp-rename'),
    del          = require('del'),
    sourcemaps   = require('gulp-sourcemaps'),
    uglify       = require('gulp-uglify'),
    wait         = require('gulp-wait'),
	reload       = browserSync.reload;
	
const { task, watch, src, dist } = require('gulp');

let config = {
	dist: './dist/',
	src: './src/',
	template: { in: './src/template/*.pug',
		out: './dist/'
	},
	style: { in: './src/style/**/*.{sass,scss}',
		out: './dist/style/'
	},
	script: { in: './src/script/app.js',
		out: './dist/script/'
	},
	image: { in: './src/img/**/*.{jpg,jpeg,png,gif,svg,ico}',
		out: './dist/img/'
	},
	font: { in: './src/font/**/*',
		out: './dist/font/'
	},
	watch: {
		template: './src/template/**/*.pug',
		style: './src/style/**/*.{sass,scss}'
	}
};

task('browser-sync', ['style', 'template', 'script'], function () {
	browserSync.init({
		server: {
			baseDir: config.dist
		},
		notify: true
	});
});

task('style', function () {
	return src([config.style.in])
		.pipe(wait(200))
		.pipe(sass())
		.on('error', notify.onError({
				message: '\n<%= error.message %>',
				title: 'SASS'
			})
		)
		.pipe(sourcemaps.init())
		.pipe(autoprefixer({
			browsers: ['last 4 versions']
		}))
		.pipe(cleancss())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(dest(config.style.out))
		.pipe(
			browserSync.reload({
				stream: true
			})
		);
});

task('template', function () {
	return src([
			config.template.in
		])
		.pipe(pug({
			pretty: true
		}))
		.on('error', notify.onError({
			message: '\n<%= error.message %>',
			title: 'TEMPLATE'
		}))
		.pipe(dest(config.template.out));
});

task('script', function () {
	return src([
			config.script.in
		])
		.on('error', notify.onError({
			message: '\n<%= error.message %>',
			title: 'SCRIPTS'
		}))
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(dest(config.script.out))
		.pipe(
			browserSync.reload({
				stream: true
			})
		);
});

task('js-lib', function () {
	return src([
			'./node_modules/jquery/dist/jquery.min.js',
			'./node_modules/bootstrap/dist/js/bootstrap.min.js',
			'./node_modules/owl.carousel/dist/owl.carousel.min.js'
		])
		.pipe(gulp.dest(config.script.out + '/lib/'))
		.pipe(
			browserSync.reload({
				stream: true
			})
		);
});

task('css-lib', function () {
	return src([
			'./node_modules/bootstrap/dist/css/bootstrap.min.css',
			'./node_modules/owl.carousel/dist/assets/owl.carousel.min.css'
		])
		.pipe(dest(config.style.out + '/lib/'))
		.pipe(
			browserSync.reload({
				stream: true
			})
		);
});

task('image', function () {
	return src(config.image.in)
		.pipe(imagemin({
			optimizationLevel: 5,
			progressive      : true,
			interlaced       : true,
			svgoPlugins      : [
				{
					removeViewBox: true
				}
			]
		}))
		.pipe(dest(config.image.out))
		.pipe(
			browserSync.reload({
				stream: true
			})
		);
});

task('font', function () {
	return src([
			config.font.in
		])
		.pipe(dest(config.font.out));
});

task('clean', function () {
	return del.sync(config.dist);
});

task('watch', function () {
	watch([config.watch.style], ['style']).on("change", reload)
	watch([config.watch.template], ['template']).on("change", reload)
	watch([config.script.in], ['script']).on("change", reload)
	watch([config.image.in], ['image']).on("change", reload);
});

task('default', ['clean'], function () {
	gulp.start('script', 'js-lib', 'css-lib', 'image', 'font', 'watch', 'browser-sync');
});