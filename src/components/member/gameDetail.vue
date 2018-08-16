<template>
  <detail-con :data="detail ? detail : {}"></detail-con>
</template>

<script>
  import {getGameDetail} from '@/public/js/api'
  import DetailCon from '@/base/detail'

  export default {
    name: "gameGetail",
    components: {
      DetailCon
    },
    data() {
      return {
        detail: {}
      }
    },
    created() {
      this._getGameDetail()
    },
    methods: {
      _getGameDetail: async function () {
        let result = await getGameDetail({
          id: this.$route.params.id
        })
        this.detail = result.msg
      }
    }
  }
</script>

<style scoped lang="less">

</style>
