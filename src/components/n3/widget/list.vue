<template>
        <section class="widget widget-list">
            <header>
                <h3 class="mg0 f14 pd10 rtive">
                    <i class="iconfont icon-jianguo"></i>
                    <span>{{ prop.title }}</span>
                    <a class="widget-more f12" :href="prop.more">更多></a>
                </h3>
            </header>
            <ul class="rtive">
                <li class="widget-cnt" v-for="item in data">
                    <section>
                        <div class="widget-list-img" v-lazy="item.img">
                            <router-link :to="item.link"><img></router-link>
                        </div>
                        <div></div>
                        <div class="widget-list-info rtive">
                            <h3>
                                <router-link :to="item.link" class="black">{{ item.name }}<em class="gray f12"> / {{ item.weight }}</em></router-link><span class="fr red f16">￥{{ item.price }}</span>
                            </h3>
                            <p class="widget-seller">
                                <router-link :to="item.from.link"><span class="red f12">{{ item.from.name }}</span></router-link>
                            </p>
                            <p class="widget-desc f12 gray">{{ item.desc }}</p>
                            <span class="widget-cart widget-btn row block abte" v-tap.prevent.stop="{methods: cart, id: 10001}">
                                <i class="iconfont icon-gouwuchetianjia f24 red"></i>
                            </span>
                        </div>
                    </section>
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
                loader: {show: false}
            }
        },
        methods: {
            cart: function(p) { //添加到购物车，做一个动画效果，飞到购物车内
                let cur = p.event.currentTarget
                this.$store.dispatch('ball_init', {
                    current: cur,
                    target: '#cart'
                })
            },
            load: function(lazy){
                let _this = this
                if(_this.loader) _this.loader.show = true
                let url = _this.prop['url']
                if (url) { //请求后台
                    _this.$http.get(url).then(function (response) {
                        _this.data = response.body
                        if(lazy) _this.$el.handler.success()
                        if(_this.loader) _this.loader.show = false
                    }, function (response) {
                        if(lazy) _this.$el.handler.error()
                        if(_this.loader) _this.loader.show = false
                        console.error(response.body)
                    })
                } else
                    _this.data = _this.prop['data']
            }
        },
        watch: {
            'prop.lazy': function () {
                this.load(true)
            }
        },
        created: function () {
            if (!this.prop.lazy) this.load()
        }
    }
</script>