import Vue from 'vue';
import VueRouter from 'vue-router';
import Settings from '../views/Settings';
import Game from '../views/Game';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/settings'
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
