'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    browserify = require('browserify'),
    debowerify = require('debowerify'),
    watchify = require('watchify');

var distPath = './';

gulp.task('bundler-watch', function () {

    var bundler = watchify(browserify('./src/app/index.js',{debug: true}).transform(debowerify));


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
            .pipe(source('app.js'))
            .pipe(buffer())
            .pipe(gulp.dest(distPath));
    }

    rebundle();
});
