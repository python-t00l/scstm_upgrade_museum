<template>
  <detail-con :data="detail ? detail : {}"></detail-con>
</template>

<script>
  import {getWindowDetail} from '@/public/js/api'
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
      this._getWindowDetail()
    },
    methods: {
      _getWindowDetail: async function () {
        let result = await getWindowDetail({
          id: this.$route.params.id
        })
        this.detail = result.msg
      }
    }
  }
</script>

<style scoped lang="less">

</style>
