// 引入子路由
import frame from '../frame/subroute.vue'
// 引入子页面
import userIndex from '../page/user/index.vue'
import userInfo from '../page/user/info.vue'

import goodsDetail from '../page/goods/detail.vue'

// 引用模板
import index from '../page/index.vue'
import content from '../page/content.vue'
// 配置路由
export default [
  {
    path: '/',
    component: index
  },
  {
    path: '/content',
    component: content
  },
  {
    path: '/goods',
    component: frame,
    children: [
      {path: 'detail', component: goodsDetail},
    ]
  }
]