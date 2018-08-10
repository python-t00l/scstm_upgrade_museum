<template>
  <div class="head">
    <div class="logo">
      <img src="../assets/logo.png"/>
    </div>
    <div class="menu">
      <ul class="menu-list clearfix">
        <li v-for="(item,index) in menu" :key="index">
          <router-link :to="item.link ? item.link : ''">{{item.title}}</router-link>
          <span class="up-triangle"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "iHead",
    data() {
      return {
        menu: [
          {
            title: '首页',
            isSub: false,
            link: ''
          },
          {
            title: '协会介绍',
            isSub: true,
            items: [
              {title: '协会简介', isSub: false, link: ''},
              {title: '协会章程', isSub: false, link: ''}
            ]
          },
          {
            title: '协会党建',
            isSub: false,
            link: ''
          },
          {
            title: '新闻信息',
            isSub: true,
            items: [
              {title: '通知公告', isSub: false, link: ''},
              {title: '协会动态', isSub: false, link: ''}
            ]
          },
          {
            title: '会员天地',
            isSub: true,
            items: [
              {title: '会员资讯', isSub: false, link: ''},
              {
                title: '专项活动',
                isSub: true,
                items: [
                  {
                    title: '继续教育',
                    isSub: false,
                    link: ''
                  },
                  {
                    title: '赛事纵览',
                    isSub: false,
                    link: ''
                  }
                ]
              },
              {title: '我要入会', isSub: false, link: ''}
            ]
          },
          {
            title: '现代科技馆体系',
            isSub: true,
            items: [
              {title: '实体科技馆', isSub: false, link: ""},
              {title: '流动科技馆', isSub: false, link: ''},
              {title: '科普大篷车', isSub: false, link: ''},
              {title: '数字科技馆', isSub: false, link: ''},
              {title: '共享科技馆', isSub: false, link: ''}
            ]
          },
          {
            title: '学术苑地',
            isSub: true,
            items: [
              {title: '四川科博场馆', isSub: false, link: ''},
              {title: '学术交流', isSub: false, link: ''},
              {title: '论文及成果', isSub: false, link: ''}
            ]
          },
          {
            title: '科创服务',
            isSub: true,
            items: [
              {title: '科技创新服务站', isSub: false, link: ''},
              {title: '相关科技政策', isSub: false, link: ''}
            ]
          },
          {
            title: '科普之窗',
            isSub: false,
            link: ''
          },
          {
            title: '下载专区',
            isSub: false,
            link: ''
          },
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .head {
    width: 1200px;
    margin: 0 auto;
    .logo {
      width: 376px;
      margin-bottom: 20px;
      img {
        width: 100%;
      }
    }
    .menu {
      width: 100%;
      padding-top: 8px;
      background: #20a6fc;
      box-sizing: border-box;
      .menu-list{
        padding: 0 10px;
        li{
          float: left;
          cursor: pointer;
          position: relative;
          margin: 0 4px;
          a{
            font-size: 16px;
            color: #fff;
            padding: 6px 22px;
            transition: all .4s;
            display: block;
            &.active{
              background: #fff;
              -webkit-border-radius: 2px;
              -moz-border-radius: 2px;
              border-radius: 2px;
              color: #20A6FC;
            }
            &:hover{
              background: #fff;
              -webkit-border-radius: 2px;
              -moz-border-radius: 2px;
              border-radius: 2px;
              color: #20A6FC;
            }
          }
          .up-triangle{
            width:0;
            height:0;
            border-width:0 4px 4px;
            border-style:solid;
            border-color:transparent transparent #fff;/*透明 透明  灰*/
            margin:2px auto;
            border-radius: 2px;
            display: block;
            opacity: 0;
          }
        }
      }
    }
  }
</style>
