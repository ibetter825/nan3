<template>
    <div>
      <layer-mobile></layer-mobile>
    </div>
</template>
<script>
  //layer弹出层
  module.exports = {
    data(){
      return {}
    },
    computed: {

    },
    created: function(){
      //初始化弹出层配置
      this.$store.dispatch('layer_init', {content: '信息框', btn: '我知道了'});
    }
  }
</script>