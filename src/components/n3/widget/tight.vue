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
                        <router-link :to="col.link" class="wrap-block" v-lazy="col.img"><img></router-link>
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
        methods: {
            load: function(lazy){
                let _this = this
                let url = _this.prop['url']
                if (url) { //请求后台
                    _this.$http.get(url).then(function (response) {
                        _this.data = response.body
                        if(lazy) _this.$el.handler.success()
                    }, function (response) {
                        if(lazy) _this.$el.handler.error()
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