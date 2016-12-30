// 引入子路由
let frame = function(resolve) {
    require(['../frame/subroute.vue'], resolve) //按需异步加载的配置方式
}
// 引入子页面
let goodsDetail = function(resolve) {
    require(['../page/goods/detail.vue'], resolve) //按需异步加载的配置方式
}

// 引用主模板
let index = function(resolve) {
    require(['../page/index.vue'], resolve) //按需异步加载的配置方式
}
let content = function(resolve) {
    require(['../page/index.vue'], resolve) //按需异步加载的配置方式
}
// 配置路由
export default [
  {
    path: '/',
    component: index,
    name: 'index'
  },
  {
    path: '/content',
    component: content,
    name: 'content'
  },
  {
    path: '/goods',
    component: frame,
    children: [
      {path: 'detail', component: goodsDetail},
    ]
  }
]