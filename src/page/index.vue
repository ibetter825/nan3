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
                <router-link :to="{path: '/search'}">
                    <p class="f12">
                        <i class="iconfont icon-sousuo f12"></i>
                        <span>搜索</span>
                    </p>
                </router-link>
            </li>
        </n3-top>
        <n3-cushion :prop="cushion" :style="style"></n3-cushion>
        <section class="main" v-touch="{methods: touch}" :style="style">
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
            <n3-widget-bulk :prop="widget.bulk[1]" v-lazy.component="{data: widget.bulk[1]}"></n3-widget-bulk>
        </section>
        <div class="divider"></div>
        <div class="divider divider5"></div>
        <n3-footer :prop="footer"></n3-footer>
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
                cushion: {
                    state: 0,
                    tran: ''
                },
                footer: {
                    selected: 'index'
                },
                widget: {
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
                    }, {
                        lazy: true,
                        type: 2,
                        title: '热门商品2',
                        more: '#',
                        url: '/static/data/widget_bulk_1.json',
                        param: null
                    }]
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
            }
        },
        methods: {
            touch: function (e) {
                let _this = this
                let ev = e.evObj
                let t = ev.distanceY * -1
                if (ev.isStart) {
                    return
                } else if (ev.isEnd) {
                    document.body.style.overflowY = 'auto'
                    let lmt = 60
                    let _run = function(){
                        _this.y-= lmt === 60 ? 10 : 5
                        if(_this.y >= lmt) requestAnimationFrame(_run)
                        else {
                            _this.y = lmt
                            if(lmt === 60){
                                setTimeout(function () {
                                    lmt = 0
                                    _run()
                                }, 1000);
                            }
                        }
                    }
                    if (t > 60) {
                        _run()
                        _this.cushion.state = 2
                    } else {
                        lmt = 0
                        _run()
                    }
                } else {
                    if (ev.type === 'down') {
                        if (_this.$util.scrollTop() <= 0) {
                            document.body.style.overflowY = 'hidden'
                            _this.y = t <= 0 ? 0 : t
                            if (t > 60) _this.cushion.state = 1
                        }
                    } else
                        return
                }
            }
        }
    }
</script>