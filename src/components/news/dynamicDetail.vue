<template>
  <detail-con :data="detail ? detail : {}"></detail-con>
</template>

<script>
  import {getDynamicDetail} from '@/public/js/api'
  import DetailCon from '@/base/detail'

  export default {
    name: "dynamicsDetail",
    components: {
      DetailCon
    },
    data() {
      return {
        detail: {}
      }
    },
    created() {
      this._getDynamicDetail()
    },
    methods: {
      _getDynamicDetail: async function () {
        let result = await getDynamicDetail({
          id: this.$route.params.id
        })
        this.detail = result.msg
      }
    }
  }
</script>

<style scoped lang="less">

</style>
