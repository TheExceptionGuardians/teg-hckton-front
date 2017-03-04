const path = require('path');
const gulp = require('gulp');
var flatten = require('gulp-flatten');
var urlAdjuster = require('gulp-css-url-adjuster');

const conf = require('../conf/gulp.conf');

gulp.task('component-assets-images', component_assets_images);
gulp.task('component-assets-fonts', component_assets_fonts);
gulp.task('modify-css-url', modify_css_url);
gulp.task('assets', gulp.series('component-assets-images','component-assets-fonts','modify-css-url'));

// Merge all images of component assets folder inside the dist assets images folder.
function component_assets_images(){
     return gulp.src(conf.paths.src+'/app/**/assets/**/*.{jpg,JPG,JPEG,png,PNG,gif,GIF}')
        .pipe(flatten())
        .pipe(gulp.dest(conf.paths.dist+'/assets/images'));
}
// Merge all fonts of component assets folder inside the dist assets fonts folder.
function component_assets_fonts(){
     return gulp.src(conf.paths.src+'/app/**/assets/**/*.{ttf,woff,eof,svg}')
        .pipe(flatten())
        .pipe(gulp.dest(conf.paths.dist+'/assets/fonts'));
}
// This task is used to replace the url of a component css which has a assets folder inside the component folder.
function modify_css_url(){
    return gulp.src(conf.paths.dist+'/assets/css/*.css')
        .pipe(urlAdjuster({
            replace:  ['assets/','../../assets/']
        }))
        .pipe(gulp.dest(conf.paths.dist+'/assets/css/'));
}