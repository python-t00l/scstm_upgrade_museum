import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Introduce from '@/components/introduce'
import Party from '@/components/party/party'
import partyDetail from '@/components/party/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index,
      meta: ['学术交流']
    },
    {
      path: '/introduce',
      name: '协会介绍',
      component: Introduce,
      meta: ['协会介绍']
    },
    {
      path: '/party',
      name: '协会党建',
      component: Party,
      meta: ['协会党建']
    },
    {
      path: '/party/:id',
      name: '协会党建详情',
      component: partyDetail,
      meta: ['协会党建', '协会党建详情']
    }
  ]
})
