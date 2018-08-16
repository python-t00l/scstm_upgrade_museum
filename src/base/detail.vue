<template>
  <div class="detail">
    <p class="line"></p>
    <div class="detaTit">
      <p class="detail_tit">{{data.title}}</p>
      <p class="txt-info">
        发布人：{{data.people}} &nbsp;&nbsp;
        访问次数：{{data.number}} &nbsp;&nbsp;
        发布时间：{{data.addtime | dateFrm}}
      </p>
    </div>
    <div class="detail-con">
      <div class="digset">
        <p>
          摘要：
          <span>{{data.introduction}}</span>
        </p>
      </div>
      <div class="article-txt" v-html="data.content"></div>
      <!--<div class="pageP">-->
        <!--<p class="prev-page">-->
          <!--<strong>上一篇：</strong>-->
          <!--<span>没有了</span>-->
        <!--</p>-->
        <!--<p class="next-page">-->
          <!--<strong>下一篇：</strong>-->
          <!--<router-link to=''>上海科普教育基地联合会组织场馆人员参观体验恐龙展</router-link>-->
        <!--</p>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: "detail",
    props:{
      data: {
        type: Object,
        default: {}
      },
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
  .detail {
    width: 100%;
    border: 1px solid #f5f3f0;
    .line {
      width: 100%;
      height: 4px;
      background: #1b90ed;
      margin-bottom: 29px;
    }
    .detaTit {
      border-bottom: 1px solid #1b90ed;
      margin-bottom: 24px;
      text-align: center;
      padding-bottom: 20px;
      .detail_tit {
        font: 24px/39px '微软雅黑';
        color: #1e1e1e;
      }
      .txt-info {
        color: #929292;
        font-size: 14px;
        margin-top: 25px;
      }
    }
    .detail-con {
      padding: 0 58px;
      .digset {
        background: #c3e4ff;
        margin: 0 60px 31px 60px;
        padding: 10px;
        p {
          line-height: 39px;
          font-size: 20px;
          color: #4f5a64;
          text-indent: 14px;
          span {
            font-size: 18px;
          }
        }
      }
      .article-txt {
        margin-bottom: 150px;
      }
      .pageP {
        margin-bottom: 30px;
        p {
          font: 12px/34px '微软雅黑';
          strong {
            color: #343434;
          }
          span{
            color: red;
          }
          a{
            color: #1e1e1e;
          }
        }
      }
    }
  }
</style>
