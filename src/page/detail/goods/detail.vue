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
        <section class="main">
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
        </section>
        <div class="divider divider5"></div>
        <n3-footer :prop="footer"></n3-footer>
        <n3-detail-action v-if="action[1].show" :prop="action[1]"></n3-detail-action>
        <n3-viewer v-if="viewer.show" :prop="viewer"></n3-viewer>
        <n3-detail-service v-if="service[1].show" :prop="service[1]"></n3-detail-service>
        <n3-detail-sales v-if="sales[1].show" :prop="sales[1]"></n3-detail-sales>
    </div>
</template>
<script>
    module.exports = {
        data() {
            return {
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
                viewer: {
                    show: false,
                    data: []
                }
            }
        },
        computed: {

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
            }
        },
        created: function () {
            console.log(this.$route.query.id)
        }
    }
</script>