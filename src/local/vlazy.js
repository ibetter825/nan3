// // 触发, 即弹出文字
// dom.dispatchEvent(evt)
const LOADING_IMG = '/static/images/loader0.gif'
const CLIENT_HEIGHT = document.documentElement.clientHeight // window.screen.availHeight
// listen事件执行的方法
function listen (e) {
  let el = e.target

  el.src = el.getAttribute('data-url')
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
  let imgs = document.querySelectorAll('img[data-lazy=unload]')
  let el = null
  for (let i = 0, l = imgs.length; i < l; i++) {
      el = imgs[i]
    let etop = el.getBoundingClientRect().top
    let ebottom = el.getBoundingClientRect().bottom
    console.log(CLIENT_HEIGHT + '  ' + etop + '  ' + ebottom)
    if (etop > CLIENT_HEIGHT) {
      imgs[i].dispatchEvent(evt); // 触发事件
      return
    }
  }
}, false)
function isInView(el){
    let etop = el.getBoundingClientRect().top
    return etop < 0 ? false : CLIENT_HEIGHT - etop > 0
}
export default {
  bind: function (el, binding, vnode) {
    // [lazy-unload]
    el.setAttribute('data-lazy', 'unload') // 给元素添加属性，用于查询遍历
    el.setAttribute('data-url', binding.value)
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
