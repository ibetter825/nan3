export default {
    //n3組件
    'n3-top': function(resolve) {
        require(['./n3/top.vue'], resolve) //按需异步加载的配置方式
    },
    'n3-totop': function(resolve) {
        require(['./n3/totop.vue'], resolve) //按需异步加载的配置方式
    },
    'n3-refresh': function(resolve) {
        require(['./n3/refresh.vue'], resolve)
    },
    'n3-advert': function(resolve) {
        require(['./n3/advert.vue'], resolve)
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
        require(['./n3/widget/bulk.vue'], resolve)
    },
    'n3-widget-card': function(resolve) {
        require(['./n3/widget/card.vue'], resolve)
    },
    'n3-widget-list': function(resolve) {
        require(['./n3/widget/list.vue'], resolve)
    },
    'n3-widget-tight': function(resolve) {
        require(['./n3/widget/tight.vue'], resolve)
    },
    'n3-sect': function(resolve) {
        require(['./n3/sect/sect.vue'], resolve)
    },
    'n3-sect-list': function(resolve) {
        require(['./n3/sect/list.vue'], resolve)
    },
    'n3-goods-info': function(resolve) {
        require(['./n3/detail/goods/info.vue'], resolve)
    },
    'n3-ball': function(resolve) {
        require(['./n3/ball.vue'], resolve)
    },
    'n3-detail-action': function(resolve) {
        require(['./n3/detail/action.vue'], resolve)
    },
    'n3-detail-service': function(resolve) {
        require(['./n3/detail/service.vue'], resolve)
    },
    'n3-detail-sales': function(resolve) {
        require(['./n3/detail/sales.vue'], resolve)
    },
    'n3-detail-appraise': function(resolve){
        require(['./n3/detail/appraise.vue'], resolve)
    },
    //layer-mobile組件
    'layer-mobile': function(resolve) {
        require(['./layer/mobile/layer.vue'], resolve)
    },
    'layer-mobile-info': function(resolve) {
        require(['./layer/mobile/info.vue'], resolve)
    },
    'layer-mobile-loading': function(resolve) {
        require(['./layer/mobile/loading.vue'], resolve)
    }
}