<template>
  <detail-con :data="detail ? detail : {}"></detail-con>
</template>

<script>
  import {getEducationDetail} from '@/public/js/api'
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
      this._getEducationDetail()
    },
    methods: {
      _getEducationDetail: async function () {
        let result = await getEducationDetail({
          id: this.$route.params.id
        })
        this.detail = result.msg
      }
    }
  }
</script>

<style scoped lang="less">

</style>
