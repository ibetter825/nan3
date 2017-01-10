<template>
    <div class="totop" :style="style" v-touch.prevent="{methods: touch}">
        <i class="iconfont icon-xiangshangjiantou"></i>
    </div>
</template>
<script>
    module.exports = {
        data() {
            return {
                move: {
                    x: 0,
                    y: 0
                },
                init: {
                    x: 0,
                    y: 0
                }
            }
        },
        computed: {
            style() {
                let dis = 'translate(' + this.move.x * -1 + 'px,' + this.move.y * -1 + 'px)'
                return {
                    'transform': dis,
                    '-webkit-transform': dis,
                    '-moz-transform': dis,
                    '-ms-transform': dis,
                    '-o-transform': dis
                }
            }
        },
        methods: {
            totop: function () { //返回顶部
                let _util = this.$util
                let target = document.body || document.documentElement
                let _run = function () {
                    target.scrollTop -= 20
                    if (target.scrollTop > 0) requestAnimationFrame(_run)
                }
                _run()
            },
            touch: function (e) {
                let ev = e.evObj
                if (ev.isStart) {
                    return
                } else if (ev.isMoving) {
                    this.move.x = ev.distanceX + this.init.x
                    this.move.y = ev.distanceY + this.init.y
                } else {
                    if (ev.type === 'tap')
                        this.totop()
                    else {
                        this.init.x = this.move.x
                        this.init.y = this.move.y
                    }
                }
            }
        }
    }
</script>