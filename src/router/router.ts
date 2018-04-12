import Vue from 'vue';
import Router from 'vue-router';

import { routes as driversRoutes } from '../modules/drivers';

Vue.use(Router);

export default new Router({
  routes: [
    ...driversRoutes,
    {
      path: '/',
      redirect: '/drivers',
    },
  ],
});
