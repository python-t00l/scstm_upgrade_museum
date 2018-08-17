<template>
  <div class="main">
    <div class="main-box clearfix">
      <div class="notice-list">
        <titles :titles="titles"></titles>
        <ul class="online clearfix">
          <li class="clearfix"
              v-for="(item,index) in lists"
              :key="index">
            <div class="txt-item">
              <span class="time">{{item.addtime | dateFrm}}</span>
              <!--<span class="splt"></span>-->
              <span class="txt">
                  <a :href="filename+ '/' + 'Home/Download/download?filename='+item.filename">{{item.title}}</a>
                </span>
            </div>
            <p>
              <a :href="filename+ '/' + 'Home/Download/download?filename='+item.filename">
                <i class="icon">
                  <img src="../../assets/down.png"/>
                </i>
              </a>
            </p>
          </li>
        </ul>
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
  import moment from 'moment'
  import {serveUrl} from '@/public/js/config'
  import {
    getDownloadList
  } from '@/public/js/api'

  export default {
    name: "download",
    components: {
      titles,
      ulGroup,
      Pagination
    },
    data() {
      return {
        titles: {
          ch: '下载专区',
          en: 'Download Center',
        },
        page: 1,
        limit: 10,
        lists: [],
        filename: serveUrl
      }
    },
    created() {
      this._getDownloadList()
    },
    methods: {
      _getDownloadList: async function () {
        let result = await getDownloadList({
          page: this.page,
          limit: this.limit
        })
        console.log(result)
        this.lists = result.msg
      },
      handlePage(page) {
        this.page = page
        this._getDownloadList()
      }
    },
    filters: {
      dateFrm(date) {
        return moment.unix(date).format('YYYY-MM-DD')
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
      ul.online {
        width: 100%;
        position: relative;
        margin-top: 20px;
        padding: 0 30px;
        li {
          font: 16px/40px '微软雅黑';
          &:last-child {
            margin-bottom: 0;
          }
          .txt-item {
            float: left;
            span {
              display: inline-block;
              font-size: 16px;
              color: #999;
              &.time {
                padding-right: 25px;
              }
              &.splt {
                width: 10px;
                height: 10px;
                background: #004179;
                margin-right: 25px;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
              }
              &.txt {
                a {
                  color: #1e1e1e;
                }
              }
            }
          }
          p {
            float: right;
            .icon {
              display: inline-block;
              vertical-align: middle;
            }
            span {
              display: inline-block;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
</style>
