<template>
    <div>
      <div>
        <button type="button" @click="msg">消息框</button>
      </div>
      <br/>
      <div>
        <button type="button" @click="tip">提示框</button>
      </div>
      <br/>
      <div>
        <button type="button" @click="bottom">底部提示</button>
      </div>
      <br/>
      <div>
        <button type="button" @click="bottom2">底部对话框</button>
      </div>
      <br/>
      <div>
        <button type="button" @click="loading">加载层</button>
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
                this.$layer({
                    title: '消息',
                    content: '这是弹出的消息'
                })
            },
            tip: function() {
                this.$layer({
                    skin: 'msg',
                    shade: false,
                    content: '这是弹出的消息'
                })
            },
            loading: function() {
                this.$layer({
                    type: 2
                })
            },
            bottom: function() {
                this.$layer({
                    content: '一个没有任何按钮的底部提示',
                    skin: 'footer'
                })
            },
            bottom2: function() {
                let _this = this
                this.$layer({
                    content: '这是一个底部弹出的询问提示',
                    btn: ['删除', '取消'],
                    skin: 'footer',
                    yes: function() {
                        _this.$layer({
                            skin: 'msg',
                            shade: false,
                            content: '这是弹出的消息'
                        })
                    }
                })
            }
        },
        created: function() {
            this.layer.show = true //设置为true异步加载组件，也可以不需要这个东西
        }
    }
</script>