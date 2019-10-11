const gulp = require('gulp');
const webpack = require('webpack-stream');
const clean = require('gulp-clean');

gulp.task('clean', () => {
    return gulp.src('documents', { read: false, allowEmpty: true })
        .pipe(clean());
});

gulp.task('webpack', () => {
    return gulp.src('doc/index.ts')
        .pipe(webpack(require('./scripts/webpack.config.build-doc.js')))
        .pipe(gulp.dest('documents/'));
});

gulp.task('copy', () => {
    return gulp.src([
        'src/**/*.md',
        'src/assets/**/*.svg',
        'doc/**/*.md',
        'README.md'
    ], {
        base: '.',
    }).pipe(gulp.dest('documents'));
});

gulp.task('default', gulp.series(['clean', 'webpack', 'copy']));