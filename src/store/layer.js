//默认配置
export const LAYER_DEFAULT = {
    type: 0, //0 信息框 1 页面层 2 加载层
    content: '', //弹出层内容
    title: '', //弹出层标题, '标题' 或 ['标题', 'background-color: #eee;']
    time: 0, //设置关闭层所需秒数,默认不开启
    style: '', // 自定义样式层 eg: 'border:none; background-color:#78BA32; color:#fff;'
    skin: '', //设置弹出层显示风格
    className: '', //自定义一个css类
    btn: '', // String / Array 不设置则不显示按钮。如果只需要一个按钮，则btn: '按钮'，如果有两个，则：btn: ['按钮一', '按钮二']。
    anim: 'scale', //String/Boolean 可支持的支持动画配置：scale（默认）、up（从下往上弹出），如果不开启动画，设置false即可
    shade: true,
    shadeClose: true,
    fixed: true,
    top: null,
    success: null,
    yes: null,
    no: null,
    end: null
}

export default {
    state: {
        options: {}
    },
    mutations: {
        //设置
        layer_set(state, options) {
            state[options] = options;
        },
        //初始化
        layer_init(state, options) {
            state[options] = options;
        },
    },
    actions: {
        layer_set(context, options) {
            context.commit('layer_set', options);
        },
        layer_init(context, options) {
            context.commit('layer_init', Object.assign({}, options, LAYER_DEFAULT));
        }
    }
}