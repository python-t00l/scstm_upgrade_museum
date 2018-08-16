<template>
  <div class="head">
    <div class="logo">
      <img :src="logo"/>
    </div>
    <div class="menu">
      <ul class="menu-list clearfix">
        <li v-for="(item,index) in menu"
            :class="item.isShow ? 'active' : ''"
            @mouseenter="toggleEnter(item)"
            @mouseleave="toggleLeave(item)"
            :key="index">
          <router-link :to="item.link ? item.link : ''">{{item.title}}</router-link>
          <span v-show="item.isSub" class="up-triangle"></span>
          <ul class="sublist" :style="{display:(item.isShow && item.isSub) ? 'block' :'none'}">
            <li
              v-for="(el,index) in item.items"
              :class="el.isShow ? 'active' : ''"
              @mouseenter="toggleSubOneEnter(item,el)"
              :key="index">
              <router-link :to="el.link ? el.link : ''">{{el.title}}</router-link>
              <span v-show="el.isSub" class="right-triangle"></span>
              <ul class="sublist"
                  :style="{display:(el.isShow && el.isSub) ? 'block':'none'}"
                  style="left: 150px; top: 0;">
                <li
                  v-for="(sub,index) in el.items"
                  :class="sub.isShow ? 'active' : ''"
                  @mouseenter="toggleSubOneEnter(el,sub)">
                  <router-link :to="sub.link ? sub.link : ''">{{sub.title}}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "iHead",
    props: {
      logo: {
        type: String,
        default: ''
      },
      pathname: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
        menu: this.initData()
      }
    },
    methods: {
      toggleEnter(item) {
        item.isShow = true
      },
      toggleLeave(item) {
        let menu = this.menu
        for (let i = 0; i < menu.length; i++) {
          menu[i].isShow = false
        }
        this.menu = this.initData()
      },
      toggleSubOneEnter(parentEl, el) {
        for (let i = 0; i < parentEl.items.length; i++) {
          parentEl.items[i].isShow = false
        }
        if (el.isSub) {
          for (let i = 0; i < el.items.length; i++) {
            el.items[i].isShow = false
          }
        }
        el.isShow = true
      },
      initData() {
        return [
          {
            title: '首页',
            isSub: false,
            isShow: false,
            link: '/'
          },
          {
            title: '协会介绍',
            isSub: false,
            isShow: false,
            link:'/introduce'
          },
          {
            title: '协会党建',
            isSub: false,
            isShow: false,
            link: '/party'
          },
          {
            title: '新闻信息',
            isSub: true,
            isShow: false,
            items: [
              {title: '通知公告', isShow: false, isSub: false, link: '/notice'},
              {title: '协会动态', isShow: false, isSub: false, link: ''}
            ]
          },
          {
            title: '会员天地',
            isSub: true,
            isShow: false,
            items: [
              {title: '会员资讯', isShow: false, isSub: false, link: ''},
              {
                title: '专项活动',
                isSub: true,
                isShow: false,
                items: [
                  {
                    title: '继续教育',
                    isSub: false,
                    isShow: false,
                    link: ''
                  },
                  {
                    title: '赛事纵览',
                    isSub: false,
                    isShow: false,
                    link: ''
                  }
                ]
              },
              {title: '我要入会', isShow: false, isSub: false, link: ''}
            ]
          },
          {
            title: '现代科技馆体系',
            isSub: true,
            isShow: false,
            items: [
              {title: '实体科技馆', isShow: false, isSub: false, link: ""},
              {title: '流动科技馆', isShow: false, isSub: false, link: ''},
              {title: '科普大篷车', isShow: false, isSub: false, link: ''},
              {title: '数字科技馆', isShow: false, isSub: false, link: ''},
              {title: '共享科技馆', isShow: false, isSub: false, link: ''}
            ]
          },
          {
            title: '学术苑地',
            isSub: true,
            isShow: false,
            items: [
              {title: '四川科博场馆', isShow: false, isSub: false, link: ''},
              {title: '学术交流', isShow: false, isSub: false, link: ''},
              {title: '论文及成果', isShow: false, isSub: false, link: ''}
            ]
          },
          {
            title: '科创服务',
            isSub: true,
            isShow: false,
            items: [
              {title: '科技创新服务站', isShow: false, isSub: false, link: ''},
              {title: '相关科技政策', isShow: false, isSub: false, link: ''}
            ]
          },
          {
            title: '科普之窗',
            isSub: false,
            isShow: false,
            link: ''
          },
          {
            title: '下载专区',
            isSub: false,
            isShow: false,
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
      .menu-list {
        padding: 0 10px;
        & > li {
          float: left;
          cursor: pointer;
          position: relative;
          margin: 0 4px;
          & > a {
            font-size: 16px;
            color: #fff;
            padding: 6px 22px;
            transition: background-color .4s linear;
            display: block;
          }
          .up-triangle {
            width: 0;
            height: 0;
            border-width: 0 4px 4px;
            border-style: solid;
            border-color: transparent transparent #fff; /*透明 透明  灰*/
            margin: 2px auto;
            border-radius: 2px;
            display: block;
            opacity: 0;
          }
          &.active {
            a {
              background: #fff;
              -webkit-border-radius: 2px;
              -moz-border-radius: 2px;
              border-radius: 2px;
              color: #20A6FC;
            }
            .up-triangle {
              opacity: 1;
            }
          }
          .sublist {
            position: absolute;
            padding: 0 10px;
            background: #fff;
            min-width: 160px;
            z-index: 100;
            li {
              border-bottom: 1px dotted #d1d1d1;
              padding: 5px 0;
              min-width: 90px;
              text-align: center;
              position: relative;
              .sublist {
                li {
                  &.active {
                    & > a {
                      color: #fff;
                      background: #20a6fc;
                    }
                    .right-triangle {
                      border-color: transparent transparent transparent #fff;
                    }
                  }
                }
              }
              .right-triangle {
                width: 0;
                height: 0;
                border-width: 4px 0 4px 4px;
                border-style: solid;
                border-color: transparent transparent transparent #333; /*透明 透明 透明 灰*/
                position: absolute;
                right: 10px;
                top: 16px;
              }
              &:last-child {
                border-bottom: none;
              }
              a {
                color: #333;
                font-size: 14px;
                text-align: left;
                padding-left: 12px;
                display: block;
                line-height: 30px;
                transition: background-color .4s linear;
              }
              &.active {
                & > a {
                  color: #fff;
                  background: #20a6fc;
                }
                .right-triangle {
                  border-color: transparent transparent transparent #fff;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
