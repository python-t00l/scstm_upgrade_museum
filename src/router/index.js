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
import Education from '@/components/member/education'
import educationDetail from '@/components/member/educationDetail'
import Game from '@/components/member/game'
import gameDetail from '@/components/member/gameDetail'
import Entity from '@/components/science/entity'
import entityDetail from '@/components/science/entityDetail'
import Flow from '@/components/science/flow'
import flowDetail from '@/components/science/flowDetail'
import Science from '@/components/science/science'
import scienceDetail from '@/components/science/scienceDetail'

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
    {
      path: '/education',
      name: '继续教育',
      component: Education,
      meta: ['会员天地', '继续教育']
    },
    {
      path: '/education/:id',
      name: '继续教育详情',
      component: educationDetail,
      meta: ['会员天地', '继续教育']
    },
    {
      path: '/game',
      name: '赛事纵览',
      component: Game,
      meta: ['会员天地', '赛事纵览']
    },
    {
      path: '/game/:id',
      name: '赛事纵览详情',
      component: gameDetail,
      meta: ['会员天地', '赛事纵览']
    },
    {
      path: '/entity',
      name: '实体科技馆',
      component: Entity,
      meta: ['现代科技馆体系', '实体科技馆']
    },
    {
      path: '/entity/:id',
      name: '实体科技馆详情',
      component: entityDetail,
      meta: ['现代科技馆体系', '实体科技馆']
    },
    {
      path: '/flow',
      name: '流动科技馆',
      component: Flow,
      meta: ['现代科技馆体系', '流动科技馆']
    },
    {
      path: '/flow/:id',
      name: '流动科技馆详情',
      component: flowDetail,
      meta: ['现代科技馆体系', '流动科技馆']
    },
    {
      path: '/science',
      name: '科普大篷车',
      component: Science,
      meta: ['现代科技馆体系', '科普大篷车']
    },
    {
      path: '/science/:id',
      name: '科普大篷车',
      component: scienceDetail,
      meta: ['现代科技馆体系', '科普大篷车']
    },
  ]
})
