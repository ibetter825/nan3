<template>
    <section class="appraise pd10-20">
        <h4 v-if="prop.type === 0" class="f14">商品评价(100)</h4>
        <ul v-if="prop.type === 1" class="appraise-tags f10 gray">
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
            <p :class="['pd5-0', prop.type === 0 ? 'text-elli' : '']">收到了花，比我想象中的还美。好漂亮，再买几朵。客服服务态度很好，五星好评。收到了花，比我想象中的还美。好漂亮，再买几朵。客服服务态度很好，五星好评。收到了花，比我想象中的还美。好漂亮，再买几朵。客服服务态度很好，五星好评。</p>
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
        <p v-if="prop.type === 0" class="appraise-more pd20-0">
            <router-link :to="{path: '/appraise', query: {id: 10001}}">
                <span class="pd5-10">查看全部评价</span>
            </router-link>
        </p>
    </section>
</template>
<script>
    module.exports = {
        props: ['prop'],
        data() {
            return {}
        },
        computed: {},
        methods: {},
        watch: {},
        created() {
            let _this = this
            if(_this.prop.type === 0) {//简单版只显示一条评价

            }else{//复杂版，显示多条评价

            }
        }
    }
</script>