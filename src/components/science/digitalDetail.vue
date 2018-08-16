<template>
  <detail-con :data="detail ? detail : {}"></detail-con>
</template>

<script>
  import {getDigitalDetail} from '@/public/js/api'
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
      this._getDigitalDetail()
    },
    methods: {
      _getDigitalDetail: async function () {
        let result = await getDigitalDetail({
          id: this.$route.params.id
        })
        this.detail = result.msg
      }
    }
  }
</script>

<style scoped lang="less">

</style>
