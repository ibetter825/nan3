<template>
    <div class="index">
        <n3-top>
            <li class="logo f16" slot="left">SDOG</li>
            <li slot="right">
                <a class="wrap-block" href="">
                    <i class="iconfont icon-36"></i>
                </a>
            </li>
            <li class="search-container rtive" slot="center">
                <p class="f12">
                    <i class="iconfont icon-sousuo f12"></i>
                    <span>搜索</span>
                </p>
            </li>
        </n3-top>
        <n3-refresh :refresh="refresh" :style="style"></n3-refresh>
        <section :class="['main', clz.tran]" v-move="{methods: move}" :style="style">
            <n3-slider :prop="slider"></n3-slider>
            <n3-nav :prop="nav"></n3-nav>
            <div class="divider"></div>
            <n3-advert :prop="advert[0]"></n3-advert>
            <div class="divider"></div>
            <n3-widget-list :prop="widget.list[0]"></n3-widget-list>
            <div class="divider"></div>
            <n3-widget-tight :prop="widget.tight[0]"></n3-widget-tight>
            <div class="divider"></div>
            <n3-widget-bulk :prop="widget.bulk[0]"></n3-widget-bulk>
            <div class="divider"></div>
            <n3-widget-bulk :prop="widget.bulk[1]"></n3-widget-bulk>
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
                    move: this.move,
                    url: '/static/data/index_slider.json',
                    param: null
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
            widget() {
                return {
                    list: [{
                        title: '美味坚果',
                        more: '#',
                        url: '/static/data/widget_list_0.json',
                        param: null
                    }],
                    tight: [{
                        title: '热门推荐',
                        more: '#',
                        url: '/static/data/widget_tight_0.json',
                        param: null
                    }],
                    bulk: [{
                            title: '热门商品',
                            more: '#',
                            url: '/static/data/widget_bulk_0.json',
                            param: null
                        },
                        {
                            type: 2,
                            title: '热门商品2',
                            more: '#',
                            url: '/static/data/widget_bulk_1.json',
                            param: null
                        }
                    ]
                }
            }
        },
        methods: {
            down: function () {
                //下拉刷新
                alert('下拉刷新')
            },
            move: function (e) { //由于子组件slider也有touch事件，需要将move方法传递过去，让其执行
                let _this = this
                let eo = e.evObj
                let t = eo.distanceY * -1
                if (t < 0) return false //向上滑动不做操作

                _this.refresh.state = 0
                if (eo.moving) {
                    if (_this.$util.scrollTop() <= 0)
                        document.body.style.overflowY = 'hidden'
                    _this.clz.tran = ''
                    _this.refresh.tran = ''
                    _this.y = t <= 0 ? 0 : t
                    if (t > 60) this.refresh.state = 1
                } else {
                    document.body.style.overflowY = 'auto'
                    _this.clz.tran = 'tran05'
                    if (t > 60) {
                        _this.y = 60 //等刷新完成以后设置为0
                        _this.refresh.state = 2
                        _this.refresh.tran = 'tran05'
                        setTimeout(function () {
                            _this.y = 0
                        }, 1000);
                    } else
                        _this.y = 0

                }
            }
        }
    }
</script>