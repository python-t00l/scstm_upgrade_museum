<template>
  <div class="foot">
    <div class="foot-top">
      <div class="foot-con">
        <div class="title">
          <span class="spot"></span>
          <span class="txt">友情链接</span>
        </div>
        <div class="links">
          <Dropdown trigger="click" style="margin-left: 20px">
            <div class="link-item">
              四川科博网站
              <span class="icon">
                <Icon type="ios-arrow-down"></Icon>
              </span>
            </div>
            <DropdownMenu slot="list">
              <DropdownItem v-for="(item,index) in data.zf" :key="index">
                <a style="display: block;" target="_blank" :href="item.url">{{item.title}}</a>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown trigger="click" style="margin-left: 20px">
            <div class="link-item">
              中国科博网站
              <span class="icon">
                <Icon type="ios-arrow-down"></Icon>
              </span>
            </div>
            <DropdownMenu slot="list">
              <DropdownItem v-for="(item,index) in data.qt" :key="index">
                <a style="display: block;" target="_blank" :href="item.url">{{item.title}}</a>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown trigger="click" style="margin-left: 20px">
            <div class="link-item">
              科普网站
              <span class="icon">
                <Icon type="ios-arrow-down"></Icon>
              </span>
            </div>
            <DropdownMenu slot="list">
              <DropdownItem v-for="(item,index) in data.kp" :key="index">
                <a style="display: block;" target="_blank" :href="item.url">{{item.title}}</a>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
    <div class="foot-bottom">
      <div class="foot-con">
        <div class="links">
          <a href="http://www.sckx.org.cn/" target="_blank">四川省科学技术协会</a>
          <a class="line" href="javascript:void(0)">|</a>
          <a href="http://www.scstm.com" target="_blank">四川科技馆</a>
        </div>
        <p class="gra-line"></p>
        <p class="txt">
          四川省自然科学博物馆协会 版权所有 2008-2028 四川省自然科学博物馆协会主办<br/>
          地址:{{data.end ? data.end[0].valus : ''}} 电话：{{data.end ? data.end[1].valus : ''}} 传真：{{data.end ? data.end[2].valus : ''}}<br/>
          技术支持：成都匹体科技有限公司<br/>
          蜀ICP备：060202226号
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "foot",
    props: {
      data: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style lang="less">
  .foot {
    background: #20a6fc;
    .foot-top {
      background: #fff;
      height: 50px;
      .foot-con {
        width: 1200px;
        margin: 0 auto;
        .title {
          display: inline-block;
          vertical-align: middle;
          line-height: 50px;
          margin-right: 20px;
          .spot {
            width: 4px;
            height: 16px;
            background: #23AAFC;
            display: inline-block;
            vertical-align: middle;
            margin-right: 5px;
          }
          .txt {
            color: #23AAFC;
            font-size: 14px;
            display: inline-block;
            vertical-align: middle;
          }
        }
        .links {
          display: inline-block;
          vertical-align: middle;
          .link-item {
            background: #fff;
            border-radius: 4px;
            border: 1px solid #f3f3f3;
            height: 34px;
            width: 170px;
            box-sizing: border-box;
            padding-left: 10px;
            padding-right: 10px;
            line-height: 34px;
            font-size: 13px;
            color: #666;
            position: relative;
            cursor: pointer;
            .icon {
              position: absolute;
              right: 10px;
            }
          }
          .ivu-select-dropdown {
            width: 170px !important;
          }
        }
      }
    }
    .foot-bottom {
      height: 220px;
      box-sizing: border-box;
      padding-top: 24px;
      .foot-con {
        text-align: center;
        .links {
          font-size: 18px;
          color: #fff;
          a {
            display: inline-block;
            vertical-align: middle;
            color: #fff;
            &.line {
              margin: 0 15px;
            }
          }
        }
        .gra-line {
          background-image: linear-gradient(-270deg, rgba(255, 255, 255, 0.00) 3%, rgba(255, 255, 255, 0.80) 51%, rgba(255, 255, 255, 0.00) 100%);
          height: 1px;
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .txt {
          font-size: 16px;
          color: #fff;
          line-height: 26px;
        }
      }
    }
  }
</style>
