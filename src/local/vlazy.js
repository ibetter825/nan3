// // 触发, 即弹出文字
import $util from './util'
// dom.dispatchEvent(evt)
const TAG_NAME_IMG = 'IMG'
const LOADING_IMG = '/static/images/loader0.gif'
const ERROR_IMG = '/static/images/load_error.png'
const CLIENT_HEIGHT = document.documentElement.clientHeight // window.screen.availHeight
let LAST_SCROLL_TOP = 0 // 记录上一次滚动的scrollTop 用于判断滚动方向

// listen事件执行的方法
function listen (e) {
  let el = e.target
  let type = el.getAttribute('data-type')
  if (type === 'component') {
      el.handler.lazy()//调用绑定的事件
      //el.setAttribute('data-lazy', 'loaded') // 给改变元素属性，用于查询遍历
  }else {
    let img = el
    if (el.tagName !== TAG_NAME_IMG)
      img = el.getElementsByTagName('img')[0]
    img.src = el.getAttribute('data-url')

    // 加载成功
    $util.addListener(img, 'load', function () {
      el.setAttribute('data-lazy', 'loaded') // 给改变元素属性，用于查询遍历
      el.removeAttribute('data-url')
      el.style.background = ''
    }, false)

    // 加载失败
    $util.addListener(img, 'error', function () {
      el.setAttribute('data-lazy', 'error') // 给改变元素属性，用于查询遍历
      el.style.background = 'url(' + ERROR_IMG + ') no-repeat center'
      img.style.visibility = 'hidden'
    }, false)
  }

  // 移除事件监听
  $util.removeListener(el, 'listen', listen, false)
}

// 创建事件
var evt = document.createEvent('HTMLEvents')
// 初始化事件
evt.initEvent('listen', false, false)

// 添加监听事件
$util.addListener(window, 'scroll', function () {
  let isDown = isScrollDown()
  let lazies = document.querySelectorAll('[data-lazy=unload]')
  let el = null, etop = 0, ebottom = 0, height = 0
  for (let i = 0, l = lazies.length; i < l; i++) {
    el = lazies[i]
    etop = el.getBoundingClientRect().top
    ebottom = el.getBoundingClientRect().bottom
    height = ebottom - etop // 元素的高度
    if (isInView(el)) {
      lazies[i].dispatchEvent(evt); // 触发事件
    }else {
      if ((isDown && etop >= 0 && etop <= CLIENT_HEIGHT) || (!isDown && ebottom >= -10)) {
        lazies[i].dispatchEvent(evt); // 触发事件
        return
      }
    }
  }
}, false)

/**
 * 是否向下滚动
 */
function isScrollDown () {
  let top = $util.scrollTop()
  let isDown = top > LAST_SCROLL_TOP ? true : false
  LAST_SCROLL_TOP = top
  return isDown
}
/**
 * 判断是否在页面内
 */
function isInView (el) {
  let etop = el.getBoundingClientRect().top
  let ebottom = el.getBoundingClientRect().bottom
  return ebottom < 0 ? false : CLIENT_HEIGHT - etop > 0
}
export default {
  bind: function (el, binding, vnode) {
    // 指定为container时需要
    el.setAttribute('data-lazy', 'unload') // 给元素添加属性，用于查询遍历
    /**
     * 懒加载的对象：
     *  1.图片
     *    ① img v
     *    ② img的父级 v
     *    ③ 多个img的父级 x
     *  2.组件的数据 v
     */
    if (binding.modifiers.component) { // 组件数据懒加载
      let value = binding.value
      el.setAttribute('data-type', 'component')
      el.handler = {
        lazy: function () { // This directive.handler
          //value.methods.call(this, value)
          //data必须要放在组件的data中才会触发watch事件
          value.data.lazy = !value.data.lazy //通知对应的子菜单更新数据，watch
        },
        success: function(){
          el.setAttribute('data-lazy', 'loaded')
        },
        error: function(){
          el.setAttribute('data-lazy', 'error')
        }
      }
    }else {
      el.setAttribute('data-url', binding.value)
      if (el.tagName !== TAG_NAME_IMG)
        el.style.background = 'url(' + LOADING_IMG + ') no-repeat center'
      else
        el.src = LOADING_IMG
    }
    // 监听listen事件
    $util.addListener(el, 'listen', listen, false)
  },
  inserted: function (el) {
    setTimeout(function () {
      if (isInView(el)) el.dispatchEvent(evt); // 触发事件
    }, 500); // 由于路由加入了过渡效果，因此需要在过渡完成后才能获取元素位置，过渡效果时间为0.3s
  }
}
