import Vue from 'vue'
import Router from 'vue-router'
import AuthPage from '@/Containers/AuthPage'
import HomePage from '@/Containers/HomePage'
import PlayPage from '@/Containers/PlayPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: HomePage
    // },
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
