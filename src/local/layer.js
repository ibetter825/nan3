export default function(options) {
    this.$store.dispatch('layer_show', false) //先隐藏
        //初始化弹出层配置
    this.$store.dispatch('layer_init', options);
    let _this = this
    setTimeout(function() {
        _this.$store.dispatch('layer_show', true) //后显示
    }, 1); //如果不采用定时器，相连两个弹层不会有动画效果
}