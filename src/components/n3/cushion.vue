<template>
    <div :class="['cushion', 'abte', prop.tran]">
        <p class="f10 abte">
            <img src="/static/images/loader0.gif" alt="cushion"> <span>{{ content.text }}</span>
        </p>
    </div>
</template>

<script>
    module.exports = {
        props: ['prop'],
        computed: {
            content() {
                let state = this.prop.state
                let text = state === 0 ? '下拉刷新' : state === 1 ? '松开刷新' : '正在刷新...'
                return {
                    text: text,
                    icon: ''
                }
            }
        }
    }
</script>