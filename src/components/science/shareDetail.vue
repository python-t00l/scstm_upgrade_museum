<template>
  <detail-con :data="detail ? detail : {}"></detail-con>
</template>

<script>
  import {getShareDetail} from '@/public/js/api'
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
      this._getShareDetail()
    },
    methods: {
      _getShareDetail: async function () {
        let result = await getShareDetail({
          id: this.$route.params.id
        })
        this.detail = result.msg
      }
    }
  }
</script>

<style scoped lang="less">

</style>
