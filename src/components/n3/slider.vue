<template>
    <section class="slider rtive">
        <ul class="slider-cnt" :style="style" v-touch="{methods: touch}">
            <li v-for="(item, index) in data">
                <router-link v-if="item.link !== undefined" :to="item.link"><img :src="item.img"></router-link>
                <img v-if="item.link === undefined" @click="click(index)" :src="item.img">
            </li>
            <div class="clear"></div>
        </ul>
        <ul class="slider-indicators">
            <li v-for="(item,index) in data.length" :class="[index === selected ? 'selected' : 0]"></li>
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
                dis: 0
            }
        },
        computed: {
            style() {
                let dis = 'translateX(' + this.dis * -1 + '%)'
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
            start: function () {
                if (this.timer !== false) clearInterval(this.timer)
                this.timer = setInterval(this.slide, 5000)
            },
            click: function (index) {
                if (this.prop.methods && this.prop.methods.click)
                    this.prop.methods.click(index)
            },
            slide: function (d) {
                let _this = this
                let count = 0
                let lth = _this.data.length
                if (_this.selected === lth - 1) {
                    _this.dis = 0
                    _this.selected = 0
                } else {
                    let _run = function () {
                        count++
                        _this.dis = _this.selected * 20 + count
                        if (count < 20)
                            requestAnimationFrame(_run)
                        else {
                            _this.selected++

                                if (_this.selected === lth - 1)
                                    _this.start()
                        }
                    }
                    _run()
                }
            },
            touch: function (e) {
                let _this = this
                let ev = e.evObj
                if (ev.isStart) {
                    clearInterval(_this.timer)
                    return
                } else if (ev.isMoving) {
                    _this.dis = _this.selected * 20 + ev.distanceX / 20
                } else {
                    let flg = -1
                    if (Math.abs(ev.distanceX / 20) > 5) {
                        if (ev.type === 'left' && _this.selected !== 4) {
                            _this.selected++
                                flg = 1
                        } else if (ev.type === 'right' && _this.selected !== 0)
                            _this.selected--
                    } else
                    if (ev.type === 'left') flg = -1

                    let _run = function () {
                        if (flg === 1) {
                            _this.dis++
                                if (_this.dis < _this.selected * 20)
                                    requestAnimationFrame(_run)
                            else
                                _this.dis = _this.selected * 20
                        } else {
                            _this.dis--
                                if (_this.dis > _this.selected * 20)
                                    requestAnimationFrame(_run)
                            else
                                _this.dis = _this.selected * 20
                        }
                    }
                    _run()
                    _this.start()
                }
            }
        },
        mounted: function () {
            this.start()
        },
        created: function () {
            let _this = this
            let url = _this.prop['url']
            if (url) { //请求后台
                _this.$http.get(url).then(function (response) {
                    _this.data = response.body
                    _this.prop.data = response.body
                }, function (response) {
                    console.error(response.body)
                })
            } else
                _this.data = _this.prop['data']
        }
    }
</script>