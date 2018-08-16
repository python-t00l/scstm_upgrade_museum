<template>
  <Page :total="total" @on-change="handleChange" :current="page"></Page>
</template>
<script type="text/ecmascript-6">
  import {Page} from 'iview'

  export default {
    props: {
      total: {
        type: Number,
        default: ''
      },
      page: {
        type:Number,
        default: 1
      }
    },
    components: {
      Page
    },
    data() {
      return {}
    },
    methods: {
      handleChange(page) {
        this.$emit('handleChange', page)
      }
    }
  }
</script>
<style lang="less">
  .ivu-page {
    padding-top: 40px;
    text-align: center;
    padding-bottom: 40px;
    .ivu-page-item-active {
      background-color: #20a6fc;
      border-color: #20a6fc;
      a{
        color: #fff !important;
      }
      &:hover{
        a{
          color: #fff !important;
        }
      }
    }
    .ivu-page-item:hover {
      border-color: #20a6fc;
      a{
        color: #00417b;
      }
    }
    .ivu-page-next:hover, .ivu-page-prev:hover {
      border-color: #20a6fc;
    }
  }
</style>
