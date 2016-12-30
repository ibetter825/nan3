<template>
    <div>
      <div>
        <button type="button" @click="msg">消息框</button>
      </div>
      <layer-mobile v-if="layer.show"></layer-mobile>
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
            msg: function() {
                if (!this.layer.show) this.layer.show = true //设置为true一步加载组件

                this.$store.dispatch('layer_show', true)
                    //初始化弹出层配置
                this.$store.dispatch('layer_init', {
                    type: 2
                });
            }
        },
        created: function() {

        }
    }
</script>