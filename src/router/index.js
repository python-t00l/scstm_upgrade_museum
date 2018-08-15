import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Introduce from '@/components/introduce'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index,
      meta:['学术交流']
    },
    {
      path:'/introduce',
      name:'协会介绍',
      component:Introduce,
      meta:['协会介绍']
    }
  ]
})
