import ajax from '~common/ajax'
import {mapActions, mapMutations} from '~common/util'
const ns = 'league/zq'

const state = {
    baseinfo: null,
    switches: null,
    progress: null,
    rank: null,
    statistics: null,
    integrate: {
        all: null,
        home: null,
        away: null
    },

    params: {
        sid: null,
        stid: null,
        swid: null,
        iscup: null,
        rtype: null,
        vtype: 'all'
    }
}
const actionsInfo = mapActions({
    async getBaseInfo ({commit}, sid) {
        const baseinfo = await ajax.get(`/library/zq/baseinfo?seasonid=${sid}&T=${Date.now()}`)
        commit(mTypes.setBaseInfo, baseinfo)
        commit(mTypes.setParams, {
            sid: baseinfo.seasonid,
            iscup: baseinfo.iscup
        })
        return baseinfo
    },
    async getIntegrate ({commit}, {sid, vtype, iscup}) {
        const integrate = await ajax.get(`/library/zq/integrate?seasonid=${sid}&iscup=${iscup}&vtype=${vtype}&T=${Date.now()}`)
        commit(mTypes.setIntegrate , integrate)
        return integrate
    },
    async getStatistics ({commit}, {sid}) {
        const statistics = await ajax.get(`/library/zq/statistic?seasonid=${sid}&T=${Date.now()}`)
        commit(mTypes.setStatistics, statistics)
        return statistics
    },
    async getAllData_Inter({state, dispatch}, sid) {
        await dispatch(aTypes.getBaseInfo, sid)
        dispatch(aTypes.getIntegrate, state.params)
    },
    async getAllData_Stat({state, dispatch}, sid) {
        await dispatch(aTypes.getBaseInfo, sid)
        dispatch(aTypes.getStatistics, state.params)
    }
}, ns)

const mutationsInfo = mapMutations({
    setBaseInfo (state, baseinfo) {
        state.baseinfo = baseinfo
    },
    setIntegrate (state, integrate) {
        state.integrate[state.params.vtype] = integrate
    },
    setStatistics (state, statistics) {
        state.statistics = statistics
    },
    setSwitches (state, switches) {
        state.switches = switches
    },
    setProgress (state, progress) {
        state.progress = progress
    },
    setParams (state, params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                state.params[key] = params[key]
            }
        }
    },
}, ns)

const actions = actionsInfo.actions
const mutations = mutationsInfo.mutations
export const aTypes = actionsInfo.aTypes
export const mTypes = mutationsInfo.mTypes
export default {state, actions, mutations}
