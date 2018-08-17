<template>
  <detail-con :data="detail ? detail : {}"></detail-con>
</template>

<script>
  import {getTalkDetail} from '@/public/js/api'
  import DetailCon from '@/base/detail'

  export default {
    name: "talkDetail",
    components: {
      DetailCon
    },
    data() {
      return {
        detail: {}
      }
    },
    created() {
      this._getTalkDetail()
    },
    methods: {
      _getTalkDetail: async function () {
        let result = await getTalkDetail({
          id: this.$route.params.id
        })
        this.detail = result.msg
      }
    }
  }
</script>

<style scoped lang="less">

</style>
