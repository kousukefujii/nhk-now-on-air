import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './components/Top.vue';
import Detail from './components/Detail.vue';
import NotFound from './components/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Top},
  {path: '/detail/:area/:service/:id', name: 'detail', component: Detail},
  {path: '*', component: NotFound},
];

export default new VueRouter({
  mode: 'history',
  routes: routes
});
