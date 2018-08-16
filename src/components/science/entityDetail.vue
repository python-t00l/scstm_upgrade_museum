<template>
  <detail-con :data="detail ? detail : {}"></detail-con>
</template>

<script>
  import {getEntityDetail} from '@/public/js/api'
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
      this._getEntityDetail()
    },
    methods: {
      _getEntityDetail: async function () {
        let result = await getEntityDetail({
          id: this.$route.params.id
        })
        this.detail = result.msg
      }
    }
  }
</script>

<style scoped lang="less">

</style>
