'use strict';

var gulp = require( 'gulp' );
var mocha = require( 'gulp-mocha' );
var istanbul = require( 'gulp-istanbul' );

gulp.task( 'test', function( cb ) {
  gulp.src([ 'index.js' ])
    .pipe( istanbul() )
    .pipe( istanbul.hookRequire() )
    .on( 'finish', function() {
      gulp.src([ './tests/**/*.js', './index.js' ])
      .pipe( mocha() )
      .pipe( istanbul.writeReports() )
      .on( 'end', cb );
    });
});

gulp.task( 'default', [ 'test' ], function() {
  gulp.watch([ 'tests/**/*.js', 'index.js' ], [ 'test' ]);
});