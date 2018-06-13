/* eslint-disable */

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  lintOnSave: false,
  pluginOptions: {
    enalbeInSFC: false, // Locale messages in Single file components
  },
  configureWebpack: {
    performance: {
      hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
    },
  },
  chainWebpack: config => {
    if (process.env.ANALYZE === 'true')
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
        {
          analyzerMode: 'static',
        },
      ]);
  },
};
