<template>
    <section class="goods-info">
        <ul class="info-tab">
            <li :class="[selected === 0 ? 'selected' : '']">
                <span class="block">图文详情</span>
            </li>
            <li :class="[selected === 1 ? 'selected' : '']">
                <span class="block">产品参数</span>
            </li>
            <li :class="[selected === 2 ? 'selected' : '']">
                <span class="block">店铺推荐</span>
            </li>
        </ul>
        <ul class="info-cnt" :style="style" v-touch="{methods: touch}">
            <!--图文详情-->
            <li :class="[selected !== 0 && !allshow ? 'hide' : '']">
                <div class="pd5-0"><img src="/static/images/goods_info.jpg" alt=""></div>
                <div class="divider"></div>
                <div class="info-rmd">
                    <n3-widget-bulk :prop="widget.bulk[0]" v-lazy.component="{data: widget.bulk[0]}"></n3-widget-bulk>
                </div>
            </li>
            <!--产品参数-->
            <li :class="['info-param pd10-20', selected !== 1 && !allshow ? 'hide' : '']">
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
            <!--店铺推荐-->
            <li :class="['shop-rmd', selected !== 2 && !allshow ? 'hide' : '']">
                <n3-widget-bulk :prop="widget.bulk[1]" v-lazy.component="{data: widget.bulk[1]}"></n3-widget-bulk>
            </li>
            <div class="clear"></div>
        </ul>
        <div class="divider"></div>
    </section>
</template>
<script>
    module.exports = {
        props: ['prop'],
        data() {
            return {
                selected: 0,
                dis: 0,
                allshow: false,
                widget: {
                    bulk: [{
                            lazy: true,
                            type: 2,
                            title: '看了又看',
                            url: '/static/data/widget_bulk_1.json',
                            param: null
                        },
                        {
                            type: 2,
                            url: '/static/data/widget_bulk_1.json',
                            param: null
                        }
                    ]
                }
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
            touch: function (e) {
                let _this = this
                let ev = e.evObj
                if (ev.isStart) {
                    _this.allshow = true
                    _this.dis = _this.selected * 33.3333
                    return
                } else if (ev.isMoving) {
                    _this.allshow = true
                    _this.dis = _this.selected * 33.3333 + ev.distanceX / 33.3333
                } else {
                    let flg = -1
                    if (Math.abs(ev.distanceX) > 20) {
                        if (ev.type === 'left' && _this.selected !== 2) {
                            _this.selected++
                                flg = 1
                        } else if (ev.type === 'right' && _this.selected !== 0)
                            _this.selected--
                    } else if (ev.type === 'left') flg = -1

                    let _run = function () {
                        if (flg === 1) {
                            _this.dis++
                                if (_this.dis < _this.selected * 33.3333)
                                    requestAnimationFrame(_run)
                            else {
                                _this.allshow = false
                                _this.dis = 0
                            }
                        } else {
                            _this.dis--
                                if (_this.dis > _this.selected * 33.3333)
                                    requestAnimationFrame(_run)
                            else {
                                _this.allshow = false
                                _this.dis = 0
                            }
                        }
                    }
                    _run()
                }
            }
        },
        created() {
            this.$util.addListener(document, 'scroll', function () {
                console.log('scroll')
            }, false)
        }
    }
</script>