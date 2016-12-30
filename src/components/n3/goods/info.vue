<template>
    <section :class="{'goods-info': true, 'bg-white': true, 'tran05': true, 'slide-goods-info-hide': true, 'slide-goods-info': info.clz['slide-goods-info']}" :style="info.style">
            <ul class="info-tab bg-white">
                <li :class="[tab.selected === 0 ? 'selected' : '']" @click="m_tab(0)">
                    <span class="block">图文详情</span>
                </li>
                <li :class="[tab.selected === 1 ? 'selected' : '']" @click="m_tab(1)">
                    <span class="block">产品参数</span>
                </li>
                <li :class="[tab.selected === 2 ? 'selected' : '']" @click="m_tab(2)">
                    <span class="block">店铺推荐</span>
                </li>
            </ul>
            <ul id="infoCnt" class="info-cnt" @touchstart.stop="m_ts('tab', $event)" @touchmove.stop="m_tm('tab', $event)" @touchend.stop="m_te('tab', $event)">
                <!--图文详情-->
                <transition name="slide-lr">
                <li v-show="tab.selected === 0" class="">
                    <div class="pd5-0"><img src="/static/images/goods_info.jpg" alt=""></div>
                    <div class="divider"></div>
                    <div class="info-rmd">
                        <section class="widget widget-bulk widget-bulk-two">
                            <header>
                                <h3 class="mg0 f14 pd10 relative">
                                    <i class="iconfont icon-yanjing"></i>
                                    <span>看了又看</span>
                                </h3>
                            </header>
                            <ul>
                                <li>
                                    <div class="widget-cnt">
                                        <div>
                                            <a class="wrap-block relative" href="#">
                                                <img src="/static/images/rmd.jpg" alt="">
                                            </a>
                                            <p class="widget-bulk-info relative">
                                                <span class="f12">玉米/500g</span>
                                                <span>
                                                    <em class="widget-price f16 red">￥100</em>
                                                    <em class="widget-price f12 gray">￥200</em>
                                                </span>
                                                <span class="widget-cart">
                                                    <i class="iconfont icon-gouwuchetianjia f20 white"></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="widget-cnt">
                                        <div>
                                            <a class="wrap-block relative" href="#">
                                                <img src="/static/images/rmd.jpg" alt="">
                                            </a>
                                            <p class="widget-bulk-info relative">
                                                <span class="f12">来自新西兰的玉米/500g</span>
                                                <span>
                                                    <em class="widget-price f16 red">￥100</em>
                                                    <em class="widget-price f12 gray">￥200</em>
                                                </span>
                                                <span class="widget-cart">
                                                    <i class="iconfont icon-gouwuchetianjia f20 white"></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <aside class="clear"></aside>
                                </li>
                                <li>
                                    <div class="widget-cnt">
                                        <div>
                                            <a class="wrap-block relative" href="#">
                                                <img src="/static/images/rmd.jpg" alt="">
                                            </a>
                                            <p class="widget-bulk-info relative">
                                                <span class="f12">来自新西兰的玉米/500g</span>
                                                <span>
                                                    <em class="widget-price f16 red">￥100</em>
                                                    <em class="widget-price f12 gray">￥200</em>
                                                </span>
                                                <span class="widget-cart">
                                                    <i class="iconfont icon-gouwuchetianjia f20 white"></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="widget-cnt">
                                        <div>
                                            <a class="wrap-block relative" href="#">
                                                <img src="/static/images/rmd.jpg" alt="">
                                            </a>
                                            <p class="widget-bulk-info relative">
                                                <span class="f12">玉米/500g</span>
                                                <span>
                                                    <em class="widget-price f16 red">￥100</em>
                                                    <em class="widget-price f12 gray">￥200</em>
                                                </span>
                                                <span class="widget-cart">
                                                    <i class="iconfont icon-gouwuchetianjia f20 white"></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <aside class="clear"></aside>
                                </li>
                                <div class="clear"></div>
                            </ul>
                        </section>
                    </div>
                </li>
                </transition>
                <!--产品参数-->
                <transition name="slide-lr">
                <li v-show="tab.selected === 1" class="info-param pd10-20 ">
                    <p>
                        <span>净含量</span>
                        <span>4000g</span>
                    </p>
                    <p>
                        <span>包装方式</span>
                        <span>包装</span>
                    </p>
                    <p>
                        <span>品牌</span>
                        <span>伤不起</span>
                    </p>
                    <p>
                        <span>热卖时间</span>
                        <span>1月 2月 11月 12月</span>
                    </p>
                    <p>
                        <span>产地</span>
                        <span>中国大陆</span>
                    </p>
                    <p>
                        <span>省份</span>
                        <span>四川省</span>
                    </p>
                    <p>
                        <span>城市</span>
                        <span>遂宁</span>
                    </p>
                </li>
                </transition>
                <!--店铺推荐-->
                <transition name="slide-lr">
                <li v-show="tab.selected === 2" class="shop-rmd ">
                    <section class="widget widget-bulk widget-bulk-two">
                        <ul>
                            <li>
                                <div class="widget-cnt">
                                    <div>
                                        <router-link :to="{ path: '/'}" class="wrap-block relative">
                                            <img src="/static/images/rmd.jpg" alt="">
                                        </router-link>
                                        <p class="widget-bulk-info relative">
                                            <span class="f12">玉米/500g</span>
                                            <span>
                                                    <em class="widget-price f16 red">￥100</em>
                                                    <em class="widget-price f12 gray">￥200</em>
                                                </span>
                                            <span class="widget-cart">
                                                    <i class="iconfont icon-gouwuchetianjia f20 white"></i>
                                                </span>
                                        </p>
                                    </div>
                                </div>
                                <div class="widget-cnt">
                                    <div>
                                        <a class="wrap-block relative" href="#">
                                            <img src="/static/images/rmd.jpg" alt="">
                                        </a>
                                        <p class="widget-bulk-info relative">
                                            <span class="f12">来自新西兰的玉米/500g</span>
                                            <span>
                                                    <em class="widget-price f16 red">￥100</em>
                                                    <em class="widget-price f12 gray">￥200</em>
                                                </span>
                                            <span class="widget-cart">
                                                    <i class="iconfont icon-gouwuchetianjia f20 white"></i>
                                                </span>
                                        </p>
                                    </div>
                                </div>
                                <aside class="clear"></aside>
                            </li>
                            <li>
                                <div class="widget-cnt">
                                    <div>
                                        <a class="wrap-block relative" href="#">
                                            <img src="/static/images/rmd.jpg" alt="">
                                        </a>
                                        <p class="widget-bulk-info relative">
                                            <span class="f12">来自新西兰的玉米/500g</span>
                                            <span>
                                                    <em class="widget-price f16 red">￥100</em>
                                                    <em class="widget-price f12 gray">￥200</em>
                                                </span>
                                            <span class="widget-cart">
                                                    <i class="iconfont icon-gouwuchetianjia f20 white"></i>
                                                </span>
                                        </p>
                                    </div>
                                </div>
                                <div class="widget-cnt">
                                    <div>
                                        <a class="wrap-block relative" href="#">
                                            <img src="/static/images/rmd.jpg" alt="">
                                        </a>
                                        <p class="widget-bulk-info relative">
                                            <span class="f12">玉米/500g</span>
                                            <span>
                                                    <em class="widget-price f16 red">￥100</em>
                                                    <em class="widget-price f12 gray">￥200</em>
                                                </span>
                                            <span class="widget-cart">
                                                    <i class="iconfont icon-gouwuchetianjia f20 white"></i>
                                                </span>
                                        </p>
                                    </div>
                                </div>
                                <aside class="clear"></aside>
                            </li>
                            <div class="clear"></div>
                        </ul>
                    </section>
                </li>
                </transition>
                <div class="clear"></div>
            </ul>
            <div class="divider divider5"></div>
        </section>
