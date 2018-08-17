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
import Digital from '@/components/science/digital'
import digitalDetail from '@/components/science/digitalDetail'
import Share from '@/components/science/share'
import shareDetail from '@/components/science/shareDetail'
import Cobo from '@/components/academic/cobo'
import coboDetail from '@/components/academic/coboDetail'
import Talk from '@/components/academic/talk'
import talkDetail from '@/components/academic/talkDetail'
import Paper from '@/components/academic/paper'
import paperDetail from '@/components/academic/paperDetail'
import Innovate from '@/components/create/innovate'
import innovateDetail from '@/components/create/innovateDetail'
import Policy from '@/components/create/policy'
import policyDetail from '@/components/create/policyDetail'

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
    {
      path: '/digital',
      name: '数字科技馆',
      component: Digital,
      meta: ['现代科技馆体系', '数字科技馆']
    },
    {
      path: '/digital/:id',
      name: '数字科技馆',
      component: digitalDetail,
      meta: ['现代科技馆体系', '数字科技馆']
    },
    {
      path: '/share',
      name: '共享科技馆',
      component: Share,
      meta: ['现代科技馆体系', '共享科技馆']
    },
    {
      path: '/share/:id',
      name: '共享科技馆',
      component: shareDetail,
      meta: ['现代科技馆体系', '共享科技馆']
    },
    {
      path: '/cobo',
      name: '四川科博场馆',
      component: Cobo,
      meta: ['学术苑地', '四川科博场馆']
    },
    {
      path: '/cobo/:id',
      name: '四川科博场馆',
      component: coboDetail,
      meta: ['学术苑地', '四川科博场馆']
    },
    {
      path: '/talk',
      name: '学术交流',
      component: Talk,
      meta: ['学术苑地', '学术交流']
    },
    {
      path: '/talk/:id',
      name: '四川科博场馆',
      component: talkDetail,
      meta: ['学术苑地', '学术交流']
    },
    {
      path: '/paper',
      name: '论文及成果',
      component: Paper,
      meta: ['学术苑地', '论文及成果']
    },
    {
      path: '/paper/:id',
      name: '论文及成果',
      component: paperDetail,
      meta: ['学术苑地', '论文及成果']
    },
    {
      path: '/innovate',
      name: '科技创新服务站',
      component: Innovate,
      meta: ['科创服务', '科技创新服务站']
    },
    {
      path: '/innovate/:id',
      name: '论文及成果',
      component: innovateDetail,
      meta: ['科创服务', '科技创新服务站']
    },
    {
      path: '/policy',
      name: '相关科技政策',
      component: Policy,
      meta: ['科创服务', '相关科技政策']
    },
    {
      path: '/policy/:id',
      name: '论文及成果',
      component: policyDetail,
      meta: ['科创服务', '相关科技政策']
    },
  ]
})
