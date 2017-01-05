<template>
    <footer :class="['footer', type === 0 ? 'pd10' : '']">
        <ul v-if="type === 0">
            <li>
                <a class="selected" href="">
                    <p><i class="iconfont icon-shouye"></i></p>
                    <p><span>首页</span></p>
                </a>
            </li>
            <li>
                <a href="view/goods/type.html">
                    <p><i class="iconfont icon-fenlei"></i></p>
                    <p><span>分类</span></p>
                </a>
            </li>
            <li id="cart">
                <a href="view/cart.html">
                    <p><i class="iconfont icon-gouwuche"></i></p>
                    <p><span>购物车</span></p>
                </a>
            </li>
            <li>
                <a href="view/user/zone.html">
                    <p><i class="iconfont icon-gerenzhongxin"></i></p>
                    <p><span>个人中心</span></p>
                </a>
            </li>
        </ul>
        <ul v-if="type === 1">
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
</template>
<script>
    module.exports = {
        props: ['prop'],
        data() {
            return {}
        },
        computed: {
            type() {
                let t = 0
                if (this.prop && this.prop.type)
                    t = this.prop.type
                return t
            }
        }
    }
</script>