<template>
    <transition name="fade">
        <div class="shade shade-darkest">
            <section class="viewer" @click="click">
                <ul class="viewer-cnt tran05" v-left.prevent.stop="{methods: left}" v-right.prevent.stop="{methods: right}" :style="style">
                    <li v-for="item in data"><img :src="item.img"></li>
                    <div class="clear"></div>
                </ul>
                <ul class="viewer-indicators">
                    <li v-for="(item,index) in 5" :class="[index === selected * -1 ? 'selected' : 0]"></li>
                </ul>
            </section>
        </div>
    </transition>
</template>

<script>
    module.exports = {
        props: ['prop'],
        data() {
            return {
                data: [],
                selected: 0
            }
        },
        computed: {
            style() {
                let dis = 'translateX(' + (this.selected * 20) + '%)'
                return {
                    'transform': dis,
                    '-webkit-transform': dis,
                    '-moz-transform': dis,
                    '-ms-transform': dis,
                    '-o-transform': dis
                }
            }
        },
        methods: {
            slide: function(d) {
                let _this = this
                let slt = _this.selected
                _this.selected += d
                if (slt <= -4) {
                    if (d === -1)
                        _this.selected = -4
                } else if (slt >= 0) {
                    if (d === 1)
                        _this.selected = 0
                }
            },
            click: function() {
                this.prop.show = false
            },
            left: function() {
                this.slide(-1)
            },
            right: function() {
                this.slide(1)
            },
        },
        watch: {

        },
        created() {
            let _this = this
            let url = _this.prop['url']
            if (url) { //请求后台
                _this.$http.get(url).then(function(response) {
                    _this.data = response.body
                }, function(response) {
                    console.error(response.body)
                })
            } else
                _this.data = _this.prop['data']
        }
    }
</script>