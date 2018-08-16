<template>
  <detail-con :data="detail ? detail : {}"></detail-con>
</template>

<script>
  import {getMessageDetail} from '@/public/js/api'
  import DetailCon from '@/base/detail'

  export default {
    name: "messageDetail",
    components: {
      DetailCon
    },
    data() {
      return {
        detail: {}
      }
    },
    created() {
      this._getMessageDetail()
    },
    methods: {
      _getMessageDetail: async function () {
        let result = await getMessageDetail({
          id: this.$route.params.id
        })
        this.detail = result.msg
      }
    }
  }
</script>

<style scoped lang="less">

</style>
