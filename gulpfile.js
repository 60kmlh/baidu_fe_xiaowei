var gulp = require('gulp')
var livereload = require('gulp-livereload')

// gulp.task('watchHtml',function(){
//     gulp.src('src/*.html').pipe(livereload()).pipe(gulp.dest('dist'))
// })

// gulp.task('css',function () {
//         return gulp.src('src/*.css')
//             .pipe(gulp.dest('dist/css'));
//     });

gulp.task('watch',function(){
    // livereload.listen({start: true })
    // gulp.watch('src/index.html',['watchHtml'])
    gulp.task('watch',function () {
        livereload.listen();    
        gulp.watch('src/*/*.*',function(file){
            livereload.changed(file.path);  //changed()方法必须启动服务器才能使用，不然会报错
        });
    });
})

gulp.task('default',['watch'])