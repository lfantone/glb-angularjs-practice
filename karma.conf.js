// Karma configuration
// Generated on Wed May 27 2015 14:41:03 GMT-0300 (Argentina Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    /*files: [
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
      'test/githubServiceTestSpecs.js'
    ],*/


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','jasmine-runner'],

    //karma-jasmine-runner-reporter
    jasmineRunnerReporter: {
      outputFile: 'test-result.html'
    },
    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
