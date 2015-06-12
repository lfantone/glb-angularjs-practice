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
  'bower_components/spin.js/spin.js',
  'bower_components/angular-loading-spinner/angular-loading-spinner.js',
  'bower_components/angular-spinner/angular-spinner.js',
  'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
  'test/lib/angular-mocks.js',
  'js/app.js',
  'js/services/githubService.js',
  'js/controllers/homeController.js',
  'js/controllers/repositoriesController.js',
  'js/controllers/pullsAndCommitsController.js',
  'js/controllers/pullRequestModalController.js',
  'js/controllers/commitModalController.js',
  'test/routesTest.js',
  'test/repositoriesControllerTest.js',
  'test/pullsAndCommitsControllerTest.js',
  'test/pullRequestModalControllerTest.js',
  'test/commitsModalControllerTest.js',
  'test/githubServiceTest.js'
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