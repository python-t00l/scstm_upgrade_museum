<template>
  <detail-con :data="detail ? detail : {}"></detail-con>
</template>

<script>
  import {getInnovateDetail} from '@/public/js/api'
  import DetailCon from '@/base/detail'

  export default {
    name: "innovateDetail",
    components: {
      DetailCon
    },
    data() {
      return {
        detail: {}
      }
    },
    created() {
      this._getInnovateDetail()
    },
    methods: {
      _getInnovateDetail: async function () {
        let result = await getInnovateDetail({
          id: this.$route.params.id
        })
        this.detail = result.msg
      }
    }
  }
</script>

<style scoped lang="less">

</style>
