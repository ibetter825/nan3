<template>
    <section :class="['sect', clz]">
        <p class="sect-title pd10"><i :class="['iconfont', prop.title.icon]"></i><span>&nbsp;{{prop.title.text}}</span>
            <router-link class="fr f12" :to="prop.title.more.link">{{prop.title.more.text}}&gt;</router-link>
        </p>
        <ul class="sect-cnt f12">
            <li v-for="item in data">
                <router-link :to="item.link">
                    <p class="sect-cnt-icon">
                        <i :class="item.icon"></i>
                    </p>
                    <p class="sect-cnt-name">{{item.name}}</p>
                </router-link>
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
        computed: {
            clz() {
                let c = ''
                if (this.prop.type === 4)
                    c = 'sect-4'
                return c
            }
        },
        methods: {

        },
        created: function() {
            let _this = this
            let url = _this.prop['url']
            if (url) { //请求后台
                _this.$http.get(url).then(function(response){
                    _this.data = response.body
                }, function(response){
                    console.error(response.body)
                })
            } else
                _this.data = _this.prop['data']
        }
    }
</script>