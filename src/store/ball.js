export default {
    //ball全局共用组件，状态通过vuex管理
    state: {
        show: false,
        current: null, //用来计算小球起始位置的元素
        target: null, //用来计算小球结束位置的元素
        start: { //小球起始位置
            left: '',
            top: ''
        },
        end: { //小球结束位置
            left: '',
            top: ''
        }
    },
    mutations: {
        ball_show(state, show) {
            state.show = show
        },
        ball_init(state, params) {
            let temp = params.current
            if (typeof temp === 'string') {
                temp = document.querySelector(temp)
                state.current = temp || temp[0]
            } else
                state.current = params.current

            temp = params.target
            if (typeof temp === 'string') {
                temp = document.querySelector(temp)
                state.target = temp || temp[0]
            } else
                state.target = params.target
            if (!state.show) state.show = true
        },
        // 设置
        ball_start(state, start) {
            Object.assign(state.start, start)
        },
        ball_end(state, end) {
            Object.assign(state.end, end)
        }
    },
    actions: {
        ball_show(context, show) {
            context.commit('ball_show', show)
        },
        ball_init(context, params) {
            context.commit('ball_init', params)
        },
        ball_start(context, start) {
            context.commit('ball_start', start)
        },
        ball_end(context, end) {
            context.commit('ball_end', end)
        }
    }
}