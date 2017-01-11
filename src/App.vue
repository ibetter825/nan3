<template>
  <section class="content">
    <transition name="fade">
      <router-view keep-alive></router-view>
    </transition>
    <transition name="fade">
      <n3-totop v-if="totop.show"></n3-totop>
    </transition>
    <layer-mobile v-if="layer.show"></layer-mobile>
  </section>
</template>
<script>
  module.exports = {
    data() {
      return {
        totop: {
          show: false
        }
      }
    },
    computed: {
      layer() {
        return this.$store.state.layer
      }
    },
    created() {
      let _this = this
      let _util = _this.$util
      _this.$scroll.register('app_scroll', function () {
        //返回顶部代码
        if (_util.scrollTop() > 200)
          _this.totop.show = true
        else
          _this.totop.show = false
      })
    }
  }
</script>