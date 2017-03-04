const path = require('path');

const gulp = require('gulp');
const del = require('del');
const filter = require('gulp-filter');
const zip = require('gulp-zip');

const conf = require('../conf/gulp.conf');

gulp.task('clean', clean);
gulp.task('other', other);
gulp.task('zip', zipApp);

function zipApp(){
  return gulp.src(path.join(conf.paths.dist,'/**'))
        .pipe(zip('dist.zip'))
        .pipe(gulp.dest('./'+conf.paths.dist));
}

function clean() {
  return del([conf.paths.dist, conf.paths.tmp]);
}

function other() {
  const fileFilter = filter(file => file.stat.isFile());

  return gulp.src([
    conf.paths.src+'/**/*',
    `!${conf.paths.src}`+'/**/*.{css,js,html}',
    `!${conf.paths.src}`+'/app/**/assets/**/*'
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(conf.paths.dist));
}
