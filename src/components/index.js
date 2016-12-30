export default {
    'n3-ad': function(resolve) {
        require(['./n3/ad.vue'], resolve) //按需异步加载的配置方式
    },
    'n3-footer': function(resolve) {
        require(['./n3/footer.vue'], resolve)
    },
    'n3-nav': function(resolve) {
        require(['./n3/nav.vue'], resolve)
    },
    'n3-slider': function(resolve) {
        require(['./n3/slider.vue'], resolve)
    },
    'n3-track': function(resolve) {
        require(['./n3/track.vue'], resolve)
    },
    'n3-viewer': function(resolve) {
        require(['./n3/viewer.vue'], resolve)
    },
    'n3-widget-bulk': function(resolve) {
        require(['./n3/widgetBulk.vue'], resolve)
    },
    'n3-widget-card': function(resolve) {
        require(['./n3/widgetCard.vue'], resolve)
    },
    'n3-widget-list': function(resolve) {
        require(['./n3/widgetList.vue'], resolve)
    },
    'n3-goods-info': function(resolve) {
        require(['./n3/goods/info.vue'], resolve)
    }
}