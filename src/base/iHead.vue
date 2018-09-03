<template>
  <div class="head">
    <div class="logo">
      <img :src="logo"/>
    </div>
    <div class="menu">
      <ul class="menu-list clearfix">
        <li v-for="(item,index) in menu"
            :class="item.isShow ? 'active' : ''"
            :key="index">
          <router-link :to="item.link ? item.link : ''">{{item.title}}</router-link>
          <span v-show="item.isSub" class="up-triangle"></span>
          <ul class="sublist">
            <li
              v-for="(el,index) in item.items"
              :class="el.isShow ? 'active' : ''"
              :key="index">
              <router-link :to="el.link ? el.link : ''">{{el.title}}</router-link>
              <span v-show="el.isSub" class="right-triangle"></span>
              <ul class="sublist"
                  style="left: 160px; top: 0;">
                <li
                  v-for="(sub,index) in el.items"
                  :class="sub.isShow ? 'active' : ''">
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
  import index from "../router";

  export default {
    name: "iHead",
    props: {
      logo: {
        type: String,
        default: ''
      },
      pathname: {
        type: Array,
        default: ''
      },
    },
    data() {
      return {
        menu: this.initData()
      }
    },
    created() {
      this.initData()
    },
    methods: {
      refresh() {
        this.menu = [
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
            link: '/introduce'
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
              {title: '协会动态', isShow: false, isSub: false, link: '/dynamic'}
            ]
          },
          {
            title: '会员天地',
            isSub: true,
            isShow: false,
            items: [
              {title: '会员资讯', isShow: false, isSub: false, link: '/message'},
              {
                title: '专项活动',
                isSub: true,
                isShow: false,
                items: [
                  {
                    title: '继续教育',
                    isSub: false,
                    isShow: false,
                    link: '/education'
                  },
                  {
                    title: '赛事纵览',
                    isSub: false,
                    isShow: false,
                    link: '/game'
                  }
                ]
              },
              // {title: '我要入会', isShow: false, isSub: false, link: ''}
            ]
          },
          {
            title: '现代科技馆体系',
            isSub: true,
            isShow: false,
            items: [
              {title: '实体科技馆', isShow: false, isSub: false, link: "/entity"},
              {title: '流动科技馆', isShow: false, isSub: false, link: '/flow'},
              {title: '科普大篷车', isShow: false, isSub: false, link: '/science'},
              {title: '数字科技馆', isShow: false, isSub: false, link: '/digital'},
              {title: '共享科技馆', isShow: false, isSub: false, link: '/share'}
            ]
          },
          {
            title: '学术苑地',
            isSub: true,
            isShow: false,
            items: [
              {title: '四川科博场馆', isShow: false, isSub: false, link: '/cobo'},
              {title: '学术交流', isShow: false, isSub: false, link: '/talk'},
              {title: '论文及成果', isShow: false, isSub: false, link: '/paper'}
            ]
          },
          {
            title: '科创服务',
            isSub: true,
            isShow: false,
            items: [
              {title: '科技创新服务站', isShow: false, isSub: false, link: '/innovate'},
              {title: '相关科技政策', isShow: false, isSub: false, link: '/policy'}
            ]
          },
          {
            title: '科普之窗',
            isSub: false,
            isShow: false,
            link: '/window'
          },
          {
            title: '下载专区',
            isSub: false,
            isShow: false,
            link: '/download'
          },
        ]
      },
      initData() {
        this.refresh()
        let [indexs, menu] = [this.pathname, this.menu]
        if (indexs.length >= 1) {
          menu[indexs[0]].isShow = true
        }
        if (indexs.length >= 2) {
          menu[indexs[0]].items[indexs[1]].isShow = true
        }
        if (indexs.length >= 3) {
          menu[indexs[0]].items[indexs[1]].items[indexs[2]].isShow = true
        }
      },
    },
    watch: {
      pathname: {
        handler(newVal, oldVal) {
          this.initData()
        },
        deep: true
      }
    }
  }
</script>

<style scoped lang="less">
  .head {
    width: 1200px;
    margin: 0 auto;
    .logo {
      width: 420px;
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
          &:hover {
            & > a {
              background: #fff;
              -webkit-border-radius: 2px;
              -moz-border-radius: 2px;
              border-radius: 2px;
              color: #20A6FC;
            }
            .up-triangle {
              opacity: 1;
            }
            > .sublist {
              display: block;
              & > li {
                &:hover {
                  > a {
                    color: #fff;
                    background: rgba(32,166,252,.7);
                  }
                  .right-triangle {
                    border-color: transparent transparent transparent #fff;
                  }
                  > .sublist {
                    display: block;
                    &>li{
                      &:hover{
                        > a {
                          color: #fff;
                          background: rgba(32,166,252,.7);
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
            background: #fff;
            min-width: 160px;
            z-index: 100;
            display: none;
            li {
              border-bottom: 1px dotted #d1d1d1;
              padding: 5px 10px;
              min-width: 90px;
              text-align: center;
              position: relative;
              .sublist {
                li {
                  &.active {
                    & > a {
                      color: #fff;
                      background: #20a6fc !important;
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
                right: 20px;
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
                  background: #20a6fc !important;
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
