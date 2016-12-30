<template>
    <div>
      <layer-mobile :options="options"></layer-mobile>
    </div>
</template>
<script>
  //layer弹出层
  module.exports = {
    data(){
      return {}
    },
    computed: {
      options(){
        return {
          content: '信息框',
          btn: '我知道了'
        }
      }
    },
    created: function(){
      console.log(JSON.stringify(this.$store.state))
    }
  }
</script>