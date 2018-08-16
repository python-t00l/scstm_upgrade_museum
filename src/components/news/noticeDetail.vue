<template>
  <detail-con :data="detail ? detail : {}"></detail-con>
</template>

<script>
  import {getNoticeDetail} from '@/public/js/api'
  import DetailCon from '@/base/detail'

  export default {
    name: "detail",
    components: {
      DetailCon
    },
    data() {
      return {
        detail: {}
      }
    },
    created() {
      this._getNoticeDetail()
    },
    methods: {
      _getNoticeDetail: async function () {
        let result = await getNoticeDetail({
          id: this.$route.params.id
        })
        this.detail = result.msg
      }
    }
  }
</script>

<style scoped lang="less">

</style>
