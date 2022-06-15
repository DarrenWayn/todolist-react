const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

// one to compile our sass
function buildStyles() {
    return src('./sass/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({ content: ['../public/*.html'] }))
        .pipe(dest('css'))
}

// this one to watch our sass files
function watchTask() {
    watch(['./sass/**/*.scss', '../public/*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)