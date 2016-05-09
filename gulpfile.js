var gulp=require('gulp')
var uglify=require('gulp-uglify')
var rename=require('gulp-rename')

gulp.task('default', function(){
   gulp.src('./source/*.js')
      .pipe(gulp.dest('build/'))
})

gulp.task('demo2', function(){
   gulp.src('./source/*.js')
      .pipe(uglify())
      .pipe(rename({extname:'.min.js'}))
      .pipe(gulp.dest('build/'))
})
