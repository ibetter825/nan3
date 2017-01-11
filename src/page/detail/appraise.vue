<template>
    <div class="detail goods">
        <n3-top :prop="top">
            <li class="back" @click="back" slot="left"><i class="iconfont icon-xiangzuojiantou f18"></i></li>
            <li slot="right">
                <a class="wrap-block" href="">
                    <i class="iconfont icon-others white"></i>
                </a>
            </li>
            <li class="title" slot="center">{{ title }}</li>
        </n3-top>
        <section class="main">
            <n3-detail-appraise :prop="appraise"></n3-detail-appraise>
        </section>
        <div class="divider divider5 bg-white"></div>
    </div>
</template>
<script>
    module.exports = {
        data() {
            return {
                top: {
                    clz: 'bg-orange white'
                },
                title: '评价(200)',
                appraise: {
                    type: 1
                }
            }
        },
        computed: {

        },
        methods: {
            back: function () {
                this.$router.go(-1)
            }
        },
        created: function () {
        }
    }
</script>