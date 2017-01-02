<template>
        <div v-if="state.show" :class="['ball', par.tran]" :style="offset"></div>
    </template>

<script>
    //跳动的小球，用于添加购物车的动画效果
    module.exports = {
        data() {
            return {
                par: {
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
                    _this.par.tran = ''
                    let cur = this.state.current
                    let ptop = cur.offsetParent ? cur.offsetParent.offsetTop : 0
                    let top = ptop + cur.offsetTop
                    let left = cur.offsetLeft + cur.offsetWidth / 2
                    _this.offset = {
                        left: left + 'px',
                        top: top + 'px'
                    }

                    let tar = _this.state.target
                    setTimeout(function() {
                        ptop = tar.offsetParent ? tar.offsetParent.offsetTop : 0
                        top = ptop + tar.offsetTop
                        left = tar.offsetLeft + tar.offsetWidth / 2

                        _this.par.tran = 'tran05'
                        _this.offset = {
                            left: left + 'px',
                            top: top + 'px'
                        }
                    }, 10)

                }
            }
        }
    }
</script>