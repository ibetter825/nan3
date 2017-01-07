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
                    <p class="f24"><i class="f16 orange">￥</i><span class="orange">{{price}}</span></p>
                    <p class="gray f12"><i>价格</i><span class="through">￥{{marketPrice}}</span></p>
                </div>
                <ul class="info gray f12">
                    <li class="fl">快递:￥0</li>
                    <li class="fl">月销量:100</li>
                    <li class="fr">遂宁</li>
                    <div class="clear"></div>
                </ul>
            </section>
        </section>
        <div class="divider divider5"></div>
        <n3-footer :prop="footer"></n3-footer>
    </div>
</template>
<script>
    module.exports = {
        data() {
            return {
                title: '圣诞树大户大叔的宿舍的',
                price: 250,
                marketPrice: 1250,
                footer: {
                    type: 1
                }
            }
        },
        computed: {
            slider() { //传递给slider组件的数据，如果url === null, 则直接填充数据data，反之则通过url地址以及param去请求后台获取
                return {
                    url: '/static/data/detail_slider.json',
                    param: null
                }
            }
        },
        methods: {
            back: function() {
                window.history.back()
            }
        },
        created: function() {
            console.log(this.$route.query.id)
        }
    }
</script>