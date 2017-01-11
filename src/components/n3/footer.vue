<template>
    <footer :class="['footer', type === 0 ? 'pd10' : '']">
        <ul v-if="type === 0">
            <li>
                <router-link :class="[prop['selected'] === 'index' ? 'selected' : '']" :to="{path: '/'}">
                    <p><i class="iconfont icon-shouye"></i></p>
                    <p><span>首页</span></p>
                </router-link>
            </li>
            <li>
                <router-link :class="[prop['selected'] === 'category' ? 'selected' : '']" :to="{path: '/category'}">
                    <p><i class="iconfont icon-fenlei"></i></p>
                    <p><span>分类</span></p>
                </router-link>
            </li>
            <li id="cart">
                <router-link :class="[prop['selected'] === 'cart' ? 'selected' : '']" :to="{path: '/user/cart'}">
                    <p><i class="iconfont icon-gouwuche"></i></p>
                    <p><span>购物车</span></p>
                </router-link>
            </li>
            <li>
                <router-link :class="[prop['selected'] === 'zone' ? 'selected' : '']" :to="{path: '/user/zone', query: {id: 10001}}">
                    <p><i class="iconfont icon-gerenzhongxin"></i></p>
                    <p><span>个人中心</span></p>
                </router-link>
            </li>
        </ul>
        <ul v-if="type === 1">
            <li>
                <router-link :to="{path: '/'}">
                    <p><i class="iconfont icon-shouye"></i></p>
                    <p><span>首页</span></p>
                </router-link>
            </li>
            <li id="cart">
                <router-link :class="[prop['selected'] === 'cart' ? 'selected' : '']" :to="{path: '/user/cart'}">
                    <p><i class="iconfont icon-gouwuche"></i></p>
                    <p><span>购物车</span></p>
                </router-link>
            </li>
            <li>
                <a href="">
                    <p><i class="iconfont icon-jushoucang"></i></p>
                    <p><span>收藏</span></p>
                </a>
            </li>
            <li class="bg-orange">
                <span class="white" @click="cart">
                    加入购物车
                </span>
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
        },
        methods: {
            cart: function() {
                let cart = this.prop.cart
                if (cart) cart()
            }
        }
    }
</script>