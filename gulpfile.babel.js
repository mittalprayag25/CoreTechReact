/* eslint-disable no-alert, angular/log, angular/json-functions */

import gulp from 'gulp';

import path from 'path';

import proxy from 'proxy-middleware';
import url from 'url';
import stubby from 'gulp-stubby-server';


// const exec = child.exec;
// const argv = yargs.argv;
const root = 'src/';
const paths = {
  dist: './dist/',
  build: './build/',
  scripts: [`${root}/app/**/*.js`, `!${root}/app/**/*.spec.js`],
  tests: `${root}/app/**/*.spec.js`,
  styles: `${root}/sass/**/*.scss`,
  stubs: 'stubs/*.{json,js}',
  templates: `${root}/app/**/*.html`,
  libs: `${root}/libs/`,
  index: `${root}/index.html`,
  // normal modules are minified
  modules: [
    'jquery.min.js',
    'angular.js',
    'angular-animate.js',
    'angular-ui-router.js',
    'bootstrap.min.js',
    'ui-bootstrap-tpls.js',
    'highcharts.js',
    'highcharts-more.js',
    'solid-gauge.js',
    'exporting.js',
    'lodash.js',
    'jquery.animateNumber.js',
    'bootstrap-combobox.js',
    'angular-screenfull.min.js',
    'screenfull.min.js'

  ],
  static: [
    `${root}/index.html`,
    `${root}/fonts/**/*`,
    `${root}/img/**/*`
  ]
};



gulp.task('stub', (cb) => {
  var options = {
    files: [
      paths.stubs
    ],
    callback: function(server, options) {
      server.get(1, function(err, endpoint) {
        if (!err) {
          console.log(endpoint);
        }
      });
    },
    mute: false,
    stubs: 8000,
    tls: 8443,
    admin: 8010

  };
  stubby(options, cb);
});
