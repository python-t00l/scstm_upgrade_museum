<template>
  <detail-con :data="detail ? detail : {}"></detail-con>
</template>

<script>
  import {getPaperDetail} from '@/public/js/api'
  import DetailCon from '@/base/detail'

  export default {
    name: "paperDetail",
    components: {
      DetailCon
    },
    data() {
      return {
        detail: {}
      }
    },
    created() {
      this._getPaperDetail()
    },
    methods: {
      _getPaperDetail: async function () {
        let result = await getPaperDetail({
          id: this.$route.params.id
        })
        this.detail = result.msg
      }
    }
  }
</script>

<style scoped lang="less">

</style>
