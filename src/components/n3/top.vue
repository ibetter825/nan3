<template>
    <ul class="top pd10 bg-white">
        <li class="logo f16">南山网</li>
        <li>
            <a class="wrap-block" href="">
                <i class="iconfont icon-36"></i>
            </a>
        </li>
        <li class="search-container relative">
            <p class="f12">
                <i class="iconfont icon-sousuo f12"></i>
                <span>搜索</span>
            </p>
        </li>
    </ul>
</template>
<script>
    //初始化完成以后需要开启定时器，动态播放轮转图
    module.exports = {
        props: ['top'],
        data() {
            return {

            }
        },
        methods: {
            left: function() {

            }
        }
    }
</script>