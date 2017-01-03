<template>
    <div :class="['refresh', 'abte', refresh.tran]">
        <p class="f10 abte">
            <img src="/static/images/loader0.gif" alt="refresh"> <span>{{ content.text }}</span>
        </p>
    </div>
</template>

<script>
    module.exports = {
        props: ['refresh'],
        computed: {
            content() {
                let state = this.refresh.state
                let text = state === 0 ? '下拉刷新' : state === 1 ? '松开刷新' : '正在刷新...'
                return {
                    text: text,
                    icon: ''
                }
            }
        }
    }
</script>