</template>
<script>
    module.exports = {
        props: ['info'],
        data() {
            let _this = this
            return {
                tab: { //图文信息中的tab切换
                    selected: 0,
                    touch: {
                        screenX: 0,
                        screenY: 0
                    }
                }
            }
        },
        methods: {
            m_tab: function(i) {
                this.tab.selected = i
            },
            m_ts: function(el, e) {
                let _this = this
                    //触摸点列表
                let touches = e.touches
                if (touches.length > 1) return //多点触控不予处理
                let touch = touches[0] //当前手指触控点
                let x = touch.screenX
                let y = touch.screenY
                if (el === 'tab') {
                    _this.tab.touch.screenX = x
                    _this.tab.touch.screenY = y
                }
            },
            m_tm: function(el, e) {
                let _this = this
                let touches = e.changedTouches
                if (touches.length > 1) return //多点触控不予处理
                let touch = touches[0] //当前手指触控点
                let startX = 0
                let startY = 0
                let endX = touch.screenX
                let endY = touch.screenY

                if (el === 'tab') {
                    startX = _this.tab.touch.screenX
                    startY = _this.tab.touch.screenY
                }
                let dx = startX - endX
                let dy = startY - endY

                let map = {
                    tab: {}
                }
                e.preventdefault
                if (dx > 0 && Math.abs(dy) <= 20) //向左滑动
                    map[el]['left'] ? map[el]['left']() : ''
                else if (dx < 0 && Math.abs(dy) <= 20)
                    map[el]['right'] ? map[el]['right']() : ''
                else if (dy > 0) //向上
                    map[el]['up'] ? map[el]['up']() : ''
                else if (dy < 0) //向下滑动
                    map[el]['down'] ? map[el]['down']() : ''
            },
            m_te: function(el, e) {
                let _this = this
                let touches = e.changedTouches
                if (touches.length > 1) return //多点触控不予处理
                let touch = touches[0] //当前手指触控点
                let startX = 0
                let startY = 0
                let endX = touch.screenX
                let endY = touch.screenY

                if (el === 'tab') {
                    startX = _this.tab.touch.screenX
                    startY = _this.tab.touch.screenY
                }
                let dx = startX - endX
                let dy = startY - endY

                let map = {
                    tab: {
                        down: function(){
                            let it = document.querySelector('#infoCnt').scrollTop
                            if(it === 0)
                                _this.info.clz['slide-goods-info'] = false
                        },
                        left: function() {
                            _this.tab.selected === 2 ? '' : _this.tab.selected++ //左划
                        },
                        right: function() {
                            _this.tab.selected === 0 ? '' : _this.tab.selected-- //右划
                        }
                    }
                }

                if (dx === 0 && dy === 0)
                    map[el]['center'] ? map[el]['center']() : ''
                else {
                    e.preventdefault
                    if (dx > 0 && Math.abs(dy) <= 20) //向左滑动
                        map[el]['left'] ? map[el]['left']() : ''
                    else if (dx < 0 && Math.abs(dy) <= 20)
                        map[el]['right'] ? map[el]['right']() : ''
                    else if (dy > 0) //向上
                        map[el]['up'] ? map[el]['up']() : ''
                    else if (dy < 0) //向下滑动
                        map[el]['down'] ? map[el]['down']() : ''
                }
            }
        }
    }
</script>