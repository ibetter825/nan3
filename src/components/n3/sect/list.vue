<template>
    <section class="sect sect-list">
        <p v-if="!prop.title.hide" class="sect-title pd10"><i :class="['iconfont', prop.title.icon]"></i><span>&nbsp;{{prop.title.text}}</span></p>
        <ul class="sect-cnt">
            <li v-for="item in data">
                <router-link :to="item.link">
                    <span class="sect-cnt-icon">
                            <i :class="['iconfont', item.icon]"></i>
                        </span>
                    <span class="sect-cnt-name">{{item.name}}</span>
                    <span class="sect-cnt-more fr">
                            <i class="iconfont icon-xiangyoujiantou"></i>
                        </span>
                </router-link>
            </li>
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