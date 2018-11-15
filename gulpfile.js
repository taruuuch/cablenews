let browserSync   = require('browser-sync').create(),
    gulp          = require('gulp'),
    pug           = require('gulp-pug'),
    sass          = require('gulp-sass'),
    cleancss      = require('gulp-clean-css'),
    autoprefixer  = require('gulp-autoprefixer'),
    imagemin      = require('gulp-imagemin'),
    notify        = require('gulp-notify'),
    rename        = require('gulp-rename'),
    del           = require('del'),
    sourcemaps    = require('gulp-sourcemaps'),
    uglify        = require('gulp-uglify'),
    reload        = browserSync.reload;

let config = {
  dist: './dist/',
  src: './src/',
  template: {
    in: './src/template/*.pug',
    out: './dist/'
  },
  style: {
    in: './src/style/*.{sass,scss}',
    out: './dist/style/'
  },
  script: {
    in: './src/script/app.js',
    out: './dist/script/'
  },
  image: {
    in: './src/img/**/*.{jpg,jpeg,png,gif,svg,ico}',
    out: './dist/img/'
  },
  font: {
    in: './src/font/**/*',
    out: './dist/font/'
  },
  watch: {
    template: './src/template/**/*.pug',
    style: './src/style/**/*.{sass,scss}'
  }
};

gulp.task('browser-sync', ['style','template','script'], function() {
  browserSync.init({
    server: {
      baseDir: config.dist
    },
    notify: true
  });
});

gulp.task('style', function () {
  return gulp.src([config.style.in])
    .on('error', notify.onError({
      message: 'error: <%= error.message %>',
      title: 'sass error'
    }))
    .pipe(sass.sync())
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
        browsers: ['last 4 versions']
    }))
    .pipe(cleancss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.style.out))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

gulp.task('template', function() {
  return gulp.src([config.template.in])
    .pipe(pug({
      pretty: true
    }))
    .on('error', notify.onError({
      message: 'error: <%= error.message %>',
      title: 'template error'
    }))
    .pipe(gulp.dest(config.template.out));
});

gulp.task('script', function () {
  return gulp.src([
      config.script.in
    ])
    .pipe(sourcemaps.init())
    .on('error', notify.onError({
      message: 'error: <%= error.message %>',
      title: 'scripts error'
    }))
    // .pipe(babel())
    // .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.script.out))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

gulp.task('js-lib', function() {
  return gulp.src([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/owl.carousel/dist/owl.carousel.min.js'
  ])
  .pipe(gulp.dest(config.script.out + '/lib/'))
  .pipe(
    browserSync.reload({
      stream: true
    })
  );
});

gulp.task('css-lib', function() {
  return gulp.src([
    './node_modules/owl.carousel/dist/assets/owl.carousel.min.css'
  ])
  .pipe(gulp.dest(config.style.out + '/lib/'))
  .pipe(
    browserSync.reload({
      stream: true
    })
  );
});

gulp.task('image', function(){
  return gulp.src(config.image.in)
    .pipe(imagemin({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(config.image.out));
});

gulp.task('font',function(){
  return gulp.src(config.font.in)
    .pipe(gulp.dest(config.font.out));
});

gulp.task('clean', function() {
  return del.sync(config.dist);
});

gulp.task('watch', function() {
  gulp.watch([config.watch.style], ['style']).on("change", reload)
  gulp.watch([config.watch.template], ['template']).on("change", reload)
  gulp.watch([config.script.in], ['script']).on("change", reload)
  gulp.watch([config.image.in], ['image']).on("change", reload);
});

gulp.task('default', ['clean'], function() {
  gulp.start('script', 'js-lib', 'css-lib', 'image', 'font', 'watch', 'browser-sync');
});