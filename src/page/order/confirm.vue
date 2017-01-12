<template>
    <div class="cart">
        <n3-top>
            <li class="back" @click="back" slot="left"><i class="iconfont icon-xiangzuojiantou f18"></i></li>
            <li slot="right"></li>
            <li slot="center">确认订单</li>
        </n3-top>
        <section class="main">
            
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