'use strict';

var gulp = require('gulp');

gulp.task('watch', ['wiredep'] ,function () {
//  gulp.watch('src/{app,modules}/**/*.js', ['scripts']);
  gulp.watch('src/{app,modules}/**/*.js', ['styles']);
//  gulp.watch('src/assets/images/**/*', ['images']);
//  gulp.watch('bower.json', ['wiredep']);
});
