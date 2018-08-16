<template>
  <detail-con :data="detail ? detail : {}"></detail-con>
</template>

<script>
  import {getScienceDetail} from '@/public/js/api'
  import DetailCon from '@/base/detail'

  export default {
    name: "scienceDetail",
    components: {
      DetailCon
    },
    data() {
      return {
        detail: {}
      }
    },
    created() {
      this._getScienceDetail()
    },
    methods: {
      _getScienceDetail: async function () {
        let result = await getScienceDetail({
          id: this.$route.params.id
        })
        this.detail = result.msg
      }
    }
  }
</script>

<style scoped lang="less">

</style>
