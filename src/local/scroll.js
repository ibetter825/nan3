import $util from './util'
/**
 * document 全局scroll事件监听
 */
let queue = {}
$util.addListener(window.document, 'scroll', function () {
  for (var key of Object.keys(queue)) {
    queue[key]()
  }
}, false)
export default {
  register: function (key, val) {
    queue[key] = val
  },
  remove: function(key){
      delete queue[key]
  }
}
