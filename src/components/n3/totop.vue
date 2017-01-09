<template>
    <div class="totop" @click="totop">
        <i class="iconfont icon-xiangshangjiantou"></i>
    </div>
</template>

<script>
    module.exports = {
        methods: {
            totop: function(){//返回顶部
                let _this = this
                let _util = _this.$util
                let target = document.body || document.documentElement
                let _run = function(){
                    target.scrollTop-=20
                    if(target.scrollTop > 0) requestAnimationFrame(_run)
                }
                _run()
            }
        }
    }
</script>