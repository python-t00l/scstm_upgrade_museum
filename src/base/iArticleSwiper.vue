<template>
  <div class="article clearfix">
    <div class="banner-img">
      <a target="_blank" href="#" class="bg-img"
         :style="{background: 'url('+bg+') no-repeat center'}"></a>
    </div>
    <div class="article-swiper">
      <swiper :options="options">
        <swiper-slide>
          <a target="_blank" href="#" class="art-title">
            论新时代背景下实体科博场馆的发展出路
          </a>
          <p class="before"></p>
          <div class="art-text">
            在人类发展历程中，科技推动着人类社会不断进步。互联网时代
            的到来，科技对人类的影响已超过任何一个年代，科博场馆作为
            我国普及科学知识的主要场所，对提升国民科学素养和“科教兴国”
            战略的实施有着深远的意义。
            本文在对新时代背景进行分析的基础上，指出了实体科博馆在新的
            时代背景下所面临诸多的挑战。新媒体的发展对实体馆的冲击，加
            之落后的建设理念和欠科学的机制都在一定程度上制约了实体科博
            馆的发展。因此，实体馆在今后的发展过程中应通过转变落后
            本文在对新时代背景进行分析的基础上，指出了实体科博馆在新的
            时代背景下所面临诸多的挑战。新媒体的发展对实体馆的冲击，加
            之落后的建设理念和欠科学的机制都在一定程度上制约了实体科博
            馆的发展。因此，实体馆在今后的发展过程中应通过转变落后
          </div>
          <p class="after"></p>
        </swiper-slide>
        <swiper-slide>
          <p class="art-title">
            论新时代背景下实体科博场馆的发展出路
          </p>
          <p class="before"></p>
          <div class="art-text">
            在人类发展历程中，科技推动着人类社会不断进步。互联网时代
            的到来，科技对人类的影响已超过任何一个年代，科博场馆作为
            我国普及科学知识的主要场所，对提升国民科学素养和“科教兴国”
            战略的实施有着深远的意义。
            本文在对新时代背景进行分析的基础上，指出了实体科博馆在新的
            时代背景下所面临诸多的挑战。新媒体的发展对实体馆的冲击，加
            之落后的建设理念和欠科学的机制都在一定程度上制约了实体科博
            馆的发展。因此，实体馆在今后的发展过程中应通过转变落后
          </div>
          <p class="after"></p>
        </swiper-slide>
        <swiper-slide>
          <p class="art-title">
            论新时代背景下实体科博场馆的发展出路
          </p>
          <p class="before"></p>
          <div class="art-text">
            在人类发展历程中，科技推动着人类社会不断进步。互联网时代
            的到来，科技对人类的影响已超过任何一个年代，科博场馆作为
            我国普及科学知识的主要场所，对提升国民科学素养和“科教兴国”
            战略的实施有着深远的意义。
            本文在对新时代背景进行分析的基础上，指出了实体科博馆在新的
            时代背景下所面临诸多的挑战。新媒体的发展对实体馆的冲击，加
            之落后的建设理念和欠科学的机制都在一定程度上制约了实体科博
            馆的发展。因此，实体馆在今后的发展过程中应通过转变落后
            本文在对新时代背景进行分析的基础上，指出了实体科博馆在新的
            时代背景下所面临诸多的挑战。新媒体的发展对实体馆的冲击，加
            之落后的建设理念和欠科学的机制都在一定程度上制约了实体科博
            馆的发展。因此，实体馆在今后的发展过程中应通过转变落后
          </div>
          <p class="after"></p>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: "iArticleSwiper",
    components: {
      swiper,
      swiperSlide
    },
    data() {
      const _this = this
      return {
        banner: ['./static/img/test/surmon-1.jpg', './static/img/test/surmon-2.jpg', './static/img/test/surmon-3.jpg'],
        bg: '',
        options: {
          centeredSlides: true,
          speed: 400,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          on: {
            slideChange: function () {
              _this.bg = _this.banner[this.activeIndex]
            }
          }
        }
      }
    },
    mounted(){
      this.bg = this.banner[0]
    }
  }
</script>

<style lang="less">
  .article {
    box-sizing: border-box;
    padding: 40px;
    .banner-img {
      width: 360px;
      height: 450px;
      overflow: hidden;
      float: left;
      .bg-img {
        width: 100%;
        height: 100%;
        display: block;
        background-size: cover !important;
        transition: all .3s linear;
      }
    }
    .article-swiper {
      width: 680px;
      height: 450px;
      float: right;
      .swiper-container {
        height: 100%;
      }
      .swiper-pagination-bullet{
        width: 12px;
        height: 12px;
      }
      .art-title {
        font-size: 28px;
        color: #333;
        text-align: center;
        margin-bottom: 30px;
        display: block;
      }
      .before, .after {
        width: 24px;
        height: 20px;
        background: url("../assets/before.png") no-repeat;
        background-size: cover;
      }
      .after {
        background: url("../assets/after.png") no-repeat;
        background-size: cover;
        float: right;
      }
      .art-text {
        font-size: 20px;
        color: #b1b1b1;
        height: 244px;
        line-height: 40px;
        margin: 24px;
        text-align: justify;
        position: relative;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>
