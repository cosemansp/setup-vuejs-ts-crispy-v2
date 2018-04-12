import Vue from 'vue';
import log from 'loglevel';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App.vue';
import router from './router/router';
import store from './store';
import config from './config';
import { storage } from './core/storage';
import './registerServiceWorker';

// Styling
import './styles/styles.css';

// register filters
import './filters';

Vue.config.productionTip = false;

// Set log level
log.setDefaultLevel('debug');

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    log.info('Started');
    log.info('Config', JSON.stringify(config, null, '\t'));

    // setup localStorage prefix
    storage.local.prefix = 'owr-mobile';
    storage.local.set('myKey', 1224234);
  },
}).$mount('#app');
