<template>
  <div class="main">
    <div class="main-box clearfix">
      <div class="notice-list">
        <titles :titles="titles"></titles>
        <ul-group :data="lists ? lists : []" url="/flow"></ul-group>
        <Pagination
          v-if="lists[0]"
          :total="lists[0].page*10"
          :page="page"
          @handleChange="handlePage">
        </Pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import titles from '@/base/title'
  import ulGroup from '@/base/ulGroup'
  import Pagination from '@/base/pagination'
  import {LIMIT} from '@/public/js/config'
  import {
    getFlowLists
  } from '@/public/js/api'

  export default {
    name: "party",
    components: {
      titles,
      ulGroup,
      Pagination
    },
    data() {
      return {
        titles: {
          ch: '流动科技馆',
          en: 'flow science museum',
        },
        page: 1,
        limit: LIMIT,
        lists: []
      }
    },
    created() {
      this._getFlowLists()
    },
    methods: {
      _getFlowLists: async function () {
        let result = await getFlowLists({
          page: this.page,
          limit: this.limit
        })
        this.lists = result.msg
      },
      handlePage(page) {
        this.page = page
        this._getFlowLists()
      }
    }
  }
</script>

<style scoped lang="less">
  .main {
    width: 100%;
    border: 1px solid #f5f3f0;
    .main-box {
      width: 100%;
      .main-list {
        float: left;
        width: 730px;
      }
      .dynamic {
        float: right;
        width: 424px;
        .title {
          margin-top: 0;
        }
      }
    }
  }
</style>
