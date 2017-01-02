<template>
    <div v-if="state.show" :class="['ball', clz.tran]" :style="offset"></div>
</template>

<script>
    //跳动的小球，用于添加购物车的动画效果
    module.exports = {
        data() {
            return {
                clz: {
                    tran: ''
                },
                offset: {

                }
            }
        },
        computed: {
            state() {
                return this.$store.state.ball
            }
        },
        watch: {
            'state.show': function(n, o) {
                if (n) {
                    let _this = this
                    _this.clz.tran = 'tran5'
                    let cur = this.state.current,
                        tar = _this.state.target,
                        top = 0,
                        left = 0,
                        ctop = 0,
                        cleft = 0

                    function getOffset(el) {
                        left += el.offsetLeft
                        top += el.offsetTop
                        if (el.offsetParent) getOffset(el.offsetParent)
                    }
                    getOffset(cur) //计算当前点击位置
                    top = top - _this.$util.scrollTop()
                    left += 5
                    _this.offset = {
                        left: left + 'px',
                        top: top + 'px'
                    }
                    _this.clz.tran = 'tran01'
                    cleft = left, ctop = top
                    top = 0, left = 0
                    getOffset(tar) //计算购物车位置
                    setTimeout(function() {
                        _this.offset = {
                            left: (cleft - (cleft - left > 0 ? 10 : -10)) + 'px',
                            top: (ctop - 15) + 'px'
                        }
                        setTimeout(function() {
                            _this.clz.tran = 'tran05'
                            left += tar.offsetWidth / 2
                            _this.offset = {
                                left: left + 'px',
                                top: top + 'px'
                            }
                        }, 100)
                    }, 10);

                    setTimeout(function() {
                        _this.$store.dispatch('ball_show', false)

                        //此处添加到购物车的代码
                    }, 700);
                }
            }
        }
    }
</script>