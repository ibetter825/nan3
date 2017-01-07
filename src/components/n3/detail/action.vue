<template>
    <transition name="fade">
        <div class="shade shade-darker" @click.self="hide">
            <section class="action modal abte tran03" :style="style">
                <div class="action-header">
                    <div class="rtive">
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
                <ul class="modal-btn white abte">
                    <li class="bg-orange" v-if="!prop.confirm">加入购物车</li>
                    <li class="bg-red" v-if="!prop.confirm">立即购买</li>
                    <li class="confirm bg-red" v-if="prop.confirm">确认</li>
                </ul>
            </section>
        </div>
    </transition>
</template>

<script>
    module.exports = {
        props: ['prop'],
        data() {
            return {
                y: 110
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
                _this.y = 110
                setTimeout(function() {
                    _this.prop.show = false
                }, 200);

            }
        },
        watch: {
            'prop.show': function(n, o) {
                n ? this.y = 0 : this.y = 110
            }
        },
        created() {
            let _this = this
            setTimeout(function() {
                _this.y = 0
            }, 16);
        }
    }
</script>