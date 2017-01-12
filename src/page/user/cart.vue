<template>
    <div class="cart">
        <n3-top>
            <li class="back" @click="back" slot="left"><i class="iconfont icon-xiangzuojiantou f18"></i></li>
            <li slot="right">
                <a class="wrap-block" href="">
                    <i class="iconfont icon-xiaoxizhongxin"></i>
                </a>
            </li>
            <li class="title" slot="center">购物车</li>
        </n3-top>
        <section class="main">
            <ul class="cart-list f12 gray">
                <li class="cart-item pd5-10" v-for="shop in data">
                    <ul class="cart-item-header">
                        <li class="left fl">
                            <span><i class="iconfont icon-square"></i></span>
                        </li>
                        <li class="right fr">编辑</li>
                        <li class="center">
                            <i class="iconfont icon-shichang f14 orange"></i>
                            <span class="f14"> {{ shop.name }}</span>
                            <i class="iconfont icon-xiangyoujiantou f12"></i>
                        </li>
                    </ul>
                    <ul class="cart-item-cnt clear">
                        <li v-for="item in shop.list">
                            <div class="left fl">
                                <span><i class="iconfont icon-square"></i></span>
                            </div>
                            <div class="right fr"></div>
                            <div class="center">
                                <div class="cart-item-img">
                                    <img :src="item.img">
                                </div>
                                <div class="cart-item-info relative">
                                    <ul class="i-edit bg-white absolute" v-if="item.editable || shop.editable">
                                        <li class="fl"></li>
                                        <li class="fr bg-red white">
                                            <i class="iconfont icon-lajixiang"></i>
                                        </li>
                                        <li>
                                            <p class="i-edit-count">
                                                <span class="fl block"><i class="iconfont icon-jianhao light-gray"></i></span>
                                                <span class="fr block"><i class="iconfont icon-jiahao1 light-gray"></i></span>
                                                <span class="block"><i class="buy-num">2</i></span>
                                            </p>
                                            <p class="i-edit-info relative">
                                                <span>{{ item.info }}</span>
                                                <span class="fr absolute"><i class="iconfont icon-xiangxiajiantou"></i></span>
                                            </p>
                                        </li>
                                    </ul>
                                    <div class="i-info">
                                        <p>{{ item.name }}</p>
                                        <p class="light-gray">购买类别</p>
                                        <p>
                                            <span class="f10 orange">￥</span>
                                            <span class="f16 orange">{{ item.price }}</span>
                                            <span class="fr f14">× {{ item.num }}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="divider divider2 bg-white"></div>
            <div class="divider divider5 bg-white"></div>
            <div class="divider divider5 bg-white"></div>
            <ul class="settle fixed bg-white">
                <li class="fl f16">
                    <span><i class="iconfont icon-square"></i></span>
                    <span>全选</span>
                </li>
                <li class="fr bg-red white f16">
                    结 算
                </li>
                <li>
                    <p class="settle-p-60"><span class="f12">合计: </span><span class="orange f12">￥</span><span class="orange f24">200</span></p>
                    <p class="hide">ss</p>
                </li>
            </ul>
        </section>
        <n3-footer :prop="footer"></n3-footer>
    </div>
</template>
<script>
    //跳动的小球，用于添加购物车的动画效果
    module.exports = {
        data() {
            return {
                data: [],
                footer: {
                    selected: 'cart'
                }
            }
        },
        methods: {
            back: function () {
                this.$router.go(-1)
            }
        },
        created() {
            let _this = this
            _this.$layer({
                type: 2,
                shade: false
            })
            //组件创建完成以后，查询当前登录用户的购物车记录
            //当前登录用户的id存在sessionStorage中
            let user = _this.$session('CURRENT_USER')
            if (user) {
                user = JSON.parse(user)
                let id = user.id
                //请求后台数据
                _this.$http.post('/static/data/cart.json').then(function (response) {
                    _this.data = response.body
                }, function (response) {
                    console.error(response.body)
                })
            } else {
                //跳转到登录页面
                //this.$router.push({ path: '/user/zone' })
            }
            _this.$http.get('/static/data/cart.json').then(function (response) {
                _this.data = response.body
                setTimeout(function () {
                    _this.$layer(false)
                }, 1000)
            }, function (response) {
                console.error(response.body)
            })

        }
    }
</script>