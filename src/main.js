import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import CONSTANTS from './utils/constants.json';

Vue.config.productionTip = false;
Vue.prototype.CONSTANTS = CONSTANTS;
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
