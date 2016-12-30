import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import layer from './layer'

export default new Vuex.Store({
    strict: true,
    modules: {
        layer
    }
})