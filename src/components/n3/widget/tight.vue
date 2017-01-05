<template>
        <section class="widget widget-tight">
            <header>
                <h3 class="mg0 f14 pd10 relative">
                    <i class="iconfont icon-huo"></i>
                    <span>{{ prop.title }}</span>
                    <a class="widget-more f12" :href="prop.more">更多></a>
                </h3>
            </header>
            <ul class="rtive">
                <li class="widget-cnt" v-for="row in data">
                    <div v-for="col in row" :class="'widget-cnt-'+col.cols">
                        <router-link :to="'#'" class="wrap-block" v-lazy="col.img"><img></router-link>
                    </div>
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
        components: {
            
        },
        created () {
            console.log('tight:'+this.prop)
            let _this = this
            let url = _this.prop['url']
            if (url) { //请求后台
                _this.loader.show = true
                console.log('先从本地储存空间取数据，如果没有再从后台请求数据，成功后再放入本地')
                _this.$http.get(url).then(function(response){
                    _this.data = response.body
                    _this.loader.show = false
                }, function(response){
                    console.error(response.body)
                })
            } else {
                _this.data = _this.prop['data']
            }
        }
    }
</script>