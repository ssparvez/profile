import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Projects from '@/components/Projects'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      meta: {
        transitionName: 'slide-right'
      },
      path: '/',
      name: 'About',
      component: About
    },
    {
      meta: {
        transitionName: 'slide-left'
      },
      path: '/projects',
      name: 'Projects',
      component: Projects
    }
  ]
})
