import Vue from 'vue'
// 引用路由
import VueRouter from 'vue-router'
// 光引用不成，还得使用
Vue.use(VueRouter)

import App from './App.vue'
// 引用路由配置文件
import routes from './config/routes'
// 引用自定义存储方法文件
import storage from './config/storage'
// 将storage方法绑定到全局 使用方法为在vue实例中调用eg: this.$storage.ls()
Vue.prototype.$storage = storage

const router = new VueRouter({
  routes
})
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
