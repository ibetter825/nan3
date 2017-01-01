<template>
  <section :class="['main', clz.tran]" v-move="{methods: move}" :style="style">
    <router-view keep-alive></router-view>
  </section>
</template>

<script>
    module.exports = {
        data() {
            return {
                y: 0,
                clz: {
                    tran: ''
                }
            }
        },
        computed: {
            style() {
                let dis = 'translateY(' + this.y + 'px)'
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
            down: function() {
                //下拉刷新
                alert('下拉刷新')
            },
            move: function(e) {
                let eo = e.evObj
                if (eo.moving) {
                    this.clz.tran = ''
                    this.y = eo.distanceY * -1
                } else {
                    this.clz.tran = 'tran05'
                    this.y = 0
                }
            }
        }
    }
</script>