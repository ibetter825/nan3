<template>
        <nav :class="['nav', clz]">
            <ul>
                <li v-for="(r, index) in line">
                    <a v-for="(item, i) in data" v-if="i >= index * type && i < r * type" :href="[item.url ? item.url : '#']">
                        <p :class="item.clz"><i :class="'iconfont f24 ' + item.icon"></i></p>
                        <p><span>{{ item.text }}</span></p>
                    </a>
                </li>
                <div class="clear"></div>
            </ul>
        </nav>
    </template>

<script>
    module.exports = {
        props: ['prop'],
        data() {
            return {
                clz: '',
                type: 4,
                data: []
            }
        },
        computed: {
            line() { //导航条的行数
                let type = this.prop.type ? this.prop.type : 4 //默认每行四个图标
                this.type = type
                type === 5 ? this.clz = 'nav-five' : this.clz = ''
                return this.data.length / type
            }
        },
        created: function() {
            let url = this.prop['url']
            if (url) { //请求后台
                console.log('先从本地储存空间取数据，如果没有再从后台请求数据，成功后再放入本地')
            } else
                this.data = this.prop['data']
        }
    }
</script>