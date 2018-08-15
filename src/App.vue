<template>
  <div id="app">
    <div class="b-con">
      <i-head :logo="logoFooterInfo.logo ? logoFooterInfo.logo : ''"></i-head>
      <router-view/>
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
        logoFooterInfo: {}
      }
    },
    created() {
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

  #app .b-con {
    background: #eefaff;
    min-height: 100%;
    margin-bottom: -270px;
    background-image: url("./assets/bg.jpg");
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100%;
    box-sizing: border-box;
    padding-top: 20px;
  }

  #app .b-con .push {
    height: 270px;
  }
</style>
