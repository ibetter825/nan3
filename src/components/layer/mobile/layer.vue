<template>
    <div v-if="show" id="" class="layui-m-layer layui-m-layer0">
        <div v-if="options.shade !== false" @click.stop="shadeClick" class="layui-m-layershade" :style="shade.style"></div>
        <div class="layui-m-layermain">
            <div class="layui-m-layersection">
                <div class="layui-m-layerchild  layui-m-anim-scale">
                    <div class="layui-m-layercont" v-html="options.content"></div>
                    <div class="layui-m-layerbtn"><span yes @click.stop="yes">{{ options.btn }}</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data() {
            return {
                show: true
            }
        },
        computed: {
            state(){
                return this.$store.state.layer
            },
            options(){
                return this.$store.state.layer.options
            },
            shade(){
                let shade = this.options.shade
                let style = ''
                if(typeof shade === 'string')
                    style = shade
                return {
                    style: style
                }
            }
        },
        methods: {
            yes: function(){
                this.show = false
            },
            shadeClick: function(){
                let shadeClose = this.options.shadeClose
                if(shadeClose) this.show = false
            }
        }
    }
</script>