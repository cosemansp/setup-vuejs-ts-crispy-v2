import Vue from 'vue';
import dateFormatter from './date.filter';
import ordinalFormatter from './ordinal.filter';
import currencyFormatter from './currency.filter';

Vue.filter('myDate', dateFormatter);
Vue.filter('ordinal', ordinalFormatter);
Vue.filter('currency', currencyFormatter);
