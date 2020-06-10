import Vue from 'vue';
import VueRouter from 'vue-router';
import Settings from '../views/Settings';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Settings',
    component: Settings
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
