<template>
    <section class="slider rtive">
            <ul :class="['slider-cnt', clz.tran]" :style="style">
                <li v-for="item in data">
                    <router-link :to="item.link"><img :src="item.img"></router-link>
                </li>
                <div class="clear"></div>
            </ul>
            <ul class="slider-indicators">
                <li v-for="(item,index) in 5" :class="[index === selected * -1 ? 'selected' : 0]"></li>
            </ul>
        </section>
</template>

<script>
    //初始化完成以后需要开启定时器，动态播放轮转图
    //v-left.prevent.stop="{methods: left}" v-right.prevent.stop="{methods: right}" v-move.prevent.stop="{methods: move}"
    module.exports = {
        props: ['prop'],
        data() {
            return {
                data: [],
                timer: false,
                selected: 0,
                clz: {
                    tran: 'tran1'
                }
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
            start: function() {
                if (this.timer !== false) clearInterval(this.timer)
                this.timer = setInterval(this.slide, 5000)
            },
            slide: function(d) {
                let x = -1
                d === undefined ? '' : x = d
                let _this = this
                let slt = _this.selected
                _this.selected += x
                _this.clz.tran = 'tran1'
                if (slt <= -4) {
                    if (d === undefined) {
                        _this.selected = 0
                            //clearInterval(_this.timer)
                        _this.clz.tran = ''
                        _this.start()
                    } else {
                        if (x === -1)
                            _this.selected = -4
                        _this.start()
                    }
                } else if (slt >= 0) {
                    if (d !== undefined) {
                        if (x === 1)
                            _this.selected = 0
                        _this.start()
                    }
                }
            },
            left: function() {
                this.slide(-1)
            },
            right: function() {
                this.slide(1)
            },
            move: function(e) {
                //上级存在move方法，在本级中会覆盖器方法，调用父级传递过来的方法就可以了
                let fn = this.prop.move
                if (fn) fn(e)
            }
        },
        watch: {

        },
        mounted: function() {
            console.log('ASSSSSSS')
            this.start()
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