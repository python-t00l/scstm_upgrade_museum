<template>
  <div class="home">
    <!--首页—顶部轮播、通知公告-->
    <div class="floor-one clearfix">
      <i-top-swiper :data="middleInfo.cycle ? middleInfo.cycle : []"></i-top-swiper>
      <div class="notice-box">
        <div class="title clearfix">
          <p>
            <span class="ch">通知公告</span>
            <!--<span class="en">NOTICE ANNOUNCEMENT</span>-->
          </p>
          <router-link to="/notice"> 更多></router-link>
        </div>
        <div class="notice-list">
          <!--<ul class="list">-->
            <!--<li v-for="(item,index) in middleInfo.notice" :key="index">-->
              <!--<div class="thumbnail" v-if="item.images">-->
                <!--<router-link :to="'/notice/' + item.id">-->
                  <!--<images :src="item.images"/>-->
                  <!--<p class="mask">{{item.title}}</p>-->
                <!--</router-link>-->
              <!--</div>-->
              <!--<div v-else>-->
                <!--<span class="right-blue-triangle"></span>-->
                <!--<router-link :to="'/notice/' + item.id">{{item.title}}</router-link>-->
              <!--</div>-->
            <!--</li>-->
          <!--</ul>-->


          <div class="lists">
            <ul class="list clearfix">
              <li v-for="(item,index) in middleInfo.notice" :key="index">
                <div class="thumbnail clearfix" v-if="item.img">
                  <router-link :to="'/notice/'+item.id" class="clearfix">
                    <div class="img">
                      <img :src="item.img"/>
                    </div>
                    <div class="intr">
                      <p class="tit">{{item.title}}</p>
                      <p class="intr-txt">
                        {{item.introduction}}
                      </p>
                    </div>
                  </router-link>
                </div>
                <div v-else>
                  <p class="txt">
                    <span class="right-blue-triangle"></span>
                    <router-link :to="'/notice/'+item.id">{{item.title}}</router-link>
                  </p>
                  <p class="date">{{item.addtime | formatDate}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--首页—协会动态、协会党建-->
    <div class="floor-two clearfix">
      <div class="dynamics">
        <div class="title clearfix">
          <p>
            <span class="ch">协会动态</span>
            <span class="en">ASSOCIATION DYNAMICS</span>
          </p>
          <router-link to="/dynamic"> 更多></router-link>
        </div>
        <div class="lists">
          <ul class="list clearfix">
            <li v-for="(item,index) in middleInfo.dynamic" :key="index">
              <div class="thumbnail clearfix" v-if="item.img">
                <router-link :to="'/dynamic/'+item.id" class="clearfix">
                  <div class="img">
                    <img :src="item.img"/>
                  </div>
                  <div class="intr">
                    <p class="tit">{{item.title}}</p>
                    <p class="intr-txt">
                      {{item.introduction}}
                    </p>
                  </div>
                </router-link>
              </div>
              <div v-else>
                <p class="txt">
                  <span class="right-blue-triangle"></span>
                  <router-link :to="'/dynamic/'+item.id">{{item.title}}</router-link>
                </p>
                <p class="date">{{item.addtime | formatDate}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="party">
        <div class="title clearfix">
          <p>
            <img class="ico" src="../assets/party.png"/>
            <span class="ch">党的建设</span>
            <span class="en">THE PARTY BUILDING</span>
          </p>
          <router-link to="/party"> 更多></router-link>
        </div>
        <div class="lists">
          <ul class="list clearfix">
            <li v-for="(item,index) in middleInfo.party" :key="index">
              <div class="thumbnail clearfix" v-if="item.img">
                <router-link :to="'/party/'+item.id" class="clearfix">
                  <div class="img">
                    <img :src="item.img"/>
                  </div>
                  <div class="intr">
                    <p class="tit">{{item.title}}</p>
                    <p class="intr-txt">
                      {{item.introduction}}
                    </p>
                  </div>
                </router-link>
              </div>
              <div v-else>
                <p class="txt">
                  <span class="right-blue-triangle"></span>
                  <router-link :to="'/party/'+item.id">{{item.title}}</router-link>
                </p>
                <p class="date">{{item.addtime | formatDate}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--增进馆际交流合作提高为社会服务能力-->
    <div class="floor-three clearfix">
      <div class="banner">
        <img src="../assets/banner1.jpg"/>
      </div>
      <div class="member">
        <div class="title clearfix">
          <p>
            <span class="ch">会员天地</span>
            <span class="en">MEMBER CLUB</span>
          </p>
          <router-link to="/message"> 更多></router-link>
        </div>
        <ul class="list clearfix">
          <li v-for="(item,index) in middleInfo.members" :key="index">
            <div class="txt">
              <span class="grad" :class="item.typeid | checkColor">{{item.type}}</span>
              <router-link :to="[item.type, item.id] | linkMemberUrl">
                {{item.title}}
              </router-link>
            </div>
            <p class="date">{{item.addtime | formatDate}}</p>
          </li>
        </ul>
      </div>
      <div class="system">
        <div class="title clearfix">
          <p>
            <span class="ch">现代科技馆体系</span>
            <span class="en">TECHNOLOGY MUSEUM SYSTEM</span>
          </p>
          <router-link to="/entity"> 更多></router-link>
        </div>
        <ul class="list clearfix">
          <li v-for="(item,index) in middleInfo.entity" :key="index">
            <div class="txt">
              <span class="grad" :class="item.typeid | checkColor">{{item.type}}</span>
              <router-link :to="[item.type,item.id] | linkMuseumUrl">
                {{item.title}}
              </router-link>
            </div>
            <p class="date">{{item.addtime | formatDate}}</p>
          </li>
        </ul>
      </div>
    </div>
    <!--四川科博场馆、四川科普教育-->
    <div class="museum clearfix">
      <div class="banner">
        <img src="../assets/banner2.jpg"/>
      </div>
      <!--四川科普教育-->
      <div class="museum-edu" v-if="middleInfo.online ? middleInfo.online.length : ''">
        <i-edu-swiper :banners="middleInfo.online ? middleInfo.online : []"></i-edu-swiper>
      </div>
      <!--四川科博场馆-->
      <div class="museum-box" v-if="middleInfo.fair ? middleInfo.fair.length : ''">
        <i-article-swiper :banners="middleInfo.fair ? middleInfo.fair : []"></i-article-swiper>
      </div>
    </div>
    <!--POPULAR SCIENCE WINDOW-->
    <div class="window">
      <div class="banner" style="margin-top: 70px">
        <img src="../assets/banner3.jpg"/>
      </div>
      <i-science-swiper :banners="middleInfo.popular ? middleInfo.popular : []"></i-science-swiper>
    </div>
  </div>
</template>

<script>
  import ITopSwiper from '@/base/iTopSwiper'
  import IArticleSwiper from '@/base/iArticleSwiper'
  import IEduSwiper from '@/base/iEduSwiper'
  import IScienceSwiper from '@/base/iScienceSwiper'
  import {getIndexMiddleInfo} from '@/public/js/api'
  import moment from 'moment'

  export default {
    name: "index",
    components: {
      ITopSwiper,
      IArticleSwiper,
      IScienceSwiper,
      IEduSwiper
    },
    data() {
      return {
        middleInfo: {},
      }
    },
    created() {
      this._getIndexMiddleInfo()
    },
    filters: {
      formatDate(time) {
        return moment.unix(time).format('YYYY-MM-DD');
      },
      checkColor(typeId) {
        return typeId == 1 ? 'grad-green' : typeId == 2 ? 'grad-blue' : typeId == 3 ? 'grad-origin' : typeId == 4 ? 'grad-originred' : 'grad-red'
      },
      linkMemberUrl([name, id]) {
        return (name === '会员资讯' ? '/message/' : name === '继续教育' ? '/education/' : name === '赛事纵览' ? '/game/' : '') + id
      },
      linkMuseumUrl([name, id]) {
        return (name === '实体科技馆' ? '/entity/' : name === '流动科技馆' ? '/flow/' : name === '科普科技馆' ? '/science/' : name === '数字科技馆' ? '/digital/' : name === '农村中学科技馆' ? '/share/' : '') + id
      }
    },
    methods: {
      /**
       * 获取首页中部数据
       * @returns {Promise<void>}
       * @private
       */
      _getIndexMiddleInfo: async function () {
        let result = await getIndexMiddleInfo()
        this.middleInfo = result.msg
      }
    }
  }
</script>

<style scoped lang="less">
  .home {
    .title {
      padding-bottom: 14px;
      border-bottom: 1px solid #eee;
      p {
        float: left;
        .ico {
          width: 22px;
          display: inline-block;
          vertical-align: middle;
          margin-right: 5px;
        }
        .ch {
          font-size: 18px;
          color: #333;
          padding-right: 5px;
          display: inline-block;
          vertical-align: middle;
          font-weight: bold;
        }
        .en {
          font-size: 15px;
          color: #989797;
          display: inline-block;
          vertical-align: middle;
        }
      }
      a {
        float: right;
        font-size: 14px;
        color: #959595;
        margin-top: 3px;
      }
    }
    .floor-one {
      .notice-box {
        float: right;
        width: 488px;
        .notice-list {
          margin-top: 20px;
          .lists {
            margin-top: 20px;
            .thumbnail {
              a {
                display: block;
              }
              .img {
                width: 185px;
                height: 137px;
                float: left;
                overflow: hidden;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .intr {
                float: right;
                width: 285px;
                .tit {
                  font-size: 18px;
                  color: #333;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  margin-bottom: 5px;
                }
                .intr-txt {
                  font-size: 14px;
                  color: #d1d1d1;
                  line-height: 26px;
                  text-align: justify;
                  height: 104px;
                  overflow: hidden;
                }
              }
            }
            .list {
              margin-top: 18px;
              li {
                margin-bottom: 10px;
                overflow: hidden;
                .txt {
                  float: left;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  width: 80%;
                  .right-blue-triangle {
                    width: 0;
                    height: 0;
                    border-width: 5px 0 5px 5px;
                    border-style: solid;
                    border-color: transparent transparent transparent #20A6FC; /*透明 透明 透明 灰*/
                    position: relative;
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 5px;
                  }
                  a {
                    font-size: 16px;
                    color: #333;
                    line-height: 34px;
                    //display: inline-block;
                    vertical-align: middle;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  }
                }
                .date {
                  font-size: 14px;
                  color: #999;
                  float: right;
                  line-height: 34px;
                }
              }
            }
          }
          /*.thumbnail {*/
            /*width: 100%;*/
            /*max-height: 214px;*/
            /*overflow: hidden;*/
            /*a {*/
              /*position: relative;*/
              /*display: block;*/
              /*images {*/
                /*width: 100%;*/
              /*}*/
              /*.mask {*/
                /*width: 100%;*/
                /*height: 40px;*/
                /*background: rgba(0, 0, 0, .7);*/
                /*position: absolute;*/
                /*bottom: 0;*/
                /*text-align: center;*/
                /*line-height: 40px;*/
                /*color: #fff;*/
                /*overflow: hidden;*/
                /*text-overflow: ellipsis;*/
                /*white-space: nowrap;*/
                /*padding: 0 10px;*/
              /*}*/
            /*}*/
          /*}*/
          /*.list {*/
            /*margin-top: 15px;*/
            /*li {*/
              /*overflow: hidden;*/
              /*text-overflow: ellipsis;*/
              /*white-space: nowrap;*/
            /*}*/
            /*.right-blue-triangle {*/
              /*width: 0;*/
              /*height: 0;*/
              /*border-width: 5px 0 5px 5px;*/
              /*border-style: solid;*/
              /*border-color: transparent transparent transparent #20A6FC; !*透明 透明 透明 灰*!*/
              /*position: relative;*/
              /*display: inline-block;*/
              /*vertical-align: middle;*/
              /*margin-right: 5px;*/
            /*}*/
            /*a {*/
              /*font-size: 16px;*/
              /*color: #333;*/
              /*line-height: 34px;*/
              /*display: inline-block;*/
              /*vertical-align: middle;*/
              /*overflow: hidden;*/
              /*text-overflow: ellipsis;*/
              /*white-space: nowrap;*/
              /*width: 99%;*/
            /*}*/
          /*}*/
        }
      }
    }
    .floor-two {
      margin-top: 20px;
      .lists {
        margin-top: 20px;
        .thumbnail {
          a {
            display: block;
          }
          .img {
            width: 185px;
            height: 137px;
            float: left;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .intr {
            float: right;
            width: 364px;
            .tit {
              font-size: 18px;
              color: #333;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin-bottom: 5px;
            }
            .intr-txt {
              font-size: 14px;
              color: #d1d1d1;
              line-height: 26px;
              text-align: justify;
              height: 104px;
              overflow: hidden;
            }
          }
        }
        .list {
          margin-top: 18px;
          li {
            margin-bottom: 10px;
            overflow: hidden;
            .txt {
              float: left;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              width: 80%;
              .right-blue-triangle {
                width: 0;
                height: 0;
                border-width: 5px 0 5px 5px;
                border-style: solid;
                border-color: transparent transparent transparent #20A6FC; /*透明 透明 透明 灰*/
                position: relative;
                display: inline-block;
                vertical-align: middle;
                margin-right: 5px;
              }
              a {
                font-size: 16px;
                color: #333;
                line-height: 34px;
                //display: inline-block;
                vertical-align: middle;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
            .date {
              font-size: 14px;
              color: #999;
              float: right;
              line-height: 34px;
            }
          }
        }
      }
      .dynamics {
        float: left;
        width: 570px;
      }
      .party {
        float: right;
        width: 570px;
      }
    }
    .banner {
      width: 1200px;
      margin: 40px 0 20px -20px;
      img {
        width: 100%;
      }
    }
    .floor-three {
      .member, .system {
        width: 570px;
        float: left;
        .list {
          margin-top: 15px;
          li {
            overflow: hidden;
            margin-bottom: 10px;
            .txt {
              float: left;
              width: 80%;
              .grad {
                padding: 0 5px;
                height: 24px;
                font-size: 10px;
                color: #fff;
                border-radius: 2px;
                text-align: center;
                line-height: 24px;
                display: inline-block;
                vertical-align: middle;
                margin-right: 5px;
              }
              .grad-green {
                background-image: linear-gradient(-225deg, #00D0FB 0%, #00ACF6 100%);
                background-color: #00ACF6;
              }
              .grad-blue {
                background-image: linear-gradient(-225deg, #00B09B 0%, #96C93D 100%);
                background-color: #96C93D;
              }
              .grad-origin {
                background-image: linear-gradient(-235deg, #FF8960 16%, #FF62A5 100%);
                background-color: #FF62A5;
              }
              .grad-originred {
                background-image: linear-gradient(-235deg, #673AB7 16%, #F44336 100%);
                background-color: #F44336;
              }
              .grad-red {
                background-image: linear-gradient(-225deg, #F657B7 0%, #E92C81 100%);
                background-color: #E92C81;
              }
              a {
                font-size: 14px;
                color: #333;
                line-height: 34px;
                display: inline-block;
                vertical-align: middle;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 84%;
              }
            }
            .date {
              float: right;
              line-height: 34px;
            }
          }
        }
      }
      .system {
        float: right;
        .list{
          li{
            .txt{
              width: 87%;
            }
            .txt a{
              width: 77%;
            }
          }
        }
      }
    }
    .museum{
      .museum-box{
        width: 570px;
        float: right;
      }
      .museum-edu{
        width: 570px;
        float: left;
      }
    }
  }
</style>
