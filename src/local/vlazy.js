// // 触发, 即弹出文字
import $util from './util'
// dom.dispatchEvent(evt)
const TAG_NAME_IMG = 'IMG'
const LOADING_IMG = '/static/images/loader0.gif'
const CLIENT_HEIGHT = document.documentElement.clientHeight // window.screen.availHeight
let LAST_SCROLL_TOP = 0 //记录上一次滚动的scrollTop 用于判断滚动方向

// listen事件执行的方法
function listen (e) {
  let el = e.target
  let img = el
  if(el.tagName !== TAG_NAME_IMG)
      img = el.getElementsByTagName('img')[0]
  img.src = el.getAttribute('data-url')
  el.setAttribute('data-lazy', 'loaded') // 给改变元素属性，用于查询遍历
  el.removeAttribute('data-url')
  // 移除事件监听
  if (window.removeEventListener)
    el.removeEventListener('listen', listen, false)
  else if (window.detachEvent)
    el.detachEvent('onlisten', listen)
}

// 创建事件
var evt = document.createEvent('HTMLEvents')
// 初始化事件
evt.initEvent('listen', false, false)

// 添加监听事件
window.addEventListener('scroll', function () {
  let isDown = isScrollDown()
  let lazies = document.querySelectorAll('[data-lazy=unload]')
  let el = null
  for (let i = 0, l = lazies.length; i < l; i++) {
      el = lazies[i]
    let etop = el.getBoundingClientRect().top
    let ebottom = el.getBoundingClientRect().bottom
    let height = ebottom - etop//元素的高度

    if ((isDown && etop <= CLIENT_HEIGHT + height) || (!isDown && ebottom >= -10)) {
      lazies[i].dispatchEvent(evt); // 触发事件
      return
    }
  }
}, false)

/**
 * 是否向下滚动
 */
function isScrollDown(){
  let top = $util.scrollTop()
  let isDown = top > LAST_SCROLL_TOP ? true : false
  LAST_SCROLL_TOP = top
  return isDown
}
/**
 * 判断是否在页面内
 */
function isInView(el){
    let etop = el.getBoundingClientRect().top
    let ebottom = el.getBoundingClientRect().bottom
    return ebottom < 0 ? false : CLIENT_HEIGHT - etop > 0
}
export default {
  bind: function (el, binding, vnode) {
    //指定为container时需要
    el.setAttribute('data-lazy', 'unload') // 给元素添加属性，用于查询遍历
    el.setAttribute('data-url', binding.value)
    if(el.tagName !== TAG_NAME_IMG)
      el.getElementsByTagName('img')[0].src = LOADING_IMG
    else
      el.src = LOADING_IMG
    // 监听listen事件
    if (window.addEventListener)
      el.addEventListener('listen', listen, false)
    else if (window.attachEvent)
      el.attachEvent('onlisten', listen)
      console.log('bind')
  },
  inserted: function(el){
      if(isInView(el)) el.dispatchEvent(evt); // 触发事件
  }
}
