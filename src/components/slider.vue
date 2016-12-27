<template>
    <section class="slider relative">
        <ul :class="content.clz" :style="content.style" @touchstart.prevent="touchstart($event)" @touchend.prevent="touchend($event)">
            <li><img src="/static/images/slider.gif"></li>
            <li><img src="/static/images/slider.gif"></li>
            <li><img src="/static/images/slider.gif"></li>
            <li><img src="/static/images/slider.gif"></li>
            <li><img src="/static/images/slider.gif"></li>
            <div class="clear"></div>
        </ul>
        <ul class="slider-indicators">
            <li v-for="(item, index) in 5" :class="[index === selected ? 'selected' : '']"></li>
        </ul>
    </section>
</template>

<script>
    //初始化完成以后需要开启定时器，动态播放轮转图
    module.exports = {
        data(){
            return {
                timer: false,
                count: 0,
                selected: 0,
                content: {
                    clz: {
                        'slider-content': true,
                        tran2: false
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
        computed: {

        },
        methods: {
            slide: function(){
                this.count--
            },
            start: function(){
                this.timer = setInterval(this.slide, 5000)//启动定时器
            },
            touchstart: function(e){
                let _this = this
                //触摸点列表
                let touches = e.touches
                if(touches.length > 1) return //多点触控不予处理
                let touch = touches[0]//当前手指触控点
                _this.screenX = touch.screenX
                _this.screenY = touch.screenY
                if(_this.timer) clearInterval(_this.timer)
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
                if(startX - endX > 0) //向左滑动
                    _this.count === -4 ? 0 : _this.count--
                else
                    _this.count === 0 ? 0 : _this.count++
                if(_this.timer) clearInterval(_this.timer)
                _this.start()
            }
        },
        watch: {
            'count': function(n, o){
                let _this = this
                _this.selected = n * -1
                if(n < -4){
                    _this.content.clz.tran2 = false
                    _this.count = 0
                }else{
                    _this.content.style.marginLeft = _this.count === 0 ? _this.count * 100 : _this.count * 100 + '%'
                    if(n === -1)
                        _this.content.clz.tran2 = true
                }
            }
        },
        created: function(){
            this.start()
        }
    }
</script>