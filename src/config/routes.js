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


let category = function(resolve) {
    require(['../page/category.vue'], resolve)
}

let search = function(resolve) {
    require(['../page/search.vue'], resolve)
}

// 引入子路由
let frame = function(resolve) {
    require(['../frame/subroute.vue'], resolve) //按需异步加载的配置方式
}

// 引入子页面
let goodsDetail = function(resolve) {
    require(['../page/detail/goods/detail.vue'], resolve)
}

let appraise = function(resolve) {
    require(['../page/detail/appraise.vue'], resolve)
}

let userZone = function(resolve) {
    require(['../page/user/zone.vue'], resolve)
}

let userCart = function(resolve) {
    require(['../page/user/cart.vue'], resolve)
}

let orderConfirm = function(resolve) {
    require(['../page/order/confirm.vue'], resolve)
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
        path: '/search',
        component: search,
        name: 'search'
    },
    {
        path: '/layer', //测试用，到时候删除
        component: layer,
        name: 'layer'
    },
    {
        path: '/storage', //测试使用，到时候删除
        component: storage,
        name: 'storage'
    },
    {
        path: '/appraise',
        component: appraise,
        name: 'appraise'
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
            { path: 'cart', component: userCart }
        ]
    },
    {
        path: '/order',
        component: frame,
        children: [
            { path: 'confirm', component: orderConfirm}
        ]
    }
]