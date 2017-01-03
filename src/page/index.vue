<template>
    <div class="index">
        <n3-top></n3-top>
        <n3-refresh :refresh="refresh" :style="style"></n3-refresh>
        <section :class="['main', clz.tran]" v-move.self="{methods: move}" :style="style">
            <n3-slider :prop="slider"></n3-slider>
            <n3-nav :prop="nav"></n3-nav>
            <div class="divider"></div>
            <n3-advert :prop="advert[0]"></n3-advert>
            <div class="divider"></div>
            <n3-widget-list :prop="widgetList[0]"></n3-widget-list>
            <div class="divider"></div>
            <n3-widget-tight></n3-widget-tight>
        </section>
        <div class="divider"></div>
        <div class="divider divider5"></div>
        <n3-footer></n3-footer>
        <n3-ball></n3-ball>
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
                    state: 0,
                    tran: ''
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
            },
            nav() {
                return {
                    url: null,
                    param: null,
                    data: [{
                        url: '#',
                        clz: 'green',
                        icon: 'icon-nongchanpin',
                        text: '农副产品'
                    }, {
                        url: '#',
                        clz: 'red',
                        icon: 'icon-nongchanpincaigou',
                        text: '采购中心'
                    }, {
                        url: '#',
                        clz: 'purple',
                        icon: 'icon-fuwu',
                        text: '服务中心'
                    }, {
                        url: '#',
                        clz: 'orange',
                        icon: 'icon-riyongp',
                        text: '杂货市场'
                    }, {}, {
                        url: '#',
                        clz: 'blue',
                        icon: 'icon-caipu',
                        text: '家常菜谱'
                    }, {
                        url: '#',
                        clz: 'cyan',
                        icon: 'icon-shichang',
                        text: '集市入口'
                    }, {}]
                }
            },
            advert() {
                return [{
                    url: '#',
                    img: '/static/images/slider.gif',
                    text: '卖水果了'
                }]
            },
            widgetList() {
                return [{
                    title: '美味坚果',
                    more: '#',
                    url: null,
                    param: null,
                    data: [{
                        img: '/static/images/rmd.jpg',
                        url: {
                            path: 'goods/detail',
                            query: {
                                id: 10001
                            }
                        },
                        name: '哇哈哈',
                        weight: '500g',
                        price: 200,
                        from: {
                            name: '自营',
                            link: {
                                path: '/goods/detail'
                            }
                        },
                        desc: '描述或的合计为降低地价'
                    }, {
                        img: '/static/images/rmd.jpg',
                        url: {
                            path: 'goods/detail',
                            query: {
                                id: 10001
                            }
                        },
                        name: '哇哈哈2',
                        weight: '500g',
                        price: 240,
                        from: {
                            name: '伤不起水果店',
                            link: {
                                path: '/goods/detail'
                            }
                        },
                        desc: '描述或的合计为降低地价'
                    }]
                }]
            }
        },
        methods: {
            down: function() {
                //下拉刷新
                alert('下拉刷新')
            },
            move: function(e) {
                let _this = this
                let eo = e.evObj
                let t = eo.distanceY * -1
                if (t < 0) return false //向上滑动不做操作
                if (_this.$util.scrollTop() <= 0)
                    document.body.style.overflowY = 'hidden'
                _this.refresh.state = 0
                if (eo.moving) {
                    _this.clz.tran = ''
                    _this.refresh.tran = ''
                    _this.y = t <= 0 ? 0 : t
                    if (t > 60) this.refresh.state = 1
                } else {
                    _this.clz.tran = 'tran05'
                    _this.y = 60 //等刷新完成以后设置为0
                    _this.refresh.state = 2
                    _this.refresh.tran = 'tran05'
                        //if (t > 60) window.location.reload()
                    setTimeout(function() {
                        _this.y = 0
                        setTimeout(function() {
                            document.body.style.overflowY = 'auto'
                        }, 500);
                    }, 1000);
                }
            }
        }
    }
</script>