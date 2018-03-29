// const merge = require("webpack-merge");
// const genStorybookDefaultConfig = require("@storybook/vue/dist/server/config/defaults/webpack.config.js");
// const vueConfig = require("@vue/cli-service/webpack.config.js");

// module.exports = (storybookBaseConfig, configType) => {
//   const storybookConfig = genStorybookDefaultConfig(
//     storybookBaseConfig,
//     configType
//   );
//   return {
//     ...vueConfig, // use vue's webpack configuration by default
//     entry: storybookConfig.entry, // overwite entry
//     output: storybookConfig.output, // overwrite output
//     // remove duplicated plugins
//     plugins: merge({
//       customizeArray: merge.unique(
//         "plugins",
//         [
//           "HotModuleReplacementPlugin",
//           "CaseSensitivePathsPlugin",
//           "WatchMissingNodeModulesPlugin"
//         ],
//         plugin => plugin.constructor && plugin.constructor.name
//       )
//     })(vueConfig, storybookConfig).plugins
//   };
// };

const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
module.exports = (storybookBaseConfig, configType, defaultConfig) => {

  // defaultConfig.resolve.extensions = ['.ts', '.js', '.json', '.jsx', '.vue'],

  defaultConfig.module.rules.push({
    test: [/\.stories\.ts$/, /index\.ts$/],
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    include: [path.resolve(__dirname, '../src')],
    enforce: 'pre',
  });

  defaultConfig.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true // used with ForkTsCheckerWebpackPlugin
        },
      }
    ],
  })

  // defaultConfig.module.rules.push({
  //   test: /\.vue$/,
  //   loader: 'vue-loader',
  // })

  defaultConfig.plugins.push(new ForkTsCheckerWebpackPlugin())

  return defaultConfig;
};