//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'app/core/bower_components/angular/angular.js',
      'app/core/bower_components/angular-route/angular-route.js',
      'app/core/bower_components/angular-mocks/angular-mocks.js',
      'components/**/*.js',
      'view*/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
