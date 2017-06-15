import ajax from '~common/ajax'
import {mapActions, mapMutations} from '~common/util'
const ns = 'zq'

const state = {
    baseinfo: null,
    situation: null,
    leaguerank: null,
    cuprank: null,
    fifarank: null,
    jz_data: null,
    recent_record: null,
    future_match: null,
    params: {
        homeid: null,
        awayid: null,
        leagueid: null,
        stid: null,
        fid: null,
        matchdate: null,
        matchgroup: null,
        hoa: 0,
        limit: 6
    }
}
const actionsInfo = mapActions({
    async getBaseInfo ({commit}, fid) {
        const baseinfo = await ajax.get(`/score/zq/baseinfo?fid=${fid}`)
        commit(mTypes.setBaseInfo, baseinfo)
        commit(mTypes.setParams, {
            homeid: baseinfo.homeid,
            awayid: baseinfo.awayid,
            matchdate: baseinfo.matchtime.substr(0, 10),
            stid: baseinfo.stageid,
            fid: baseinfo.fid,
            matchgroup: baseinfo.matchgroup,
            leagueid: baseinfo.league_id
        })
        return baseinfo
    },
    async getLeaguerank ({commit}, {homeid, awayid, matchdate, stid, fid}) {
        const leaguerank = await ajax.get(`/score/zq/leaguerank?homeid=${homeid}&awayid=${awayid}&matchdate=${matchdate}&stid=${stid}&fid=${fid}`)
        commit(mTypes.setLeaguerank, leaguerank)
        return leaguerank
    },
    async getSituation ({commit},fid) {
        const situation = await ajax.get(`/score/zq/events_statistics?fid=${fid}`)
        commit(mTypes.setLeaguerank, situation)
        return situation
    },
    async getCupRank ({commit}, {matchgroup, matchdate, stid}) {
        const cuprank = await ajax.get(`/score/zq/cuprank?matchgroup=${matchgroup}&matchdate=${matchdate}&stid=${stid}`)
        commit(mTypes.setCuprank, cuprank)
        return cuprank
    },
    async getFifarank ({commit}, {homeid, awayid}) {
        const fifarank = await ajax.get(`/score/zq/fifarank?homeid=${homeid}&awayid=${awayid}`)
        commit(mTypes.setFifarank, fifarank)
        return fifarank
    },
    async getJzData ({commit}, {homeid, awayid, matchdate, leagueid, limit, hoa}) {
        const jz_data = await ajax.get(`/score/zq/jz_data?homeid=${homeid}&awayid=${awayid}&matchdate=${matchdate}&leagueid=${leagueid}&limit=${limit}&hoa=${hoa}`)
        commit(mTypes.setJzdata, jz_data)
        return jz_data
    },
    async getRecentRecord ({commit}, {homeid, awayid, matchdate, leagueid, stid, limit, hoa}) {
        const recent_rank = await ajax.get(`/score/zq/recent_record?homeid=${homeid}&awayid=${awayid}&matchdate=${matchdate}&leagueid=${leagueid}&stid=${stid}&limit=${limit}&hoa=${hoa}`)
        commit(mTypes.setRecentRecord, recent_rank)
        return recent_rank
    },
    async getFutureMatch ({commit}, {homeid, awayid, matchdate, fid}) {
        const future_match = await ajax.get(`/score/zq/future_match?homeid=${homeid}&awayid=${awayid}&matchdate=${matchdate}&fid=${fid}`)
        commit(mTypes.setFutureMatch, future_match)
        return future_match
    },

    async getAllData({dispatch, state}, fid) {
        await dispatch(aTypes.getBaseInfo, fid)
        dispatch(aTypes.getSituation, fid)
        dispatch(aTypes.getLeaguerank, state.params)
        dispatch(aTypes.getCupRank, state.params)
        dispatch(aTypes.getFifarank, state.params)
        dispatch(aTypes.getJzData, state.params)
        dispatch(aTypes.getRecentRecord, state.params)
        dispatch(aTypes.getFutureMatch, state.params)
    }

}, ns)

const mutationsInfo = mapMutations({
    setBaseInfo (state, baseinfo) {
        state.baseinfo = baseinfo
    },
    setSituation (state, situation) {
        state.situation = situation
    },
    setRecentRecord (state, recent_rank) {
        state.recent_rank = recent_rank
    },
    setCuprank (state, cuprank) {
        state.cuprank = cuprank
    },
    setLeaguerank (state, leaguerank) {
        state.leaguerank = leaguerank
    },
    setFifarank (state, fifarank) {
        state.fifarank = fifarank
    },
    setFutureMatch (state, future_match) {
        state.future_match = future_match
    },
    setJzdata (state, jz_data) {
        state.jz_data = jz_data
    },
    setParams (state, params) {
        state.params = params
    }
}, ns)

const actions = actionsInfo.actions
const mutations = mutationsInfo.mutations
export const aTypes = actionsInfo.aTypes
export const mTypes = mutationsInfo.mTypes
export default {state, actions, mutations}
