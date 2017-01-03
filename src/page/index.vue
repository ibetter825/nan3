<template>
    <div class="index">
        <n3-top></n3-top>
        <n3-refresh :refresh="refresh" :style="style"></n3-refresh>
        <section class="main">
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
                refresh: {
                    state: 0
                }
            }
        },
        computed: {
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
                this.refresh.state = 0
                let eo = e.evObj
                let t = eo.distanceY * -1
                if (eo.moving) {
                    this.clz.tran = ''
                    this.y = t <= 0 ? 0 : t
                    if (t > 60) this.refresh.state = 1
                } else {
                    this.clz.tran = 'tran05'
                    this.y = 0
                    this.refresh.state = 2
                    if (t > 60) window.location.reload()
                }
            }
        }
    }
</script>