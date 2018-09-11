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
import Edu from '@/components/academic/edu'
import eduDetail from '@/components/academic/eduDetail'
import Talk from '@/components/academic/talk'
import talkDetail from '@/components/academic/talkDetail'
import Paper from '@/components/academic/paper'
import paperDetail from '@/components/academic/paperDetail'
import Innovate from '@/components/create/innovate'
import innovateDetail from '@/components/create/innovateDetail'
import Policy from '@/components/create/policy'
import policyDetail from '@/components/create/policyDetail'
import Window from '@/components/window/window'
import windowDetail from '@/components/window/windowDetail'
import Download from '@/components/download/download'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index,
      meta: [0]
    },
    {
      path: '/introduce',
      name: '协会介绍',
      component: Introduce,
      meta: [1]
    },
    {
      path: '/party',
      name: '协会党建',
      component: Party,
      meta: [2]
    },
    {
      path: '/party/:id',
      name: '协会党建详情',
      component: partyDetail,
      meta: [2]
    },
    {
      path: '/notice',
      name: '通知公告',
      component: Notice,
      meta: [3, 0]
    },
    {
      path: '/notice/:id',
      name: '通知公告详情',
      component: noticeDetail,
      meta: [3, 0]
    },
    {
      path: '/dynamic',
      name: '协会动态',
      component: Dynamic,
      meta: [3, 1]
    },
    {
      path: '/dynamic/:id',
      name: '协会动态详情',
      component: dynamicDetail,
      meta: [3, 1]
    },
    {
      path: '/message',
      name: '会员资讯',
      component: Message,
      meta: [4, 0]
    },
    {
      path: '/message/:id',
      name: '会员资讯详情',
      component: messageDetail,
      meta: [4, 0]
    },
    {
      path: '/education',
      name: '继续教育',
      component: Education,
      meta: [4, 1, 0]
    },
    {
      path: '/education/:id',
      name: '继续教育详情',
      component: educationDetail,
      meta: [4, 1, 0]
    },
    {
      path: '/game',
      name: '赛事纵览',
      component: Game,
      meta: [4, 1, 1]
    },
    {
      path: '/game/:id',
      name: '赛事纵览详情',
      component: gameDetail,
      meta: [4, 1, 1]
    },
    {
      path: '/entity',
      name: '实体科技馆',
      component: Entity,
      meta: [5, 0]
    },
    {
      path: '/entity/:id',
      name: '实体科技馆详情',
      component: entityDetail,
      meta: [5, 0]
    },
    {
      path: '/flow',
      name: '流动科技馆',
      component: Flow,
      meta: [5,1]
    },
    {
      path: '/flow/:id',
      name: '流动科技馆详情',
      component: flowDetail,
      meta: [5,1]
    },
    {
      path: '/science',
      name: '科普大篷车',
      component: Science,
      meta: [5,2]
    },
    {
      path: '/science/:id',
      name: '科普大篷车详情',
      component: scienceDetail,
      meta: [5,2]
    },
    {
      path: '/digital',
      name: '数字科技馆',
      component: Digital,
      meta: [5,3]
    },
    {
      path: '/digital/:id',
      name: '数字科技馆详情',
      component: digitalDetail,
      meta: [5,3]
    },
    {
      path: '/share',
      name: '共享科技馆',
      component: Share,
      meta: [5,4]
    },
    {
      path: '/share/:id',
      name: '共享科技馆详情',
      component: shareDetail,
      meta: [5,4]
    },
    {
      path: '/edu',
      name: '四川科普教育',
      component: Edu,
      meta: [6,0]
    },
    {
      path: '/edu/:id',
      name: '四川科普教育详情',
      component: eduDetail,
      meta: [6,0]
    },
    {
      path: '/cobo',
      name: '四川科博场馆',
      component: Cobo,
      meta: [6,1]
    },
    {
      path: '/cobo/:id',
      name: '四川科博场馆详情',
      component: coboDetail,
      meta: [6,1]
    },
    {
      path: '/talk',
      name: '学术交流',
      component: Talk,
      meta: [6,2]
    },
    {
      path: '/talk/:id',
      name: '学术交流详情',
      component: talkDetail,
      meta: [6,2]
    },
    {
      path: '/paper',
      name: '论文及成果',
      component: Paper,
      meta: [6,3]
    },
    {
      path: '/paper/:id',
      name: '论文及成果详情',
      component: paperDetail,
      meta: [6,3]
    },
    {
      path: '/innovate',
      name: '科技创新服务站',
      component: Innovate,
      meta: [7,0]
    },
    {
      path: '/innovate/:id',
      name: '科技创新服务站详情',
      component: innovateDetail,
      meta: [7,0]
    },
    {
      path: '/policy',
      name: '相关科技政策',
      component: Policy,
      meta: [7,1]
    },
    {
      path: '/policy/:id',
      name: '相关科技政策详情',
      component: policyDetail,
      meta: [7,1]
    },
    {
      path: '/window',
      name: '科普之窗',
      component: Window,
      meta: [8]
    },
    {
      path: '/window/:id',
      name: '科普之窗详情',
      component: windowDetail,
      meta: [8]
    },
    {
      path: '/download',
      name: '下载专区',
      component: Download,
      meta: [9]
    }
  ]
})
