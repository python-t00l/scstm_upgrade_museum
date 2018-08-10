<template>
  <div id="app">
    <div class="b-con">
      <i-head></i-head>
      <router-view/>
      <div class="push"></div>
    </div>
    <i-footer></i-footer>
  </div>
</template>

<script>
  import IFooter from '@/base/iFooter'
  import IHead from '@/base/iHead'

  export default {
    name: 'App',
    components: {
      IFooter,
      IHead
    }
  }
</script>

<style>
  @import "./public/css/base.css";
  html, body{
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
  #app .b-con .push{
    height: 270px;
  }
</style>
