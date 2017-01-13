<template>
    <div class="confirm">
        <n3-top>
            <li class="back" @click="back" slot="left"><i class="iconfont icon-xiangzuojiantou f18"></i></li>
            <li slot="right"></li>
            <li slot="center">确认订单</li>
        </n3-top>
        <section class="main">
            <ul class="rec-info pd0-10">
                <li>收货人：<span>XXX</span> <span>18502820654</span></li>
                <li class="addr">
                    <div class="fl"><i class="iconfont icon-shouhuodizhi"></i></div>
                    <div class="fr text-right"><i class="iconfont icon-xiangyoujiantou"></i></div>
                    <div class="f12">收货地址：<span>四川省成都市金牛区交大路222号2栋2单元202号</span></div>
                </li>
                <li class="orange">(补充说明类</li>
            </ul>
            <div class="divider"></div>
            <ul class="order-list pd5-10">
                <li>
                    <div>shangbuqishuiguodian</div>
                    <div>shangpingxiangqing</div>
                    <div>xxx</div>
                    <div>xxx</div>
                </li>
                <li>2</li>
            </ul>
        </section>
    </div>
</template>
<script>
    //确认订单
    module.exports = {
        data() {
            return {
                
            }
        },
        methods: {
            back: function () {
                this.$router.go(-1)
            }
        }
    }
</script>