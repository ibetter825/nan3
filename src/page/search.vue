<template>
    <div class="search">
        <n3-top>
            <li class="back" @click="back" slot="left"><i class="iconfont icon-xiangzuojiantou f18"></i></li>
            <li slot="right">
                <span class="wrap-block red">
                    <i class="iconfont icon-sousuo f20"></i>
                </span>
            </li>
            <li class="search-container rtive" slot="center">
                <p class="f12">
                    <input placeholder="搜索" v-focus>
                </p>    
            </li>
        </n3-top>
        <section class="main pd5-10 gray">
            <ul class="search-cnt">
                <li>
                    <!--热门搜索-->
                    <p class="title pd5-10"><i class="iconfont icon-huo"></i> 热门搜索</p>
                    <div class="pd5-10 f12">
                        <span>四川的苹果</span>
                        <span>苹果</span>
                        <span class="red">东北的苹果</span>
                        <span>河北的苹果</span>
                        <span>陕西的苹果</span>
                        <span>山西的苹果</span>
                        <span>贵州的苹果</span>
                        <span>遇难的苹果</span>
                        <span>浙江的苹果</span>
                        <span>新疆的苹果</span>
                        <span>河南的苹果</span>
                    </div>
                </li>
                <li>
                    <!--最近搜索-->
                    <p class="title pd5-10"><i class="iconfont icon-time"></i> 最近搜索</p>
                    <div class="pd5-10 f12">
                        <span>四川的苹果</span>
                        <span>苹果</span>
                        <span>东北的苹果</span>
                        <span>河北的苹果</span>
                        <span>陕西的苹果</span>
                        <span>山西的苹果</span>
                        <span>贵州的苹果</span>
                        <span>遇难的苹果</span>
                        <span>浙江的苹果</span>
                        <span>新疆的苹果</span>
                        <span>河南的苹果</span>
                    </div>
                </li>
                <li class="red f12">
                    <i class="iconfont icon-lajixiang"></i> 清除搜索历史
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
    module.exports = {
        data() {
            return {

            }
        },
        computed: {

        },
        methods: {
            back: function() {
                this.$router.go(-1)
            }
        },
        directives: {
            focus: {
                inserted: function(el) {
                    el.focus()
                }
            }
        },
        created: function() {

        }
    }
</script>