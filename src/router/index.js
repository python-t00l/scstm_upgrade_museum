import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Introduce from '@/components/introduce'
import Party from '@/components/party/party'
import partyDetail from '@/components/party/detail'
import Notice from '@/components/news/notice'
import noticeDetail from '@/components/news/noticeDetail'
import Dynamic from '@/components/news/dynamic'
import dynamicDetail from '@/components/news/dynamicDetail'
import Message from '@/components/member/message'
import messageDetail from '@/components/member/messageDetail'

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
    },
    {
      path: '/notice',
      name: '通知公告',
      component: Notice,
      meta: ['新闻信息', '通知公告']
    },
    {
      path: '/notice/:id',
      name: '通知公告详情',
      component: noticeDetail,
      meta: ['新闻信息', '通知公告']
    },
    {
      path: '/dynamic',
      name: '协会动态',
      component: Dynamic,
      meta: ['新闻信息', '协会动态']
    },
    {
      path: '/dynamic/:id',
      name: '协会动态详情',
      component: dynamicDetail,
      meta: ['新闻信息', '协会动态']
    },
    {
      path: '/message',
      name: '会员资讯',
      component: Message,
      meta: ['会员天地', '会员资讯']
    },
    {
      path: '/message/:id',
      name: '会员资讯详情',
      component: messageDetail,
      meta: ['会员天地', '会员资讯']
    },
  ]
})
