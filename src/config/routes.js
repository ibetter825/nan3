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

// 引入子路由
let frame = function(resolve) {
        require(['../frame/subroute.vue'], resolve) //按需异步加载的配置方式
    }

let category = function(resolve){
    require(['../page/category.vue'], resolve)
}

// 引入子页面
let goodsDetail = function(resolve) {
    require(['../page/goods/detail.vue'], resolve)
}

let userZone = function(resolve){
    require(['../page/user/zone.vue'], resolve)
}

// 配置路由
export default [{
        path: '/',
        component: index,
        name: 'index'
    },
    {
        path: '/category',
        component: category,
        name: 'category'
    },
    {
        path: '/layer',//测试用，到时候删除
        component: layer,
        name: 'layer'
    },
    {
        path: '/storage',//测试使用，到时候删除
        component: storage,
        name: 'storage'
    },
    {
        path: '/goods',
        component: frame,
        children: [
            { path: 'detail', component: goodsDetail },
        ]
    },
    {
        path: '/user',
        component: frame,
        children: [
            { path: 'zone', component: userZone },
        ]
    }
]