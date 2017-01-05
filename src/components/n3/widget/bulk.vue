<template>
    <section :class="['widget widget-bulk', prop.type === 2 ? 'widget-bulk-two' : '']">
        <header>
            <h3 class="mg0 f14 pd10 relative">
                <i class="iconfont icon-shucai"></i>
                <span>{{ prop.title }}</span>
                <a class="widget-more f12" :href="prop.more">更多></a>
            </h3>
        </header>
        <ul class="rtive">
            <li v-for="row in data">
                <div v-for="col in row" class="widget-cnt">
                    <div>
                        <router-link class="wrap-block relative" :to="col.link" v-lazy="col.img">
                            <img>
                        </router-link>
                        <p class="widget-bulk-info relative">
                            <span class="f12">{{col.name}}/{{col.weight}}</span>
                            <span>
                                <em class="widget-price f16 red">￥{{col.price}}</em>
                                <em class="widget-price f12 gray">￥{{col.marketPrice}}</em>
                            </span>
                            <span class="widget-cart" v-tap.prevent.stop="{methods: cart, id: 10001}">
                                <i class="iconfont icon-gouwuchetianjia f20 white"></i>
                            </span>
                        </p>
                    </div>
                </div>
                <aside class="clear"></aside>
            </li>
            <div class="clear"></div>
            <layer-mobile-loading v-if="loader.show" :prop="loader"></layer-mobile-loading>
        </ul>
    </section>
</template>
<script>
    module.exports = {
        props: ['prop'],
        data() {
            return {
                data: [],
                loader: {
                    show: false
                }
            }
        },
        methods: {
            cart: function(p) { //添加到购物车，做一个动画效果，飞到购物车内
                let cur = p.event.currentTarget
                this.$store.dispatch('ball_init', {
                    current: cur,
                    target: '#cart'
                })
            }
        },
        created() {
            console.log('tight:' + this.prop)
            let _this = this
            let url = _this.prop['url']
            if (url) { //请求后台
                _this.loader.show = true
                console.log('先从本地储存空间取数据，如果没有再从后台请求数据，成功后再放入本地')
                _this.$http.get(url).then(function (response) {
                    _this.data = response.body
                    _this.loader.show = false
                }, function (response) {
                    console.error(response.body)
                })
            } else {
                _this.data = _this.prop['data']
            }
        }
    }
</script>