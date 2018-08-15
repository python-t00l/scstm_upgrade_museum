import {post, get} from './fetch'
import {serveUrl} from './config'

/**
 * 获取logo和底部数据
 * @returns {*}
 */
export function getLogoFooterInfo() {
  const result = post('/Home/Index/same')
  return result
}

/**
 * 获取首页中部数据
 * @returns {*}
 */
export function getIndexMiddleInfo() {
  const result = post('/Home/Index/middle')
  return result
}

/**
 * 协会介绍列表
 * @param page
 * @returns {*}
 */
export function introduceList(param) {
  const result = post('/Home/introduce/lists', param)
  return result
}

/**
 * 协会介绍详情
 * @param id
 * @returns {*}
 */
export function introduceDetail(param) {
  const result = post('/Home/introduce/data', param)
  return result
}

/**
 * 获取图片验证码
 * @returns {string}
 */
export function getImgCode() {
  return serveUrl + '/Home/Introduce/vertify' + '/' + Date.parse(new Date())
}

/**
 * 提交表单数据
 * @param name
 * @param phone
 * @param content
 * @param vertify
 * @returns {*}
 */
export function formSubmit(param) {
  const result = post('/Home/Introduce/message', param)
  return result
}

