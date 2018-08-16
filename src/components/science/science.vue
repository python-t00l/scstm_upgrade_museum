<template>
  <div class="main">
    <div class="main-box clearfix">
      <div class="notice-list">
        <titles :titles="titles"></titles>
        <ul-group :data="lists ? lists : []" url="/science"></ul-group>
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
    getScienceLists
  } from '@/public/js/api'

  export default {
    name: "science",
    components: {
      titles,
      ulGroup,
      Pagination
    },
    data() {
      return {
        titles: {
          ch: '科普大篷车',
          en: 'science caravan',
        },
        page: 1,
        limit: 10,
        lists: []
      }
    },
    created() {
      this._getScienceLists()
    },
    methods: {
      _getScienceLists: async function () {
        let result = await getScienceLists({
          page: this.page,
          limit: this.limit
        })
        this.lists = result.msg
      },
      handlePage(page) {
        this.page = page
        this._getScienceLists()
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
