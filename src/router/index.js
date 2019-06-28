import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Skill from '@/components/Skill'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill 
    }
  ]
})
