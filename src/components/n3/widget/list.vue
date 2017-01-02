<template>
        <section class="widget widget-list">
            <header>
                <h3 class="mg0 f14 pd10 rtive">
                    <i class="iconfont icon-jianguo"></i>
                    <span>{{ prop.title }}</span>
                    <a class="widget-more f12" :href="prop.more">更多></a>
                </h3>
            </header>
            <ul>
                <li class="widget-cnt" v-for="item in data">
                    <section>
                        <div class="widget-list-img">
                            <router-link :to="item.url"><img :src="item.img" :alt="item.name"></router-link>
                        </div>
                        <div></div>
                        <div class="widget-list-info rtive">
                            <h3>
                                <router-link :to="item.url" class="black">{{ item.name }}<em class="gray f12"> / {{ item.weight }}</em></router-link><span class="fr red f16">￥{{ item.price }}</span>
                            </h3>
                            <p class="widget-seller">
                                <router-link :to="item.from.link"><span class="red f12">{{ item.from.name }}</span></router-link>
                            </p>
                            <p class="widget-desc f12 gray">{{ item.desc }}</p>
                            <span class="widget-cart widget-btn row block abte" v-tap.stop="{methods: cart, id: 10001}">
                                <i class="iconfont icon-gouwuchetianjia f24 red"></i>
                            </span>
                        </div>
                    </section>
                </li>
                <div class="clear"></div>
            </ul>
        </section>
    </template>

<script>
    module.exports = {
        props: ['prop'],
        data() {
            return {
                data: []
            }
        },
        methods: {
            cart: function(p) { //添加到购物车，做一个动画效果，飞到购物车内
                let cur = p.event.currentTarget
                this.$store.dispatch('ball_init', {
                    current: cur,
                    target: '#cart'
                })

                // let target = this.$util.offset('#cart')
                // let ptop = target.offsetParent ? target.offsetParent.offsetTop : 0
                // let top = ptop + target.offsetTop
                // let left = target.offsetLeft + target.offsetWidth / 2
                // this.$store.dispatch('ball_end', {
                //     left: left + 'px',
                //     top: top + 'px'
                // })
            }
        },
        created: function() {
            let url = this.prop['url']
            if (url) { //请求后台
                console.log('先从本地储存空间取数据，如果没有再从后台请求数据，成功后再放入本地')
            } else
                this.data = this.prop['data']
        }
    }
</script>