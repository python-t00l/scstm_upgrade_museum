<template>
  <div id="app">
    <div class="b-con">
      <i-head :pathname="pathname" :logo="logoFooterInfo.logo ? logoFooterInfo.logo : ''"></i-head>
      <div class="con">
        <router-view/>
      </div>
      <div class="push"></div>
    </div>
    <i-footer :data="logoFooterInfo ? logoFooterInfo : {}"></i-footer>
  </div>
</template>

<script>
  import IFooter from '@/base/iFooter'
  import IHead from '@/base/iHead'
  import {getLogoFooterInfo} from '@/public/js/api'

  export default {
    name: 'App',
    components: {
      IFooter,
      IHead
    },
    data() {
      return {
        logoFooterInfo: {},
        pathname:[]
      }
    },
    created() {
      this.pathname = this.$route.meta
      document.title = this.$route.name + ' - 四川省自然科学博物馆协会'
      this._getLogoFooterInfo()
    },
    methods: {
      /**
       * 获取logo和底部数据
       * @returns {Promise<void>}
       * @private
       */
      _getLogoFooterInfo: async function () {
        let result = await getLogoFooterInfo()
        this.logoFooterInfo = result.msg
      }
    },
    watch: {
      "$route"(to, from) {
        this.pathname = to.meta
        document.title = to.name + ' - 四川省自然科学博物馆协会'
      }
    }
  }
</script>

<style>
  @import "./public/css/base.css";

  html, body {
    height: 100%;
    margin: 0;
    min-width: 1200px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #eefaff;
    height: 100%;
  }
  .con{
    width: 1200px;
    margin: 20px auto;
    box-sizing: border-box;
    padding: 20px;
    background: #fff;
  }

  #app .b-con {
    background: #eefaff;
    min-height: 100%;
    margin-bottom: -270px;
    background-image: url("assets/bg.jpg");
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 130%;
    box-sizing: border-box;
    padding-top: 20px;
  }

  #app .b-con .push {
    height: 270px;
  }
</style>
