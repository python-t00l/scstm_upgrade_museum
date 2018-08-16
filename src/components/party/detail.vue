<template>
  <detail-con :data="detail ? detail : {}"></detail-con>
</template>

<script>
  import {getPartyDetail} from '@/public/js/api'
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
      this._getPartyDetail()
    },
    methods: {
      _getPartyDetail: async function () {
        let result = await getPartyDetail({
          id: this.$route.params.id
        })
        this.detail = result.msg
        console.log(result)
      }
    }
  }
</script>

<style scoped lang="less">

</style>
