import 'reflect-metadata';

import Vue from 'vue';
import Vuetify from 'vuetify';

import 'vuetify/dist/vuetify.min.css';

import App from './App.vue';
import router from './router';
import './plugins';
import { createStore } from '@/store';

Vue.config.productionTip = false;

new Vue({
  router,
  store: createStore(),
  // @ts-ignore
  vuetify: new Vuetify(),
  /* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */
  render: h => h(App),
}).$mount('#app');
