<template>
  <detail-con :data="detail ? detail : {}"></detail-con>
</template>

<script>
  import {getCoboDetail} from '@/public/js/api'
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
      this._getCoboDetail()
    },
    methods: {
      _getCoboDetail: async function () {
        let result = await getCoboDetail({
          id: this.$route.params.id
        })
        this.detail = result.msg
      }
    }
  }
</script>

<style scoped lang="less">

</style>
