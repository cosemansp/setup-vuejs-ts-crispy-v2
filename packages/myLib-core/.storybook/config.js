import { configure } from '@storybook/vue'
import { setOptions } from '@storybook/addon-options';
// import Vuex from 'vuex';
import Vue from 'vue';

setOptions({
  name: 'myLib-core',
  url: 'https://github.com/cosemansp/setup-vuejs-ts-crispy-v2',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false,
});


// Install Vue plugins
// Vue.use(ThisLibrary);
// Vue.use(vuex)

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /.stories.ts$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}
configure(loadStories, module);