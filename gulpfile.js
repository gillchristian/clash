'use strict';

var gulp            = require('gulp'),
    rename          = require('gulp-rename'),
    sourcemaps      = require('gulp-sourcemaps'),
    webpack         = require('webpack-stream'),
    // --- jade plugins
    plumber         = require('gulp-plumber'),
    jade            = require('gulp-jade'),
    merge           = require('merge-stream'),
    // --- postCSS plugins
    postcss         = require('gulp-postcss'),
    rucksack        = require('gulp-rucksack'),
    // --- require the config variables
    TASKS           = require('./gulp-config/tasks'),
    FILES           = require('./gulp-config/files'),
    CSSPLUGINS      = require('./gulp-config/postcss');

// require the postCSS plgins, files and tasks paths

// deveolpment style tasks
// --------------------------------------------------------
gulp.task(TASKS.dev.style, function () {

    return gulp.src(FILES.css.source)
        .pipe( plumber() )
        .pipe( sourcemaps.init() )
        .pipe( postcss(CSSPLUGINS.preRucksack) )
        .pipe( rucksack({autoprefixer: true, fallbacks: false }) )
        .pipe( sourcemaps.write('.') )
        .pipe( plumber.stop() )
        .pipe( gulp.dest(FILES.css.dest) );
});

gulp.task(TASKS.watch.style, function () {
    gulp.watch( FILES.css.all , [TASKS.dev.style]);
});


// jade task
// --------------------------------------------------------
gulp.task(TASKS.dev.jade, function () {

    // compile jade angularViews 
    var angularViews = gulp.src(FILES.jade.angularViews)
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(plumber.stop())
        .pipe(gulp.dest(FILES.jade.dest.angularViews));

    // compile jade others
    var others = gulp.src(FILES.jade.others)
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(plumber.stop())
        .pipe(gulp.dest(FILES.jade.dest.others));

    // compile jade index    
    var index = gulp.src(FILES.jade.index)
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(plumber.stop())
        .pipe(gulp.dest(FILES.jade.dest.index));

    return merge(angularViews, others, index);

});

gulp.task(TASKS.watch.jade, function () {
    gulp.watch( FILES.jade.all, [TASKS.dev.jade]);
});

// watch all
// --------------------------------------------------------

gulp.task(TASKS.watch.all, function () {
    gulp.watch( FILES.jade.all, [TASKS.dev.jade]);
    gulp.watch( FILES.css.all, [TASKS.dev.style]);
    gulp.watch( FILES.js.all, [TASKS.js.webpack]);
});


// production build
// --------------------------------------------------------
gulp.task(TASKS.production.style, function (){
    
    return gulp.src(FILES.css.source)
        .pipe( plumber() )
        .pipe( postcss(CSSPLUGINS.preRucksack) )
        .pipe( rucksack({autoprefixer: true, fallbacks: false}) )
        .pipe( gulp.dest(FILES.css.dest) )
        .pipe( rename({suffix: '.min'}))
        .pipe( postcss(CSSPLUGINS.postRucksack) )
        .pipe( plumber.stop() )
        .pipe( gulp.dest(FILES.css.dest) );     

});

gulp.task(TASKS.production.ready, [TASKS.dev.jade , TASKS.production.style], function() {

});

// js bundle --- webpack
// --------------------------------------------------------
gulp.task(TASKS.js.webpack, function (){
    
    let configjs = require('./webpack.config.js');
    
    return gulp.src(FILES.js.src)
      .pipe( webpack( configjs ) )
      .pipe( rename('bundle.js') )
      .pipe( gulp.dest(FILES.js.bundle) );  

});


// default
// --------------------------------------------------------
gulp.task(TASKS.default, [TASKS.dev.style, TASKS.dev.jade , TASKS.watch.all], function() {

});