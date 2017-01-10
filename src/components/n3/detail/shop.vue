<template>
    <section class="shop pd10-20">
        <header>
            <div class="shop-logo fl">
                <img :src="data.logo" alt="">
            </div>
            <div class="shop-name fl">
                <p class="f16">{{ data.name }}</p>
                <p class="f12 red">自营</p>
            </div>
            <div class="clear"></div>
        </header>
        <ul class="shop-cnt">
            <li class="pd10-0">
                <div>
                    <p class="f20">{{ data.count }}</p>
                    <p class="f12 gray">全部商品</p>
                </div>
            </li>
            <li class="pd10-0">
                <div>
                    <p class="f20">{{ followers }}</p>
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
</template>
<script>
    //跳动的小球，用于添加购物车的动画效果
    module.exports = {
        props: ['prop'],
        data() {
            return {
                data: {}
            }
        },
        computed: {
            followers() {
                let num = this.data.followers
                num === undefined ? num = 0 : num = Number(num)
                let res = num
                if (Math.abs(num / 100000000) < 1)
                    res = num / 10000 + '万'
                else
                    res = num / 100000000 + '亿'
                return res
            }
        },
        created() {
            let _this = this
            let url = _this.prop['url']
            if (url) { //请求后台
                let param = _this.prop['param']
                if (param && param['id']) {
                    let id = param['id']
                    let data = _this.$session('shop_' + id)
                    if (data) {
                        _this.data = JSON.parse(data)
                        _this.prop.data = JSON.parse(data)
                    } else {
                        _this.$http.get(url).then(function (response) {
                            _this.data = response.body
                            _this.prop.data = response.body
                            _this.$session('shop_' + id, JSON.stringify(response.body)) //存入sessionStorage
                        }, function (response) {
                            console.error(response.body)
                        })
                    }
                }
            } else
                _this.data = _this.prop['data']
        }
    }
</script>