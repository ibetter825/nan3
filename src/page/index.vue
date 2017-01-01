<template>
    <div class="index">
        <n3-top></n3-top>
        <n3-refresh :refresh="refresh" :style="style"></n3-refresh>
        <section  :class="['main', clz.tran]" v-move.self="{methods: move}" :style="style">
            <n3-slider :slider="slider"></n3-slider>
            <n3-nav></n3-nav>
        </section>
    </div>
</template>

<script>
    module.exports = {
        data() {
            return {
                y: 0,
                clz: {
                    tran: ''
                },
                refresh: {
                    state: 0
                }
            }
        },
        computed: {
            style() { //下拉需要的style
                let dis = 'translateY(' + this.y + 'px)'
                return {
                    'transform': dis,
                    '-webkit-transform': dis,
                    '-moz-transform': dis,
                    '-ms-transform': dis,
                    '-o-transform': dis
                }
            },
            slider() { //传递给slider组件的数据，如果url === null, 则直接填充数据data，反之则通过url地址以及param去请求后台获取
                return {
                    url: null,
                    param: null,
                    data: [{
                        url: '',
                        img: '/static/images/slider.gif'
                    }, {
                        url: '',
                        img: '/static/images/slider.gif'
                    }, {
                        url: '',
                        img: '/static/images/slider.gif'
                    }, {
                        url: '',
                        img: '/static/images/slider.gif'
                    }, {
                        url: '',
                        img: '/static/images/slider.gif'
                    }]
                }
            }
        },
        methods: {
            down: function() {
                //下拉刷新
                alert('下拉刷新')
            },
            move: function(e) {
                this.refresh.state = 0
                let eo = e.evObj
                if (eo.moving) {
                    this.clz.tran = ''
                    let t = eo.distanceY * -1
                    this.y = t <= 0 ? 0 : t
                    if (t > 60) this.refresh.state = 1
                } else {
                    this.clz.tran = 'tran05'
                    this.y = 0
                    this.refresh.state = 2
                }
            }
        }
    }
</script>