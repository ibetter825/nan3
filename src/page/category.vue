<template>
    <div class="category" :style="style">
        <n3-top>
            <li class="back" @click="back" slot="left"><i class="iconfont icon-xiangzuojiantou f18"></i></li>
            <li slot="right">
                <a class="wrap-block" href="">
                    <i class="iconfont icon-others"></i>
                </a>
            </li>
            <li class="search-container rtive" slot="center">
                <p class="f12">
                    <i class="iconfont icon-sousuo f12"></i>
                    <span>搜索</span>
                </p>
            </li>
        </n3-top>
        <section class="main">
            <ul class="category-left fl">
                <li v-for="(item, index) in left" @click="load(index)" :class="[index === selected ? 'selected' : '']">
                    <p><i :class="['iconfont', item.icon]"></i><span v-html="item.text"></span></p>
                    <em></em>
                </li>
            </ul>
            <div class="category-right fr"></div>
            <ul class="category-center">
                <li v-for="item in right">
                    <div>
                        <p>
                            <i :class="['iconfont', item.icon]"></i>
                        </p>
                        <p v-html="item.text"></p>
                    </div>
                </li>
                <div class="clear"></div>
            </ul>
        </section>
        <layer-mobile v-if="layer.show"></layer-mobile>
    </div>
</template>
<script>
    module.exports = {
        data() {
            return {
                style: {},
                layer: {
                    show: false
                },
                selected: 0,
                left: [], //左边的数据
                right: [] //右边的数据
            }
        },
        methods: {
            back: function() {
                this.$router.go(-1)
            },
            load: function(id) { //实际使用的时候id不是index
                let url = '/static/data/category.json'
                let params = {}
                if (id !== undefined)
                    params.id = id
                let _this = this
                _this.layer.show = true
                _this.$layer({
                    type: 2,
                    style: {
                        position: 'relative',
                        left: '50px'
                    },
                    shade: false
                })
                _this.$http.get(url, params).then(function(response) {
                    if (id !== undefined) {
                        setTimeout(function() {
                            _this.right = _this.left[id].children
                            _this.layer.show = false
                        }, 1000)
                        _this.selected = id
                    } else {
                        _this.left = response.body
                        _this.load(0)
                    }
                }, function(response) {
                    console.error('load error')
                })
            }
        },
        created: function() {
            this.load()
            this.style.minHeight = (document.documentElement.clientHeight - 50) + 'px'
        }
    }
</script>