import Vue from 'vue'
import Vuex from 'vuex'
import ajax from '~common/ajax'
import matchZq from './matchinfo/zq.js'
import matchLq from './matchinfo/lq.js'
import leagueZq from './leagueinfo/zq.js'
import leagueLq from './leagueinfo/lq.js'

Vue.use(Vuex)

export default () => new Vuex.Store({
    modules: {
        matchZq,
        matchLq,
        leagueZq,
        leagueLq
    }
})
