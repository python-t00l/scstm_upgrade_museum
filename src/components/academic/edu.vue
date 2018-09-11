<template>
  <div class="main">
    <div class="main-box clearfix">
      <div class="notice-list">
        <titles :titles="titles"></titles>
        <ul-group :data="lists ? lists : []" url="/edu"></ul-group>
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
  import {
    getEduLists
  } from '@/public/js/api'
  import {LIMIT} from '@/public/js/config'

  export default {
    name: "digital",
    components: {
      titles,
      ulGroup,
      Pagination
    },
    data() {
      return {
        titles: {
          ch: '四川科普教育',
          en: 'sichuan Popular Science Education',
        },
        page: 1,
        limit: LIMIT,
        lists: []
      }
    },
    created() {
      this._getEduLists()
    },
    methods: {
      _getEduLists: async function () {
        let result = await getEduLists({
          page: this.page,
          limit: this.limit
        })
        this.lists = result.msg
      },
      handlePage(page) {
        this.page = page
        this._getEduLists()
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
