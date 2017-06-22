import ajax from '~common/ajax'
import {mapActions, mapMutations} from '~common/util'
const ns = 'league/lq'

const state = {
    baseinfo: null,
    rank: null,
    statistics: null,
    statisticsArr: {},
    params: {
        sid: null,
        iscup: null,
        key: 'score'
    }
}
const actionsInfo = mapActions({
    async getBaseInfo ({commit}, sid) {
        const baseinfo = await ajax.get(`/library/lq/baseinfo?seasonid=${sid}&T=${Date.now()}`)
        commit(mTypes.setBaseInfo, baseinfo)
        commit(mTypes.setParams, {
            sid: baseinfo.seasonid,
            iscup: baseinfo.iscup
        })
        return baseinfo
    },
    async getRank ({commit}, {sid, iscup}) {
        const rank = await ajax.get(`/library/lq/rank?seasonid=${sid}&iscup=${iscup}&T=${Date.now()}`)
        commit(mTypes.setRank , rank)
        return rank
    },
    async getStatistics ({state, commit}, {sid, key}) {
        if(state.statisticsArr[key] && sid === state.params.sid) {
            commit(mTypes.setStatistics, state.statisticsArr[key])
            return
        }
        const statistics = await ajax.get(`/library/lq/statistic?seasonid=${sid}&key=${key}&T=${Date.now()}`)
        commit(mTypes.setStatistics, statistics)
        commit(mTypes.setStatisticsArr, {statistics, key})
        return statistics
    },
    async getAllData_Rank({state, dispatch}, sid) {
        if(state.rank && sid === state.params.sid) return
        await dispatch(aTypes.getBaseInfo, sid)
        dispatch(aTypes.getRank, state.params)
    },
    async getAllData_Stat({state, dispatch}, sid) {
        if(state.statistics && sid === state.params.sid) return
        await dispatch(aTypes.getBaseInfo, sid)
        dispatch(aTypes.getStatistics, state.params)
    },
    setParamKey({commit}, key) {
        commit(mTypes.setParamKey, key)
    }
}, ns)

const mutationsInfo = mapMutations({
    setBaseInfo (state, baseinfo) {
        state.baseinfo = baseinfo
    },
    setRank (state, rank) {
        state.rank = rank
    },
    setStatistics (state, statistics) {
        state.statistics = statistics
    },
    setStatisticsArr (state, {statistics, key}) {
        state.statisticsArr[key] = statistics
    },
    setParams (state, params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                state.params[key] = params[key]
            }
        }
    },
    setParamKey (state, key) {
        state.params.key = key
    }
}, ns)

const actions = actionsInfo.actions
const mutations = mutationsInfo.mutations
export const aTypes = actionsInfo.aTypes
export const mTypes = mutationsInfo.mTypes
export default {state, actions, mutations}
