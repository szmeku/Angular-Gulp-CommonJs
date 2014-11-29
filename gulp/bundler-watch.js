'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    debowerify = require('debowerify'),
    watchify = require('watchify');

var distPath = './src';

gulp.task('bundler-watch', function () {

    var bundler = watchify(browserify('./src/app/index.js', {debug: true}).transform(debowerify));


    bundler.on("log", function (msg) {
        gutil.log(gutil.colors.green(msg));
    });
    bundler.on('update', rebundle);

    function rebundle(file) {

        if (file) {
            file.map(function (fileName) {
                gutil.log('File updated', gutil.colors.blue(fileName));
            });
        }

        return bundler
            .bundle()
            .on("error", function (err) {
                gutil.log("Browserify error:", err);
            })
            .pipe(source('bundle.js'))
            .pipe(gulp.dest(distPath));
    }

    rebundle();
});
