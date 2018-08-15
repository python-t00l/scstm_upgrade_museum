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
