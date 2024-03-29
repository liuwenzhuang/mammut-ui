const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('webpack', () => {
    return gulp.src('doc/index.ts')
        .pipe(webpack(require('./scripts/webpack.config.build-doc.js')))
        .pipe(gulp.dest('documents/'));
});

gulp.task('copy', () => {
    return gulp.src([
        'src/**/*.md',
        'src/assets/**/*.svg',
        'src/components/icon/fonts/*',
        'doc/**/*.md',
        'README.md'
    ], {
        base: '.',
    }).pipe(gulp.dest('documents'));
});

gulp.task('default', gulp.series(['webpack', 'copy']));