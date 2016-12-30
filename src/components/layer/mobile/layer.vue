<template>
    <div v-if="state.show" id="" class="layui-m-layer layui-m-layer0">
        <div v-if="options.shade !== false" @click.stop="shadeClick" class="layui-m-layershade" :style="shade.style"></div>
        <div class="layui-m-layermain">
            <div class="layui-m-layersection">
                <div :class="[layer.skin.clz.childClass, layer.skin.clz.msgClass, layer.skin.clz.animClass]" :style="options.style">
                    <h3 v-if="options.title !== '' && options.skin !== 'msg'" :style="layer.title.style">{{ layer.title.text }}</h3>
                    <div class="layui-m-layercont" v-html="options.content"></div>
                    <div v-if="options.btn !== '' && options.skin !== 'msg'" class="layui-m-layerbtn">
                        <span v-if="layer.btn.length === 1" class="yes" @click.stop="btnClick('yes')">{{ layer.btn[0] }}</span>
                        <span v-if="layer.btn.length > 1" v-for="(item, index) in layer.btn" @click.stop="btnClick([index === 0 ? 'no' : 'yes'])" :class="[index === 0 ? 'no' : 'yes']">{{ item }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data() {
            return {
                timer: false
            }
        },
        computed: {
            state() {
                return this.$store.state.layer
            },
            options() {
                return this.$store.state.layer.options
            },
            shade() {
                let shade = this.options.shade
                let style = ''
                if (typeof shade === 'string')
                    style = shade
                return {
                    style: style
                }
            },
            layer() {
                let title = {
                    text: '',
                    style: ''
                }
                let btn = []
                let temp = this.options.title
                if (typeof temp === 'string')
                    title.text = temp
                else if (temp instanceof Array) {
                    title.text = temp[0]
                    title.style = temp[1]
                }
                temp = this.options.btn
                if (typeof temp === 'string')
                    btn[0] = temp
                else if (temp instanceof Array)
                    btn = temp

                temp = this.options.skin
                let skin = {
                    clz: {
                        childClass: 'layui-m-layerchild',
                        msgClass: temp === '' ? '' : 'layui-m-layer-' + temp,
                        animClass: 'layui-m-anim-' + this.options.anim
                    }
                }
                return {
                    title: title,
                    btn: btn,
                    skin: skin
                }
            }
        },
        watch: {
            'state.show': function(n, o) {
                //当值显示状态变成true时，启动定时器
                if (n) this.autoClose() //自动关闭
            }
        },
        methods: {
            autoClose: function() {
                let time = this.options.time
                if (time !== 0) { //存在定时关闭
                    if (this.timer !== false) clearTimeout(this.timer)
                    this.timer = setTimeout(this.yes, time)
                }
            },
            btnClick: function(type) {
                let fn = this.options[type] //yes or no callback
                if (fn !== null) fn()
                this.$store.dispatch('layer_show', false)
            },
            shadeClick: function() {
                let shadeClose = this.options.shadeClose
                if (shadeClose) this.$store.dispatch('layer_show', false)
            }
        },
        created: function() {
            this.autoClose()
        }
    }
</script>