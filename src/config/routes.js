// 引入子路由
let frame = function(resolve) {
        require(['../frame/subroute.vue'], resolve) //按需异步加载的配置方式
    }
    // 引入子页面
let goodsDetail = function(resolve) {
    require(['../page/goods/detail.vue'], resolve)
}

// 引用主页面模板
let index = function(resolve) {
    require(['../page/index.vue'], resolve)
}
let layer = function(resolve) {
    require(['../page/layer.vue'], resolve)
}
let storage = function(resolve) {
    require(['../page/storage.vue'], resolve)
}

// 配置路由
export default [{
        path: '/',
        component: index,
        name: 'index'
    },
    {
        path: '/layer',
        component: layer,
        name: 'layer'
    },
    {
        path: '/storage',
        component: storage,
        name: 'storage'
    },
    {
        path: '/goods',
        component: frame,
        children: [
            { path: 'detail', component: goodsDetail },
        ]
    }
]