import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store';
import * as log from 'loglevel';
import './registerServiceWorker';

Vue.config.productionTip = false;

// Styling
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css';

// register filters
import './filters';

// Set log level
log.setDefaultLevel('debug');

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
