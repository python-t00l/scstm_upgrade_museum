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
  const result = post('/Home/Introduce/lists', param)
  return result
}

/**
 * 协会介绍详情
 * @param id
 * @returns {*}
 */
export function introduceDetail(param) {
  const result = post('/Home/Introduce/data', param)
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

/**
 * 获取协会党建列表数据
 * @param param  参数列表
 * @returns {*}
 */
export function getPartyLists(param) {
  const result = post('/Home/Party/lists', param)
  return result
}

/**
 * 获取协会党建详情
 * @param param
 * @returns {*}
 */
export function getPartyDetail(param) {
  const result = post('/Home/Party/data', param)
  return result
}

/**
 * 获取通知公告列表数据
 * @param param  参数列表
 * @returns {*}
 */
export function getNoticeLists(param) {
  const result = post('/Home/Notice/lists', param)
  return result
}

/**
 * 获取通知公告详情
 * @param param
 * @returns {*}
 */
export function getNoticeDetail(param) {
  const result = post('/Home/Notice/data', param)
  return result
}

/**
 * 获取协会动态列表数据
 * @param param  参数列表
 * @returns {*}
 */
export function getDynamicLists(param) {
  const result = post('/Home/Dynamic/lists', param)
  return result
}

/**
 * 获取协会动态详情
 * @param param
 * @returns {*}
 */
export function getDynamicDetail(param) {
  const result = post('/Home/Dynamic/data', param)
  return result
}

/**
 * 获取会员资讯列表数据
 * @param param  参数列表
 * @returns {*}
 */
export function getMessageLists(param) {
  const result = post('/Home/Members/lists', param)
  return result
}

/**
 * 获取会员资讯详情
 * @param param
 * @returns {*}
 */
export function getMessageDetail(param) {
  const result = post('/Home/Members/data', param)
  return result
}

/**
 * 获取继续教育列表数据
 * @param param  参数列表
 * @returns {*}
 */
export function getEducationLists(param) {
  const result = post('/Home/Activity/lists', param)
  return result
}

/**
 * 获取继续教育详情
 * @param param
 * @returns {*}
 */
export function getEducationDetail(param) {
  const result = post('/Home/Activity/data', param)
  return result
}

/**
 * 获取赛事纵览列表数据
 * @param param  参数列表
 * @returns {*}
 */
export function getGameLists(param) {
  const result = post('/Home/Game/lists', param)
  return result
}

/**
 * 获取赛事纵览详情
 * @param param
 * @returns {*}
 */
export function getGameDetail(param) {
  const result = post('/Home/Game/data', param)
  return result
}

/**
 * 获取实体科技馆列表数据
 * @param param  参数列表
 * @returns {*}
 */
export function getEntityLists(param) {
  const result = post('/Home/Entity/lists', param)
  return result
}

/**
 * 获取实体科技馆详情
 * @param param
 * @returns {*}
 */
export function getEntityDetail(param) {
  const result = post('/Home/Entity/data', param)
  return result
}

/**
 * 获取流动科技馆列表数据
 * @param param  参数列表
 * @returns {*}
 */
export function getFlowLists(param) {
  const result = post('/Home/Flow/lists', param)
  return result
}

/**
 * 获取流动科技馆详情
 * @param param
 * @returns {*}
 */
export function getFlowDetail(param) {
  const result = post('/Home/Flow/data', param)
  return result
}

/**
 * 获取科普大篷车列表数据
 * @param param  参数列表
 * @returns {*}
 */
export function getScienceLists(param) {
  const result = post('/Home/Science/lists', param)
  return result
}

/**
 * 获取科普大篷车详情
 * @param param
 * @returns {*}
 */
export function getScienceDetail(param) {
  const result = post('/Home/Science/data', param)
  return result
}

/**
 * 获取数字科技馆列表数据
 * @param param  参数列表
 * @returns {*}
 */
export function getDigitalLists(param) {
  const result = post('/Home/Digital/lists', param)
  return result
}

/**
 * 获取数字科技馆详情
 * @param param
 * @returns {*}
 */
export function getDigitalDetail(param) {
  const result = post('/Home/Digital/data', param)
  return result
}
