export default function(params) {
    if(typeof params === 'boolean'){//params为设置弹出层状态true/false
        this.$store.dispatch('layer_show', params) //先隐藏
        return 
    }
    //params为弹出层的配置
    this.$store.dispatch('layer_show', false) //先隐藏
        //初始化弹出层配置
    this.$store.dispatch('layer_init', params);
    let _this = this
    setTimeout(function() {
        _this.$store.dispatch('layer_show', true) //后显示
    }, 1); //如果不采用定时器，相连两个弹层不会有动画效果
}