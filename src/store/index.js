import Vue from 'vue'
import Vuex from 'vuex'
import ajax from '~common/ajax'
import zqInfo from './zq.js'
import lqInfo from './lq.js'

Vue.use(Vuex)

export default () => new Vuex.Store({
    modules: {
        zqInfo,
        lqInfo
    }
})
