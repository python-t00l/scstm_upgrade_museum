<template>
  <detail-con :data="detail ? detail : {}"></detail-con>
</template>

<script>
  import {getEduDetail} from '@/public/js/api'
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
      this._getEduDetail()
    },
    methods: {
      _getEduDetail: async function () {
        let result = await getEduDetail({
          id: this.$route.params.id
        })
        this.detail = result.msg
      }
    }
  }
</script>

<style scoped lang="less">

</style>
