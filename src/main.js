import Vue from 'vue'
// 引用路由
import VueRouter from 'vue-router'
// 光引用不成，还得使用
Vue.use(VueRouter)

import App from './App.vue'
// 引用路由配置文件
import routes from './config/routes'
// 引用自定义存储方法文件
import storage from './utils/storage'
// 引用自定义存储方法文件
// 将storage方法绑定到全局 使用方法为在vue实例中调用eg: this.$storage.ls()
Vue.prototype.$storage = storage

//引入公用组件的文件夹，文件夹里面的index.js存有所有组件的引用
import components from './components/'
//遍历公用组件，存入到Vue全局实例中，这样可以不用在每个vue单文件中分别引入，直接使用就可以了
Object.keys(components).forEach((key) => {
    Vue.component(`${key}`, components[key])
})

const router = new VueRouter({
  routes
})
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
