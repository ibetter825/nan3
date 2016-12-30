<template>
    <div id="" class="layui-m-layer layui-m-layer0">
        <div v-if="shade.show" class="layui-m-layershade"></div>
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
        props: ['options'],
        data() {
            return {
                shade: {
                    show: true
                }
            }
        },
        methods: {
            yes: function(){
                let vm = this
                vm.shade.show = false
            }
        }
    }
</script>