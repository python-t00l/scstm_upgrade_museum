<template>
  <div class="introduce clearfix">
    <div class="left_box">
      <ul class="clearfix">
        <li
          v-for="(item,index) in sideNav.data"
          :class="{active:sideNav.current===item.id}"
          @click="toggle(item.id)"
          :key="index">
          <span class="icon"></span>
          <span class="txt">{{item.title}}</span>
        </li>
        <li
          @click="toggleMsg(0)"
          :class="{active:sideNav.current===0}">
          <span class="icon"></span>
          <span class="txt">留言板</span>
        </li>
      </ul>
    </div>
    <div class="right_content">
      <div class="content" v-if="!show" v-html="text.content"></div>
      <div class="message" v-if="show">
        <p class="notice">如果你有什么问题、或者投诉和建议填写在下面列表中，我们会尽快回复你！</p>
        <div class="form-con">
          <div class="form-group clearfix">
            <label class="name">你的姓名</label>
            <div class="form-item">
              <input type="text"
                     v-model="name.value"
                     @input="verifyName()"
                     placeholder="请输入你的姓名"/>
              <label class="error"
                     :class="name.error ? 'is-visible' : ''">
                {{name.error}}
              </label>
            </div>
          </div>
          <div class="form-group clearfix">
            <label class="name">联系电话</label>
            <div class="form-item">
              <input type="text"
                     v-model="phone.value"
                     @input="verifyPhone()"
                     placeholder="请输入联系电话"/>
              <label class="error"
                     :class="phone.error ? 'is-visible' : ''">
                {{phone.error}}
              </label>
            </div>
          </div>
          <div class="form-group clearfix">
            <label class="name">留言内容</label>
            <div class="form-item">
      <textarea rows="5" cols="20" v-model="content.value" placeholder="请输入留言内容"
                @input="verifyContent()"></textarea>
              <label class="error"
                     :class="content.error ? 'is-visible' : ''">
                {{content.error}}
              </label>
            </div>
          </div>
          <div class="form-group clearfix">
            <label class="name">验证码</label>
            <div class="form-item">
              <div class="vertify">
                <div class="imgcode">
                  <input type="text" v-model="vertify.value" @input="verifyImgCode()"/>
                  <label class="error"
                         :class="vertify.error ? 'is-visible' : ''">
                    {{vertify.error}}
                  </label>
                </div>
                <img @click="_getImgCode()" class="vertify-img" :src="imgCaptcha"/>
              </div>
            </div>
          </div>
          <div class="form-group clearfix" style="margin-top: 40px">
            <button type="button" class="input-btn" @click="handleSubmit()">{{load ? '加载中...' : '确认'}}</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {
    introduceList,
    introduceDetail,
    getImgCode,
    formSubmit
  } from '@/public/js/api'

  export default {
    name: "introduce",
    data() {
      return {
        sideNav: {
          data: [],
          current: ''
        },
        text: '',
        show: false,
        name: {
          value: '',
          error: '',
          isVerify: false
        },
        phone: {
          value: '',
          error: '',
          isVerify: false
        },
        content: {
          value: '',
          error: '',
          isVerify: false
        },
        vertify: {
          value: '',
          error: '',
          isVerify: false
        },
        load: false,
        imgCaptcha: getImgCode()
      }
    },
    created() {
      this._introduceList()
    },
    methods: {
      verifyName() {
        if (this.name.value === null || this.name.value === '' || this.name.value === undefined) {
          this.name.error = '请输入你的姓名'
          this.name.isVerify = false
        } else {
          this.name.error = ''
          this.name.isVerify = true
        }
      },
      verifyPhone() {
        if (this.phone.value === null || this.phone.value === '' || this.phone.value === undefined) {
          this.phone.error = '请输入手机号'
          this.phone.isVerify = false
        } else if (!/^1[0-9]{10}$/.test(this.phone.value)) {
          this.phone.error = '请输入正确手机号'
          this.phone.isVerify = false
        } else {
          this.phone.error = ''
          this.phone.isVerify = true
        }
      },
      verifyContent() {
        if (this.content.value === null || this.content.value === '' || this.content.value === undefined) {
          this.content.error = '请输入留言内容'
          this.content.isVerify = false
        } else {
          this.content.error = ''
          this.content.isVerify = true
        }
      },
      verifyImgCode() {
        if (this.vertify.value === null || this.vertify.value === '' || this.vertify.value === undefined) {
          this.vertify.error = '请输入图片验证码'
          this.vertify.isVerify = false
        } else {
          this.vertify.error = ''
          this.vertify.isVerify = true
        }
      },
      _introduceList: async function () {
        let result = await introduceList({page: 1, limit: 100})
        this.sideNav.data = result.msg.data
        this.sideNav.current = result.msg.id
        this._introduceDetail()
      },
      _introduceDetail: async function () {
        let result = await introduceDetail({id: this.sideNav.current})
        this.text = result.msg
      },
      /**
       * 点击除了留言板li
       * @param id
       */
      toggle(id) {
        this.sideNav.current = id
        this.show = false
        this._introduceDetail()
      },
      /**
       * 点击留言板
       * @param id
       */
      toggleMsg(id) {
        this.sideNav.current = id
        this.show = true
      },
      /**
       * 验证码图片切换
       * @private
       */
      _getImgCode() {
        this.imgCaptcha = getImgCode()
      },
      /**
       * 触发验证
       */
      handleForm() {
        this.verifyPhone()
        this.verifyContent()
        this.verifyName()
        this.verifyImgCode()
      },
      /**
       * 提交表单数据
       */
      handleSubmit() {
        this.handleForm()
        if (
          this.name.isVerify && this.phone.isVerify && this.content.isVerify && this.vertify.isVerify
        ) {
          this.handleFormAjax()
        }
      },
      handleFormAjax: async function () {
        this.load = true
        let result = await formSubmit({
          name: this.name.value,
          phone: this.phone.value,
          content: this.content.value,
          vertify: this.vertify.value
        })
        if (result.status === 0) {
          this.load = false
          this.name.value = ''
          this.name.isVerify = false
          this.phone.value = ''
          this.phone.isVerify = false
          this.content.value = ''
          this.content.isVerify = false
          this.vertify.value = ''
          this.vertify.isVerify = false
          this._getImgCode()
        } else {
          this.load = false
          this._getImgCode()
          const obj = result.data
          this[Object.keys(obj)[0]].error = result.data[Object.keys(obj)[0]]
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .introduce {
    position: relative;
    background: url("../assets/line.jpg") repeat-y;
    min-height: 600px;
    background-position: -40px 0;
    .left_box {
      float: left;
      width: 150px;
      ul {
        li {
          font-size: 16px;
          color: #666;
          cursor: pointer;
          margin-bottom: 25px;
          text-align: right;
          padding-right: 20px;
          .icon {
            width: 3px;
            height: 22px;
            background: #23AAFC;
            display: inline-block;
            vertical-align: middle;
            opacity: 0;
            margin-right: 10px;
            transition: all .25s;
          }
          .txt {
            display: inline-block;
            vertical-align: middle;
            transition: all .25s;
          }
          &.active {
            .icon {
              opacity: 1;
            }
            .txt {
              font-size: 22px;
              color: #23AAFC;
            }
          }
          &:hover {
            &.active {
              .txt {
                transform: scale(1);
                color: #23AAFC;
              }
            }
            .txt {
              transform: scale(1.2);
              color: #23AAFC;
            }
          }
        }
      }
    }
    .right_content {
      float: left;
      padding: 0 30px 0 30px;
      width: 1000px;
      .content {
        width: 100%;
      }
      .message {
        .notice {
          text-align: left;
          font-size: 18px;
          color: #252525;
        }
        .form-con {
          display: inline-block;
          width: 450px;
          margin-top: 40px;
          .form-group {
            width: 100%;
            position: relative;
            margin-bottom: 25px;
            .form-item {
              position: relative;
              .ivu-input-icon {
                line-height: 42px;
              }
              .ivu-input {
                height: 42px;
              }
            }
            .vertify {
              width: 100%;
              .imgcode {
                width: 200px;
                display: inline-block;
                vertical-align: middle;
                position: relative;
                input {
                  width: 100%;
                }
              }
              .vertify-img {
                display: inline-block;
                vertical-align: middle;
                height: 43px;
                margin-left: 20px;
                -webkit-border-radius: 5px;
                -moz-border-radius: 5px;
                border-radius: 5px;
                cursor: pointer;
              }
            }
            input, textarea {
              width: 100%;
              border: 1px solid #dddee1;
              padding: 10px 20px 10px 12px;
              -webkit-transition: all .3s ease-in-out;
              transition: all .3s ease-in-out;
              background: rgba(255, 255, 255, 1);
              box-shadow: none;
              color: #333;
              font-size: 14px;
              -webkit-border-radius: 4px;
              -moz-border-radius: 4px;
              border-radius: 4px;
              &:focus {
                border: 1px solid #57a3f3;
                -webkit-transition: all .3s ease-in-out;
                transition: all .3s ease-in-out;
                box-shadow: 0 0 0 2px rgba(45, 140, 240, .2);
              }
            }
            label.error.is-visible {
              visibility: visible;
              opacity: 1;
              right: 22px;
              -ms-filter: "alpha(Opacity=100)";
              -webkit-transform: translate(0, 0);
              -ms-transform: translate(0, 0);
              transform: translate(0, 0);
              -webkit-transition: .3s ease-out;
              transition: .3s ease-out;
            }
            label.name {
              font-size: 16px;
              margin-bottom: 15px;
              display: block;
              text-align: left;
            }
            label.error {
              position: absolute;
              top: -1px;
              right: -70px;
              padding: 0 8px;
              line-height: 44px;
              color: #c33;
              cursor: text;
              background: 0 0;
              opacity: 0;
              -webkit-transform: translate(20px, 0);
              -ms-transform: translate(20px, 0);
              transform: translate(20px, 0);
              -webkit-transition: .25s ease-out;
              transition: .25s ease-out;
              font-size: 14px;
            }
          }
          .input-btn {
            width: 100%;
            display: block;
            border: none;
            height: 44px;
            line-height: 44px;
            background-color: #20a6fc;
            background-image: linear-gradient(-225deg, #00ACF6 0%, #00D0FB 100%);
            color: #fff;
            overflow: hidden;
            cursor: pointer;
            font-size: 15px;
            text-align: center;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
          }
          .disabled {
            background: gray;
          }
        }
      }
    }
  }
</style>
