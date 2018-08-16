<template>
  <div class="tits">
    <p class="ch">{{titles.ch}}</p>
    <p class="en">{{titles.en}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      titles: {
        tyoe: Object,
        default: {}
      }
    },
    data() {
      return {}
    }
  }
</script>
<style lang="less">
  .tits{
    width: 100%;
    padding: 15px 0;
    background-image: linear-gradient(-225deg, #00D0FB 0%, #00ACF6 100%);
    margin-bottom: 27px;
    .ch{
      font-size: 34px;
      color: #fff;
      text-align: center;
      margin-bottom: 5px;
      letter-spacing: 2px;
    }
    .en{
      font-size: 18px;
      color: #fff;
      text-align: center;
      text-transform: uppercase;
    }
  }
</style>
