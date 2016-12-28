<template>
    <div class="shade shade-darkest" @touchstart.prevent="touchstart($event)" @touchend.prevent="touchend($event)">
        <section class="viewer">
            <ul :class="content.clz" :style="content.style">
                <li v-for="(item, index) in viewer.data">
                <img v-if="item.url === ''" :src="item.img">
            </li>
                <div class="clear"></div>
            </ul>
            <ul class="viewer-indicators">
                <li v-for="(item, index) in 5" :class="[index === selected ? 'selected' : '']"></li>
            </ul>
        </section>
    </div>
</template>

<script>
    module.exports = {
        props: ['viewer'],
        data(){
            return {
                count: 0,
                selected: 0,
                content: {
                    clz: {
                        'viewer-content': true,
                        tran1: true
                    },
                    style: {
                        marginLeft: 0
                    }
                },
                touch: {
                    screenX: 0,
                    screenY: 0
                }
            }
        },
        methods: {
            touchstart: function(e){
                let _this = this
                //触摸点列表
                let touches = e.touches
                if(touches.length > 1) return //多点触控不予处理
                let touch = touches[0]//当前手指触控点
                _this.screenX = touch.screenX
                _this.screenY = touch.screenY
            },
            touchend: function(e){
                let _this = this
                let touches = e.changedTouches
                if(touches.length > 1) return //多点触控不予处理
                let touch = touches[0]//当前手指触控点
                let startX = _this.screenX
                let startY = _this.screenY
                let endX = touch.screenX
                let endY = touch.screenY
                let d = startX - endX
                if(d === 0) {//点击事件
                    _this.viewer.show = false
                    return
                }
                if(d > 0) //向左滑动
                    _this.count === -4 ? 0 : _this.count--
                else
                    _this.count === 0 ? 0 : _this.count++
            }
        },
        watch: {
            'count': function(n, o){
                let _this = this
                _this.selected = n * -1
                if(n < -4)
                    _this.count = 0
                else
                    _this.content.style.marginLeft = _this.count === 0 ? _this.count * 100 : _this.count * 100 + '%'
            }
        },
        created(){
            this.count = this.viewer.selected * -1
        }
    }
</script>