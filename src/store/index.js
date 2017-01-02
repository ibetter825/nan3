import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import layer from './layer'
import ball from './ball'

export default new Vuex.Store({
    strict: true,
    modules: {
        layer,
        ball
    }
})