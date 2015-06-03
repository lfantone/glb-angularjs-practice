var gulp = require('gulp');
var karma = require('gulp-karma');
var open = require('gulp-open');

gulp.task('openReporter', function() {
  gulp.src('./test-result.html')
  .pipe(open('<%file.path%>'));
});

var testFiles = [
  'bower_components/angular/angular.js',
  'bower_components/angular-route/angular-route.min.js',
  'test/lib/angular-mocks.js',
  'js/app.js',
  'js/services/githubService.js',
  'js/controllers/homeController.js',
  'js/controllers/repositoriesController.js',
  'js/controllers/commitsController.js',
  'test/firstTestSpecs.js',
  'test/routesTestSpecs.js',
  'test/repositoriesControllerTestSpecs.js',
  'test/commitsControllerTestSpecs.js',
  'test/githubServiceTestSpecs.js'
];
 
gulp.task('test', function() {
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      throw err;
    });

});

gulp.task('default', ['test', 'openReporter']);