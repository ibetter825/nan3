<template>
    
    
  <div class="detail goods" @touchstart="m_ts('root', $event)" @touchmove="m_tm('root', $event)" @touchend="m_te('root', $event)">
      <ul class="top pd10 bg-white">
        <li class="back"><i class="iconfont icon-xiangzuojiantou f18"></i></li>
        <li>
            <a class="wrap-block" href="">
                <i class="iconfont icon-others"></i>
            </a>
        </li>
        <li class="title">
            圣诞树大户大叔的宿舍的
        </li>
    </ul>
    <div class="divider divider5"></div>
    <!-- SLIDE -->
    <n3-slider :slider="slider"></n3-slider>
    
        <section class="header pd10-20 relative">
            <h1 class="mg0 f18">
                华秧安岳黄柠檬新鲜水果二三级皮薄柠檬切片泡茶榨汁酸味十足4斤
            </h1>
            <div class="share absolute">
                <p><i class="iconfont icon-fenxiang f24"></i></p>
                <p class="f12">分享</p>
            </div>
            <div class="price">
                <p class="f24"><i class="f16 orange">￥</i><span class="orange">250</span></p>
                <p class="gray f12"><i>价格</i><span class="through">￥1250</span></p>
            </div>
            <ul class="info gray f12">
                <li class="fl">快递:￥0</li>
                <li class="fl">月销量:100</li>
                <li class="fr">遂宁</li>
                <div class="clear"></div>
            </ul>
        </section>
        <ul class="service f12">
            <li class="fl"><i class="iconfont icon-roundcheck red"></i> 坏单包退</li>
            <li class="fl"><i class="iconfont icon-roundcheck red"></i> 正品保证</li>
            <li class="fr"><i class="iconfont icon-xiangyoujiantou"></i></li>
            <div class="clear"></div>
        </ul>
        <ul class="sales f12 relative">
            <li class="fl">
                <p><span class="type red">促销</span><span class="cnt">nisdedede</span></p>
                <p><span class="type red">积分</span><span class="cnt">sdsdsds</span></p>
            </li>
            <li class="absolute">
                <i class="iconfont icon-xiangyoujiantou"></i>
            </li>
            <div class="clear"></div>
        </ul>
        <div class="divider"></div>
        <ul class="addr f12">
            <li class="fl black">配送至：滨江区</li>
            <li class="fr"><i class="iconfont icon-xiangyoujiantou"></i></li>
            <div class="clear"></div>
        </ul>
        <div class="divider"></div>
        <!--评价-->
        <section class="appraise pd10-20">
            <h4 class="f14">商品评价(100)</h4>
            <ul class="appraise-tags f10 gray">
                <li>口感不错(43)</li>
                <li>味道不错(43)</li>
                <li>新鲜(43)</li>
                <li class="selected">快递不错(43)</li>
                <li class="bad">口感一般(43)</li>
                <div class="clear more">
                    <i class="iconfont icon-xiangxiajiantou"></i>
                </div>
            </ul>
            <article class="f12">
                <header>
                    <span class="avatar block fl">
                        <img class="img" src="/static/images/avatar.gif" alt="">
                    </span>
                    <span class="username block fl">原**此</span>
                    <div class="clear"></div>
                </header>
                <p class="text-elli pd5-0">收到了花，比我想象中的还美。好漂亮，再买几朵。客服服务态度很好，五星好评。收到了花，比我想象中的还美。好漂亮，再买几朵。客服服务态度很好，五星好评。收到了花，比我想象中的还美。好漂亮，再买几朵。客服服务态度很好，五星好评。</p>
                <ul class="appraise-imgs">
                    <li><img src="/static/images/detail_3.jpg" alt=""></li>
                    <li><img src="/static/images/detail_3.jpg" alt=""></li>
                    <li><img src="/static/images/detail_3.jpg" alt=""></li>
                    <li><img src="/static/images/detail_3.jpg" alt=""></li>
                </ul>
                <footer class="f10 light-gray pd5-0">
                    <span>2016年12月13日 00:06</span> &emsp;
                    <span>购买数量: 2</span>
                </footer>
            </article>
            <p class="appraise-more pd20-0"><span class="pd5-10">查看全部评价</span></p>
        </section>
        <div class="divider"></div>
        <!--店家-->
        <section class="shop pd10-20">
            <header>
                <div class="shop-logo fl">
                    <img src="/static/images/detail_3.jpg" alt="">
                </div>
                <div class="shop-name fl">
                    <p class="f16">伤不起水果店</p>
                    <p class="f12 red">自营</p>
                </div>
                <div class="clear"></div>
            </header>
            <ul class="shop-cnt">
                <li class="pd10-0">
                    <div>
                        <p class="f20">42</p>
                        <p class="f12 gray">全部商品</p>
                    </div>
                </li>
                <li class="pd10-0">
                    <div>
                        <p class="f20">1.2万</p>
                        <p class="f12 gray">关注人数</p>
                    </div>
                </li>
                <li></li>
            </ul>
            <ul class="shop-more">
                <li><span class="pd5-10">查看分类</span></li>
                <li><span class="pd5-10">进店看看</span></li>
            </ul>
        </section>
        <div id="ctnue" class="ctnue">
            <div class="divider divider5">———————— 继续拖动查看图文详情 ————————</div>
            <div v-if="ctnue.show"></div>
        </div>
        <!--商品详情-->
        <section v-if="info.show" class="goods-info bg-white" :style="info.style">
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
            <ul class="info-cnt" @touchstart.stop="m_ts('tab', $event)" @touchend.stop="m_te('tab', $event)">
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
            <div class="divider"></div>
        </section>
    
        <div class="divider divider5"></div>
        <!-- ENDS MAIN -->
        <footer class="footer">
            <ul>
                <li>
                    <a class="selected" href="../../index.html">
                        <p><i class="iconfont icon-shouye"></i></p>
                        <p><span>首页</span></p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <p><i class="iconfont icon-gouwuche"></i></p>
                        <p><span>购物车</span></p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <p><i class="iconfont icon-jushoucang"></i></p>
                        <p><span>收藏</span></p>
                    </a>
                </li>
                <li class="bg-orange">
                    <a href="" class="white">
                        加入购物车
                    </a>
                </li>
                <li class="bg-red">
                    <a href="" class="white">
                        立即购买
                    </a>
                </li>
            </ul>
        </footer>
        <!--弹出层 足迹-->
        <div class="shade hide">
            <section class="track black relative tran1">
                <p class="track-title f16">我的足迹(2/20)</p>
                <ul class="track-cnt absolute black">
                    <li>
                        <div class="track-detail tran05">
                            <p><img src="/static/images/detail_0.jpg"></p>
                            <p><span class="block text-clip">华秧安岳黄柠檬新鲜水果二三级皮薄柠檬切片泡茶榨汁酸味十足4斤</span></p>
                            <p class="orange f24">￥200</p>
                        </div>
                        <div class="track-shade tran05"></div>
                    </li>
                    <li>
                        <div class="track-detail tran05">
                            <p><img src="/static/images/detail_0.jpg"></p>
                            <p><span class="block text-clip">华秧安岳黄柠檬新鲜水果二三级皮薄柠檬切片泡茶榨汁酸味十足4斤</span></p>
                            <p class="orange f24">￥200</p>
                        </div>
                        <div class="track-shade tran05"></div>
                    </li>
                    <li>
                        <div class="track-detail tran05">
                            <p><img src="/static/images/detail_0.jpg"></p>
                            <p><span class="block text-clip">华秧安岳黄柠檬新鲜水果二三级皮薄柠檬切片泡茶榨汁酸味十足4斤</span></p>
                            <p class="orange f24">￥200</p>
                        </div>
                        <div class="track-shade tran05"></div>
                    </li>
                    <li>
                        <div class="track-detail tran05">
                            <p><img src="/static/images/detail_0.jpg"></p>
                            <p><span class="block text-clip">华秧安岳黄柠檬新鲜水果二三级皮薄柠檬切片泡茶榨汁酸味十足4斤</span></p>
                            <p class="orange f24">￥200</p>
                        </div>
                        <div class="track-shade tran05"></div>
                    </li>
                </ul>
            </section>
        </div>
        <!--弹出层 购买-->
        <div class="shade shade-darker hide">
            <section class="action absolute tran1">
                <div class="action-header">
                    <div class="relative">
                        <img src="/static/images/detail_0.jpg" alt="">
                    </div>
                    <div>
                        <p class="orange f24"><span class="f16">￥</span>250</p>
                        <p class="gray f12">库存2017件</p>
                    </div>
                </div>
                <div class="">
                    <!--此处不同的商品内容不同-->
                </div>
                <!--购买数量-->
                <div class="action-count pd10">
                    <span class="fl">购买数量</span>
                    <span class="f16 fr">
                        <i class="iconfont icon-jianhao disable"></i>
                        <i class="buy-num">2</i>
                        <i class="iconfont icon-jiahao1 light-gray"></i>
                    </span>
                </div>
                <ul class="action-btn white absolute">
                    <li class="bg-orange">加入购物车</li>
                    <li class="bg-red">立即购买</li>
                    <li class="confirm bg-red">确认</li>
                </ul>
            </section>
        </div>
        <!--弹出层 图片查看器-->
        <n3-viewer v-if="viewer.show" :viewer = "viewer"></n3-viewer>
    </div>
    
    
