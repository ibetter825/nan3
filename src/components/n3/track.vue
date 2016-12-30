<template>
    <div :class="{'shade': true, 'shade-hide': !track.show}" @touchstart="m_ts($event)" @touchmove.prevent="m_tm($event)" @touchend.stop="m_te($event)">
        <section :class="{'track black relative tran05 track-hide': true, 'track-show': track.show}">
            <p class="track-title f16">我的足迹(2/20)</p>
            <ul class="track-cnt absolute black">
                <li class="selected">
                    <router-link :to="{ path: '/'}">
                        <div class="track-detail tran05">
                            <p><img src="/static/images/detail_0.jpg"></p>
                            <p><span class="block text-clip">华秧安岳黄柠檬新鲜水果二三级皮薄柠檬切片泡茶榨汁酸味十足4斤</span></p>
                            <p class="orange f24">￥200</p>
                        </div>
                    </router-link>
                    <div class="track-shade tran05"></div>
                </li>
                
                <li>
                    <div class="track-detail tran05">
                        <p><img src="/static/images/detail_0.jpg"></p>
                        <p><span class="block text-clip">华秧安岳黄柠檬新鲜水果二三级皮薄柠檬切片泡茶榨汁酸味十足4斤</span></p>
                        <p class="orange f24">￥200</p>
                    </div>
                    <div class="track-shade tran05"></div>
                </li>
                <li>
                    <div class="track-detail tran05">
                        <p><img src="/static/images/detail_0.jpg"></p>
                        <p><span class="block text-clip">华秧安岳黄柠檬新鲜水果二三级皮薄柠檬切片泡茶榨汁酸味十足4斤</span></p>
                        <p class="orange f24">￥200</p>
                    </div>
                    <div class="track-shade tran05"></div>
                </li>
                <li>
                    <div class="track-detail tran05">
                        <p><img src="/static/images/detail_0.jpg"></p>
                        <p><span class="block text-clip">华秧安岳黄柠檬新鲜水果二三级皮薄柠檬切片泡茶榨汁酸味十足4斤</span></p>
                        <p class="orange f24">￥200</p>
                    </div>
                    <div class="track-shade tran05"></div>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
    module.exports = {
        props: ['track'],
        data(){
            return {
                touch: {
                    screenX: 0,
                    screenY: 0
                }
            }
        },
        methods: {
            m_ts: function(e){
                let _this = this
                //触摸点列表
                let touches = e.touches
                if (touches.length > 1) return //多点触控不予处理
                let touch = touches[0] //当前手指触控点
                let x = touch.screenX
                let y = touch.screenY
                _this.touch.screenX = x
                _this.touch.screenY = y
            },
            m_tm: function(e){

            },
            m_te: function(e){
                let _this = this
                let touches = e.changedTouches
                if (touches.length > 1) return //多点触控不予处理
                let touch = touches[0] //当前手指触控点
                let endX = touch.screenX
                let endY = touch.screenY
                let startX = _this.touch.screenX
                let startY = _this.touch.screenY
                let dx = startX - endX
                let dy = startY - endY

                if (dx === 0 && dy === 0){
                    _this.track.show = false    
                }
            }
        }
    }
</script>