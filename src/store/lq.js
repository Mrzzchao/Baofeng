import ajax from '~common/ajax'
import {mapActions, mapMutations} from '~common/util'
const ns = 'lq'

const state = {
    baseinfo: null,
    events: null,
    statistics: null,
    best3: null,
    members: null,
    nbarank: null,
    leaguerank: null,
    jz_data: null,
    recent_record: null,
    params: {
        fid: null,
        stageid: null,
        homeid: null,
        awayid: null,
        matchid: null,
        matchdate: null,
        group: null,
        stagemode: null,
        seasonid: null,
        vtype: 1
    }
}
const actionsInfo = mapActions({
    async getBaseInfo ({commit}, fid) {
        const baseinfo = await ajax.get(`/score/lq/baseinfo?fid=${fid}`)
        commit(mTypes.setBaseInfo, baseinfo)
        commit(mTypes.setParams, {
            fid: baseinfo.fid,
            stageid: baseinfo.stageid,
            homeid: baseinfo.homeid,
            awayid: baseinfo.awayid,
            matchid: baseinfo.matchid,
            matchdate: baseinfo.matchdate,
            group: baseinfo.group,
            stagemode: baseinfo.stagemode,
            seasonid: baseinfo.seasonid,
            vtype: 1
        })
        return baseinfo
    },
    async getEvents ({commit}, {fid}) {
        const events = await ajax.get(`/score/lq/events?fid=${fid}&T=${Date.now()}`)
        commit(mTypes.setEvents, events)
        return events
    },
    async getStatistics ({commit}, {fid}) {
        const statistics = await ajax.get(`/score/lq/statistics?fid=${fid}&T=${Date.now()}`)
        commit(mTypes.setStatistics, statistics)
        return statistics
    },
    async getBestMember ({commit}, {homeid, awayid, seasonid}) {
        const best3 = await ajax.get(`/score/lq/best3?homeid=${homeid}&awayid=${awayid}&seasonid=${seasonid}&T=${Date.now()}`)
        commit(mTypes.setBestMember, best3)
        return best3
    },
    async getMembers ({commit}, {homeid, awayid, seasonid, vtype}) {
        const members = await ajax.get(`/score/lq/members?homeid=${homeid}&awayid=${awayid}&seasonid=${seasonid}&vtype=${vtype}&T=${Date.now()}`)
        commit(mTypes.setMembers, members)
        return members
    },
    async getNBARank ({commit}, {homeid, awayid, seasonid}) {
        const nbarank = await ajax.get(`/score/lq/nbarank?homeid=${homeid}&awayid=${awayid}&seasonid=${seasonid}&T=${Date.now()}`)
        commit(mTypes.setNBARank, nbarank)
        return nbarank
    },
    async getLeaguerank ({commit}, {fid, stageid, homeid, awayid, matchid, matchdate, group, stagemode}) {
        const leaguerank = await ajax.get(`/score/lq/leaguerank?fid=${fid}&stageid=${stageid}&homeid=${homeid}&awayid=${awayid}&matchid=${matchid}&matchdate=${matchdate}&group=${group}&stagemode=${stagemode}&T=${Date.now()}`)
        commit(mTypes.setLeaguerank, leaguerank)
        return leaguerank
    },
    async getJzData ({commit}, {fid, stageid, homeid, awayid, matchdate}) {
        const jz_data = await ajax.get(`/score/lq/jz_data?fid=${fid}&stageid=${stageid}&homeid=${homeid}&awayid=${awayid}&matchdate=${matchdate}&T=${Date.now()}`)
        commit(mTypes.setJzData, jz_data)
        return jz_data
    },
    async getRecentRecord ({commit}, {fid, stageid, homeid, awayid, matchdate}) {
        const recent_record = await ajax.get(`/score/lq/recent_record?fid=${fid}&stageid=${stageid}&homeid=${homeid}&awayid=${awayid}&matchdate=${matchdate}&T=${Date.now()}`)
        commit(mTypes.setRecentRecord, recent_record)
        return recent_record
    },
    async getAllData ({state, commit, dispatch}, fid) {
        await dispatch(aTypes.getBaseInfo, fid)
        dispatch(aTypes.getEvents, state.params)
        dispatch(aTypes.getStatistics, state.params)
        dispatch(aTypes.getBestMember, state.params)
        // dispatch(aTypes.getMembers, state.params)
        dispatch(aTypes.getNBARank, state.params)
        dispatch(aTypes.getLeaguerank, state.params)
        dispatch(aTypes.getJzData, state.params)
        dispatch(aTypes.getRecentRecord, state.params)
    }
}, ns)

const mutationsInfo = mapMutations({
    setBaseInfo (state, baseinfo) {
        state.baseinfo = baseinfo
    },
    setEvents (state, events) {
        state.events = events
    },
    setStatistics (state, statistics) {
        state.statistics = statistics
    },
    setBestMember (state, best3) {
        state.best3 = best3
    },
    setMembers (state, members) {
        state.members = members
    },
    setNBARank (state, nbarank) {
        state.nbarank = nbarank
    },
    setLeaguerank (state, leaguerank) {
        state.leaguerank = leaguerank
    },
    setJzData (state, jz_data) {
        state.jz_data = jz_data
    },
    setRecentRecord (state, recent_record) {
        state.recent_record = recent_record
    },
    setParams (state, params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                state.params[key] = params[key]
            }
        }
    }
}, ns)

const actions = actionsInfo.actions
const mutations = mutationsInfo.mutations
export const aTypes = actionsInfo.aTypes
export const mTypes = mutationsInfo.mTypes
export default {state, actions, mutations}
