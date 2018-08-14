<template>
  <div class="top-swiper">
    <swiper :options="options">
      <swiper-slide>
        <a target="_blank" href="#" class="bg-img"
           style="background: url('./static/img/test/surmon-1.jpg') no-repeat center"></a>
      </swiper-slide>
      <swiper-slide>
        <a target="_blank" href="#" class="bg-img"
           style="background: url('./static/img/test/surmon-1.jpg') no-repeat center"></a>
      </swiper-slide>
      <swiper-slide>
        <a target="_blank" href="#" class="bg-img"
           style="background: url('./static/img/test/surmon-1.jpg') no-repeat center"></a>
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
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        options: {
          centeredSlides: true,
          speed: 400,
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    }
  }
</script>

<style lang="less">
  .top-swiper {
    width: 820px;
    height: 424px;
    float: left;
    position: relative;
    .swiper-container{
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
