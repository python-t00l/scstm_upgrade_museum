<template>
  <div class="top-swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in data" :key="index">
        <a target="_blank" :href="item.url" class="bg-img"
           :style="{background: 'url('+item.img+') no-repeat center'}"></a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: "iTopSwiper",
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          speed: 400,
          //loop: true,
          effect : 'fade',
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }
        }
      }
    }
  }
</script>

<style lang="less">
  .top-swiper {
    width: 648px;
    height: 400px;
    float: left;
    position: relative;
    .swiper-container {
      height: 100%;
    }
    .swiper-slide {
      .bg-img {
        width: 100%;
        height: 100%;
        display: block;
        background-size: cover !important;
      }
    }
  }
</style>
