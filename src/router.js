import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import Series from './pages/Series.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/series', component: Series }
  ]
});
