<template>
    <div>
      <div>
        <button type="button" @click="msg">消息框</button>
      </div>
      <layer-mobile v-if="layer.show" v-long.prevent = "{ methods: tap }" v-left.prevent = "{ methods: left }"></layer-mobile>
    </div>
</template>
<script>
    //layer弹出层
    module.exports = {
        data() {
            return {
                layer: {
                    show: false //初始化设置为false,可异步加载该组件
                }
            }
        },
        computed: {

        },
        methods: {
            tap: function() {
                alert('tab')
            },
            long: function() {
                alert('long')
            },
            left: function() {
                alert('left');
            },
            msg: function() {
                if (!this.layer.show) this.layer.show = true //设置为true一步加载组件

                this.$store.dispatch('layer_show', true)
                    //初始化弹出层配置
                this.$store.dispatch('layer_init', {
                    type: 2,
                    shade: false
                });
            }
        },
        created: function() {

        }
    }
</script>