import Vue from 'vue';
import Router from 'vue-router';
import AuthPage from '@/Containers/AuthPage';
import PlayPage from '@/Containers/PlayPage';

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'PlayVideo',
      component: PlayPage
    },
    {
      path: '/auth',
      name: 'Auth',
      component: AuthPage
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
