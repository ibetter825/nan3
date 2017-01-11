<template>
    <div class="detail goods">
        <n3-top>
            <li class="back" @click="back" slot="left"><i class="iconfont icon-xiangzuojiantou f18"></i></li>
            <li slot="right">
                <a class="wrap-block" href="">
                    <i class="iconfont icon-others"></i>
                </a>
            </li>
            <li class="title" slot="center">{{title}}</li>
        </n3-top>
        <n3-cushion :prop="cushion" :style="style"></n3-cushion>
        <section class="main" v-touch="{methods: touch}" :style="style">
            <n3-slider :prop="slider"></n3-slider>
            <section class="header pd10-20 rtive">
                <h1 class="mg0 f18">
                    华秧安岳黄柠檬新鲜水果二三级皮薄柠檬切片泡茶榨汁酸味十足4斤
                </h1>
                <div class="share abte">
                    <p><i class="iconfont icon-fenxiang f24"></i></p>
                    <p class="f12">分享</p>
                </div>
                <div class="price">
                    <p class="f24"><i class="f16 orange">￥</i><span class="orange">{{ price }}</span></p>
                    <p class="gray f12"><i>价格</i><span class="through">￥{{ marketPrice }}</span></p>
                </div>
                <ul class="info gray f12">
                    <li class="fl">快递:￥0</li>
                    <li class="fl">月销量:100</li>
                    <li class="fr">遂宁</li>
                    <div class="clear"></div>
                </ul>
            </section>
            <n3-detail-service :prop="service[0]"></n3-detail-service>
            <n3-detail-sales :prop="sales[0]"></n3-detail-sales>
            <div class="divider"></div>
            <n3-detail-action :prop="action[0]"></n3-detail-action>
            <div class="divider"></div>
            <n3-detail-appraise :prop="appraise"></n3-detail-appraise>
            <div class="divider"></div>
            <!--店家-->
            <n3-detail-shop :prop="shop"></n3-detail-shop>
            <div class="divider"></div>
            <!--商品详情-->
            <n3-goods-info :prop="info"></n3-goods-info>
        </section>
        <div class="divider divider5"></div>
        <n3-footer :prop="footer"></n3-footer>
        <n3-detail-action v-if="action[1].show" :prop="action[1]"></n3-detail-action>
        <n3-viewer v-if="viewer.show" :prop="viewer"></n3-viewer>
        <n3-detail-service v-if="service[1].show" :prop="service[1]"></n3-detail-service>
        <n3-detail-sales v-if="sales[1].show" :prop="sales[1]"></n3-detail-sales>
        <n3-ball></n3-ball>
    </div>
</template>
<script>
    module.exports = {
        data() {
            return {
                y: 0,
                title: '圣诞树大户大叔的宿舍的',
                slider: {
                    url: '/static/data/detail_slider.json',
                    param: null,
                    methods: {
                        click: this.click
                    }
                },
                price: 250,
                marketPrice: 1250,
                cushion: {
                    state: 0,
                    tran: ''
                },
                service: [{
                    type: 0, //缩略版
                    methods: {
                        click: this.serviceShow
                    }
                }, {
                    show: false,
                    type: 1 //完整版
                }],
                sales: [{
                    type: 0, //缩略版
                    methods: {
                        click: this.salesShow
                    }
                }, {
                    show: false,
                    type: 1 //完整版
                }],
                info: {
                    id: 10001
                },
                footer: {
                    type: 1,
                    cart: this.cart //添加到购物车的事件
                },
                action: [{
                        type: 0,
                        show: true,
                        click: this.cart
                    },
                    {
                        type: 1,
                        show: false
                    }
                ],
                appraise: {
                    type: 0
                },
                shop: {
                    url: '/static/data/detail_shop.json',
                    param: {
                        id: 's10001'
                    },
                    data: null
                },
                viewer: {
                    show: false,
                    data: []
                }
            }
        },
        computed: {
            style() { //下拉需要的style
                let dis = 'translateY(' + this.y + 'px)'
                return {
                    'transform': dis,
                    '-webkit-transform': dis,
                    '-moz-transform': dis,
                    '-ms-transform': dis,
                    '-o-transform': dis
                }
            },
        },
        methods: {
            back: function () {
                window.history.back()
            },
            click: function () { //点击幻灯图时的事件
                if (this.viewer.data.length === 0)
                    this.viewer.data = this.slider.data
                this.viewer.show = true
            },
            cart: function () {
                this.action[1].show = true
            },
            serviceShow: function () {
                this.service[1].show = true
            },
            salesShow: function () {
                this.sales[1].show = true
            },
            touch: function (e) {
                let _this = this
                let ev = e.evObj
                let t = ev.distanceY * -1
                if (ev.isStart) {
                    return
                } else if (ev.isEnd) {
                    document.body.style.overflowY = 'auto'
                    let lmt = 60
                    let _run = function () {
                        _this.y -= lmt === 60 ? 10 : 5
                        if (_this.y >= lmt) requestAnimationFrame(_run)
                        else {
                            _this.y = lmt
                            if (lmt === 60) {
                                setTimeout(function () {
                                    lmt = 0
                                    _run()
                                }, 1000);
                            }
                        }
                    }
                    if (t > 60) {
                        _run()
                        _this.cushion.state = 2
                    } else {
                        lmt = 0
                        _run()
                    }
                } else {
                    if (ev.type === 'down') {
                        if (_this.$util.scrollTop() <= 0) {
                            document.body.style.overflowY = 'hidden'
                            _this.y = t <= 0 ? 0 : t
                            if (t > 60) _this.cushion.state = 1
                        }
                    } else
                        return
                }
            }
        },
        watch: {
            '$route' (to, from) {
                console.log(to.query.id+':')
                //当路由发生变化时，获取参数重新加载数据
            }
        },
        created: function () {
            console.log(this.$route.query.id)
        }
    }
</script>