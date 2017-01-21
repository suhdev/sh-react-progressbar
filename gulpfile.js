var gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    webpack = require('gulp-webpack'),
    cp = require('child_process'); 

gulp.task('sass',()=>{
    gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist')); 
    return gulp.src('./sass/*.scss')
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .pipe(rename('Progressbar.min.css'))
        .pipe(gulp.dest('./dist')); 
});


gulp.task('js',()=>{
    let config = require('./webpack.config.js'); 
    gulp.src('./Progressbar.tsx')
        .pipe(webpack(config))
        .pipe(rename('Progressbar.js'))
        .pipe(gulp.dest('./dist')); 
    cp.execSync('webpack --optimize-minimize'); 
});

gulp.task('default',['sass','js'],()=>{

});