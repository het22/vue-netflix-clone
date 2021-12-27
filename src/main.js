import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  data: { title: 'vue-netflix-clone' },
  router,

  // vue instance lifecycle
  // https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},

  // h == hyperscript, Virtual DOM에 html을 생성하는 스크립트
  // render: createElement => createElement(App)
  render: h => h(App)

  // template을 안쓰고 render를 사용하는 이유?
  // components: { App },
  // template: `<app></app>`

  // with 'el' option, no need to call $mount
  // with '$mount' call, can control mount moment
  // el: '#app'
}).$mount('#app');
