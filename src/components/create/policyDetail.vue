<template>
  <detail-con :data="detail ? detail : {}"></detail-con>
</template>

<script>
  import {getPolicyDetail} from '@/public/js/api'
  import DetailCon from '@/base/detail'

  export default {
    name: "policyDetail",
    components: {
      DetailCon
    },
    data() {
      return {
        detail: {}
      }
    },
    created() {
      this._getPolicyDetail()
    },
    methods: {
      _getPolicyDetail: async function () {
        let result = await getPolicyDetail({
          id: this.$route.params.id
        })
        this.detail = result.msg
      }
    }
  }
</script>

<style scoped lang="less">

</style>
