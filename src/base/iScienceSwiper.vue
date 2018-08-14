<template>
  <div class="science clearfix">
    <swiper :options="options">
      <swiper-slide>
        <a target="_blank" href="#" class="bg-img"
           style="background: url('./static/img/test/surmon-1.jpg') no-repeat center"></a>
      </swiper-slide>
      <swiper-slide>
        <a target="_blank" href="#" class="bg-img"
           style="background: url('./static/img/test/surmon-2.jpg') no-repeat center"></a>
      </swiper-slide>
      <swiper-slide>
        <a target="_blank" href="#" class="bg-img"
           style="background: url('./static/img/test/surmon-3.jpg') no-repeat center"></a>
      </swiper-slide>
    </swiper>
    <p class="next" slot="button-next">
      <Icon type="ios-arrow-forward" class="swiper-icon"></Icon>
    </p>
    <p class="prev" slot="button-prev">
      <Icon type="ios-arrow-back" class="swiper-icon"></Icon>
    </p>
    <div class="mask">
      实体场馆基础之上建立的互联网虚拟场馆,大众通过数字科技馆来了解实体场馆
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: "iScienceSwiper",
    components: {
      swiper,
      swiperSlide,
    },
    data() {
      return {
        options:{
          loop: true,
          navigation: {
            nextEl: '.next',
            prevEl: '.prev'
          }
        }
      }
    }
  }
</script>

<style lang="less">
  .science {
    margin: 40px 80px 0 80px;
    position: relative;
    height: 400px;
    .swiper-container{
      height: 100%;
      width: 800px;
      .bg-img{
        width: 100%;
        height: 100%;
        background-size: cover !important;
        display: block;
      }
    }
    .next,.prev{
      width: 40px;
      height: 90px;
      text-align: center;
      line-height: 90px;
      color: #fff;
      background: rgba(0,0,0,.6);
      position: absolute;
      font-size: 30px;
      top: 50%;
      margin-top: -45px;
      right: 0;
      cursor: pointer;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      outline: none;
      &:hover{
        background: rgb(65, 207, 253);
      }
    }
    .prev{
      left: 0;
    }
    .mask{
      width: 800px;
      height: 70px;
      background: rgba(0, 0, 0, 0.6);
      color: #fff;
      font-size: 20px;
      text-align: center;
      line-height: 70px;
      position: absolute;
      bottom: 0;
      z-index: 100;
      left: 50%;
      margin-left: -400px;
    }
  }
</style>
