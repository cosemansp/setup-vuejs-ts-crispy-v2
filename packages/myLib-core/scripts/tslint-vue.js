const tslintPlugin = require('@vue/cli-plugin-typescript/lib/tslint');
const path = require('path');

const api = {
  resolve(_path) {
    return path.resolve('.', _path);
  },
};

// tslint isn't handling .vue files
// we use the @vue/cli typescript plugin to handle this
tslintPlugin({}, api, false);
