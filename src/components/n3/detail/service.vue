<template>
    <transition name="fade">
        <div>
            <ul v-if="prop.type === 0" class="service f12" @click="click">
                <li class="fl"><i class="iconfont icon-roundcheck red"></i> 坏单包退</li>
                <li class="fl"><i class="iconfont icon-roundcheck red"></i> 正品保证</li>
                <li class="fl"><i class="iconfont icon-roundcheck red"></i> 正品保证</li>
                <li class="fr"><i class="iconfont icon-xiangyoujiantou"></i></li>
                <div class="clear"></div>
            </ul>
            <div v-if="prop.type === 1" class="shade shade-darker" @click.self="hide">
                <section class="service modal abte tran03" :style="style">
                    <div class="modal-cnt">
                        <h4 class="text-center red">基础服务</h4>
                        <div class="pd5-20">
                            <div class="rtive">
                                <span class="abte"><i class="iconfont icon-squarecheck red f20 rtive"></i></span>
                                <p class="pd5-0">全国联保</p>
                                <p class="f12 gray">商品在线报修，直达品牌售后</p>
                            </div>
                            <div class="rtive">
                                <span class="abte"><i class="iconfont icon-squarecheck red f20 rtive"></i></span>
                                <p class="pd5-0">全国联保</p>
                                <p class="f12 gray">商品在线报修，直达品牌售后</p>
                            </div>
                            <div class="rtive">
                                <span class="abte"><i class="iconfont icon-squarecheck red f20 rtive"></i></span>
                                <p class="pd5-0">全国联保</p>
                                <p class="f12 gray">商品在线报修，直达品牌售后</p>
                            </div>
                            <div class="rtive">
                                <span class="abte"><i class="iconfont icon-squarecheck red f20 rtive"></i></span>
                                <p class="pd5-0">全国联保</p>
                                <p class="f12 gray">商品在线报修，直达品牌售后</p>
                            </div>
                            <div class="rtive">
                                <span class="abte"><i class="iconfont icon-squarecheck red f20 rtive"></i></span>
                                <p class="pd5-0">全国联保</p>
                                <p class="f12 gray">商品在线报修，直达品牌售后</p>
                            </div>
                            <div class="rtive">
                                <span class="abte"><i class="iconfont icon-squarecheck red f20 rtive"></i></span>
                                <p class="pd5-0">全国联保</p>
                                <p class="f12 gray">商品在线报修，直达品牌售后</p>
                            </div>
                            <div class="rtive">
                                <span class="abte"><i class="iconfont icon-squarecheck red f20 rtive"></i></span>
                                <p class="pd5-0">全国联保</p>
                                <p class="f12 gray">商品在线报修，直达品牌售后</p>
                            </div>
                            <div class="rtive">
                                <span class="abte"><i class="iconfont icon-squarecheck red f20 rtive"></i></span>
                                <p class="pd5-0">全国联保</p>
                                <p class="f12 gray">商品在线报修，直达品牌售后</p>
                            </div>
                        </div>
                    </div>
                    <ul class="modal-btn white abte">
                        <li class="confirm bg-red" @click.self="hide">完成</li>
                    </ul>
                </section>
            </div>
        </div>
    </transition>
</template>

<script>
    module.exports = {
        props: ['prop'],
        data() {
            return {
                y: 100
            }
        },
        computed: {
            style() {
                let dis = 'translateY(' + this.y + '%)'
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
            hide: function() {
                let _this = this
                _this.y = 100
                setTimeout(function() {
                    _this.prop.show = false
                }, 200);

            },
            click: function() { //当为缩略版时点击事件
                let click = this.prop.methods.click
                if (click) click()
            }
        },
        watch: {
            'prop.show': function(n, o) {
                n ? this.y = 0 : this.y = 100
            }
        },
        created() {
            let _this = this
            if (_this.prop.type === 1) {
                setTimeout(function() {
                    _this.y = 0
                }, 16);
            }
        }
    }
</script>