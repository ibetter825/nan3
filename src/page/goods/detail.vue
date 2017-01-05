<template>
    <div class="detail">
        <n3-top>
            <li class="back" slot="left"><i class="iconfont icon-xiangzuojiantou f18"></i></li>
            <li slot="right">
                <a class="wrap-block" href="">
                    <i class="iconfont icon-others"></i>
                </a>
            </li>
            <li class="title" slot="center">圣诞树大户大叔的宿舍的</li>
        </n3-top>
        <section class="main">
            <n3-slider :prop="slider"></n3-slider>
        </section>
    </div>
</template>

<script>
    module.exports = {
        computed: {
            slider() { //传递给slider组件的数据，如果url === null, 则直接填充数据data，反之则通过url地址以及param去请求后台获取
                return {
                    url: '/static/data/detail_slider.json',
                    param: null
                }
            }
        },
        created: function () {
            console.log(this.$route.query.id)
        }
    }
</script>