process.env.NODE_ENV = 'test';
const webpackConfig = require('../../webpack.config.js');

module.exports = config => {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    reporters: ['spec'],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-spec-reporter',
      'karma-webpack'
    ],
    files: ['webpack.karma.context.js'],
    preprocessors: {
      'webpack.karma.context.js': ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    }
  });
};
