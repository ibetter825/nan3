import $util from './util'
// v-tab事件自定义指令
function isPc () {
  let uaInfo = navigator.userAgent
  let agents = ['Android', 'iPhone', 'Windows Phone', 'iPad', 'iPod']
  let flag = true
  for (let i = 0; i < agents.length; i++) {
    if (uaInfo.indexOf(agents[i]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

function getType (self) {
  if (self.disabled) return false
  let evObj = self.evObj
  let res = ''
  if (self.time < 150 && Math.abs(evObj.distanceX) < 2 && Math.abs(evObj.distanceY) < 2)
    res = 'tap'
  else if (self.time > 500 && Math.abs(evObj.distanceX) < 2 && Math.abs(evObj.distanceY) < 2)
    res = 'long'
  else if (Math.abs(evObj.distanceX) < 50 && evObj.distanceY > 0)
    res = 'up'
  else if (Math.abs(evObj.distanceX) < 50 && evObj.distanceY < 0)
    res = 'down'
  else if (evObj.distanceX > 0 && Math.abs(evObj.distanceY) < 50)
    res = 'left'
  else if (evObj.distanceX < 0 && Math.abs(evObj.distanceY) < 50)
    res = 'right'
  else
    res = 'move'
  return res
}

function touchstart (e, self) {
  let touches = e.touches[0]
  let evObj = self.evObj
  evObj.pageX = touches.pageX
  evObj.pageY = touches.pageY
  evObj.isStart = true
  evObj.isMoving = false
  evObj.isEnd = true
  evObj.clientX = touches.clientX
  evObj.clientY = touches.clientY
  self.time = +new Date()
  self.handler(e)
}

function touchmove (e, self) {
  let touches
  if (e.changedTouches) touches = e.changedTouches[0]
  else touches = e.originalEvent.touches[0]
  let evObj = self.evObj
  evObj.isStart = false
  evObj.isMoving = true
  evObj.isEnd = false
  evObj.distanceX = evObj.pageX - touches.pageX
  evObj.distanceY = evObj.pageY - touches.pageY
  evObj.type = getType(self)
  self.handler(e)
}

function touchend (e, self) {
  let touches
  if (e.changedTouches) touches = e.changedTouches[0]
  else touches = e.originalEvent.touches[0]
  let evObj = self.evObj
  evObj.isStart = false
  evObj.isMoving = false
  evObj.isEnd = true
  self.time = +new Date() - self.time
  evObj.distanceX = evObj.pageX - touches.pageX
  evObj.distanceY = evObj.pageY - touches.pageY
  evObj.type = getType(self)
  // 事件类型 tap 点击, long 长点击, up 上滑, down 下滑, left 左滑, right 右滑, move 移动
  self.handler(e)
}
/**
 * 阻止冒泡
 */
function stopPropagation (e) {
  if (e && e.stopPropagation)
    e.stopPropagation()
  else
    window.event.cancelBubble = true
}
/**
 * 阻止默认事件
 */
function preventDefault (e) {
  if (e && e.preventDefault)
    e.preventDefault()
  else
    window.event.returnValue = false
}

function eventModifier (binding, e) {
  if (binding.modifiers.stop) stopPropagation(e)
  if (binding.modifiers.prevent) preventDefault(e)
}

export default {
  bind: function (el, binding, vnode) {
    if (!el.handler) el.handler = {}
    let type = binding.name
    let value = binding.value
    el.evObj = {}
    el.handler = function (e) { // This directive.handler
      if (!value && el.href && !binding.modifiers.prevent) return window.location = el.href
      value.event = e
      value.evObj = el.evObj
      value.methods.call(this, value)
    }

    $util.addListener(el, 'touchstart', function (e) {
      if (e.cancelable) eventModifier(binding, e)
      touchstart(e, el)
    }, true)
    $util.addListener(el, 'touchmove', function (e) {
      if (e.cancelable) eventModifier(binding, e)
      touchmove(e, el)
    }, true)
    $util.addListener(el, 'touchend', function (e) {
      if (e.cancelable) eventModifier(binding, e)
      return touchend(e, el)
    }, true)
  }
}
