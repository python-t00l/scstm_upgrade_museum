<template>
  <ul class="group clearfix">
    <li class="clearfix" v-for="(item,index) in data" :key="index">
      <router-link :to="url + '/' + item.id">
        {{item.title}}
      </router-link>
      <!--<img src="../assets/new.jpg"/>-->
      <span>{{item.addtime | dateFrm}}</span>
    </li>
  </ul>
</template>

<script>
  import moment from 'moment'

  export default {
    name: "ulGroup",
    props: {
      data: {
        type: Array,
        default: ''
      },
      url: {
        type: String,
        default: ''
      }
    },
    data() {
      return {}
    },
    filters: {
      dateFrm(date) {
        return moment.unix(date).format('YYYY-MM-DD')
      }
    }
  }
</script>

<style scoped lang="less">
  ul.group {
    padding: 0 30px;
    li {
      font: 16px/40px '微软雅黑';
      a {
        color: #1e1e1e;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 80%;
        display: block;
        float: left;
        margin-right: 5px;
      }
      img {
        vertical-align: inherit;
      }
      span {
        float: right;
        margin-right: 10px;
        color: #999;
      }
    }
  }
</style>