</template>

<script>
    import slider from '../../components/slider.vue'
    import nav from '../../components/nav.vue'
    import ad from '../../components/ad.vue'
    import widgetList from '../../components/widgetList.vue'
    import widgetCard from '../../components/widgetCard.vue'
    import widgetBulk from '../../components/widgetBulk.vue'
    import footer from '../../components/footer.vue'
    import viewer from '../../components/viewer.vue'
    module.exports = {
        data() {
            let _this = this
            return {
                root: { //根目录
                    touch: {
                        screenX: 0,
                        screenY: 0
                    }
                },
                ctnue: {
                    show: false
                },
                info: { //图文信息
                    show: true,
                    style: {
                        //position: 'relative'
                    },
                },
                tab: { //图文信息中的tab切换
                    selected: 0,
                    touch: {
                        screenX: 0,
                        screenY: 0
                    }
                },
                viewer: { //图片查看器
                    show: false,
                    selected: 0,
                    data: []
                },
                slider: { //轮播图
                    click: function(i) {
                        _this.m_viewer(i)
                    },
                    data: []
                }
            }
        },
        components: {
            'n3-slider': slider,
            'n3-nav': nav,
            'n3-ad': ad,
            'n3-widget-list': widgetList,
            'n3-widget-card': widgetCard,
            'n3-widget-bulk': widgetBulk,
            'n3-footer': footer,
            'n3-viewer': viewer
        },
        computed: {
            common(){
                return {
                    ct: document.querySelector('#ctnue').offsetTop, //继续下拉的位置
                    ch: document.body.clientHeight || document.documentElement.clientHeight, //网页可见区域高
                    ah: window.screen.availHeight//屏幕可用工作区高度
                }
            }
        },
        methods: {
            m_viewer: function(i) {
                this.viewer.selected = i
                this.viewer.show = true
            },
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
                } else if (el === 'root') {
                    _this.root.touch.screenX = x
                    _this.root.touch.screenY = y
                }
            },
            m_tm: function(el, e) {

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
                } else if (el === 'root') {
                    startX = _this.root.touch.screenX
                    startY = _this.root.touch.screenY
                }
                let dx = startX - endX
                let dy = startY - endY

                let map = {
                    root: {
                        up: function() {
                            // let bt = document.body.scrollTop || document.documentElement.scrollTop
                            // //判断滚动的位置是否到了指定位置
                            // let po = bt + _this.common.ah - 160
                            // if(po > _this.common.ct){
                            //     _this.ctnue.show ? _this.ctnue.show = false : '' //到达指定位置后隐藏替代层
                            //     _this.info.show ? '' : _this.info.show = true
                            //     _this.info.style.position = 'fixed'
                            //     _this.info.style.top = '50px'
                            // }
                        }
                    },
                    tab: {
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
                    else if (dy > 0 && Math.abs(dx) <= 20) //向下
                        map[el]['up'] ? map[el]['up']() : ''
                    else if (dy < 0 && Math.abs(dx) <= 20) //向上滑动
                        map[el]['down'] ? map[el]['down']() : ''
                }
            }
        },
        created: function() {
            let _this = this
            let imgs = [{
                url: '',
                img: '/static/images/detail_0.jpg'
            }, {
                url: '',
                img: '/static/images/detail_1.jpg'
            }, {
                url: '',
                img: '/static/images/detail_2.jpg'
            }, {
                url: '',
                img: '/static/images/detail_3.jpg'
            }, {
                url: '',
                img: '/static/images/detail_2.jpg'
            }]
            this.viewer.data = imgs
            this.slider.data = imgs
        }
    }
</script>