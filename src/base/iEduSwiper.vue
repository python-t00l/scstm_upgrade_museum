<template>
  <div class="edu clearfix">
    <div class="article-swiper">
      <swiper :options="options">
        <swiper-slide v-for="(item,index) in banners" :key="index">
          <router-link :to="'/edu/'+item.id" class="art-title">
            {{item.title}}
          </router-link>
          <p class="before"></p>
          <div class="art-text">
            {{item.introduction}}
          </div>
          <p class="after"></p>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="banner-img" v-if="banners.length">
      <router-link
        class="bg-img"
        :to="'/edu/'+(bg.id ? bg.id : banners[0].id)"
        :style="{background: 'url('+(bg.img ? bg.img : banners[0].img)+') no-repeat center'}"></router-link>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: "iEduSwiper",
    props: {
      banners: {
        type: Array,
        default: []
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    data() {
      const _this = this
      return {
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
              _this.bg = _this.banners ? _this.banners[this.activeIndex] : ''
            }
          }
        }
      }
    }
  }
</script>

<style lang="less">
  .edu {
    box-sizing: border-box;
    width: 100%;
    .banner-img {
      width: 200px;
      height: 264px;
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
      width: 350px;
      height: 264px;
      float: right;
      .swiper-container {
        height: 100%;
      }
      .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
      }
      .art-title {
        font-size: 21px;
        color: #333;
        text-align: center;
        margin-bottom: 30px;
        display: block;
      }
      .before, .after {
        width: 12px;
        height: 10px;
        background: url("../assets/before.png") no-repeat;
        background-size: cover;
      }
      .after {
        background: url("../assets/after.png") no-repeat;
        background-size: cover;
        float: right;
      }
      .art-text {
        font-size: 14px;
        color: #b1b1b1;
        height: 120px;
        line-height: 30px;
        margin: 5px 10px;
        text-align: justify;
        position: relative;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>
