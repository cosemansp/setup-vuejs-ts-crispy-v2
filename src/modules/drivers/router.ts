import { RouteConfig } from 'vue-router';
import Drivers from './Drivers.vue';
import DriverOverview from './DriverOverview.vue';

// eslint-disable-next-line
export const routes: RouteConfig[] = [
  { path: '/drivers', component: Drivers },
  { path: '/drivers/:id', component: DriverOverview, props: true },
];
