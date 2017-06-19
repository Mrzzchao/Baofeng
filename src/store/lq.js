import ajax from '~common/ajax'
import {mapActions, mapMutations} from '~common/util'
const ns = 'lq'

const state = {
    baseinfo: null,
    situation: null,
    leaguerank: null,
    cuprank: null,
    fifarank: null,
    jz_data: null,
    recent_record: null,
    future_match: null,
    lineup: null,
    formation: null,
    params: {
        homeid: null,
        awayid: null,
        leagueid: null,
        stid: null,
        fid: null,
        matchdate: null,
        matchgroup: null,
        isright: null,
        hoa: 0,
        limit: 6
    },
    filter: {  // 赛事过滤
        jz_data: {
            data: {},
            status: {          // 选择结果状态，0-左,1-右
                league: 0,
                hoa: 0,
                count: 0
            }
        },
        recent_record: {
            data: {},
            status: {          // 选择结果状态，0-左,1-右
                league: 0,
                hoa: 0,
                count: 0
            }
        }
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
            leagueid: -1,
            hoa: 0,
            limit: 6
        })
        return baseinfo
    },
    async getSituation ({commit}, fid) {
        const situation = await ajax.get(`/score/zq/events_statistics?fid=${fid}&T=${Date.now()}`)
        situation.eventlist.reverse()
        commit(mTypes.setSituation, situation)
        return situation
    },
    async getLeaguerank ({commit}, {homeid, awayid, matchdate, stid, fid}) {
        const leaguerank = await ajax.get(`/score/zq/leaguerank?homeid=${homeid}&awayid=${awayid}&matchdate=${matchdate}&stid=${stid}&fid=${fid}&T=${Date.now()}`)
        commit(mTypes.setLeaguerank, leaguerank)
        return leaguerank
    },
    async getCupRank ({commit}, {matchgroup, matchdate, stid}) {
        const cuprank = await ajax.get(`/score/zq/cuprank?matchgroup=${matchgroup}&matchdate=${matchdate}&stid=${stid}&T=${Date.now()}`)
        commit(mTypes.setCuprank, cuprank)
        return cuprank
    },
    async getFifarank ({commit}, {homeid, awayid}) {
        const fifarank = await ajax.get(`/score/zq/fifarank?homeid=${homeid}&awayid=${awayid}&T=${Date.now()}`)
        commit(mTypes.setFifarank, fifarank)
        return fifarank
    },
    async getJzData ({commit}, {homeid, awayid, matchdate, leagueid, limit, hoa}) {
        const jz_data = await ajax.get(`/score/zq/jz_data?homeid=${homeid}&awayid=${awayid}&matchdate=${matchdate}&leagueid=${leagueid}&limit=${limit}&hoa=${hoa}&T=${Date.now()}`)
        commit(mTypes.setJzData, jz_data)
        return jz_data
    },
    async getRecentRecord ({commit}, {homeid, awayid, matchdate, leagueid, stid, limit, hoa}) {
        const recent_record = await ajax.get(`/score/zq/recent_record?homeid=${homeid}&awayid=${awayid}&matchdate=${matchdate}&leagueid=${leagueid}&stid=${stid}&limit=${limit}&hoa=${hoa}&T=${Date.now()}`)
        commit(mTypes.setRecentRecord, recent_record)
        return recent_record
    },
    async getFutureMatch ({commit}, {homeid, awayid, matchdate, fid}) {
        const future_match = await ajax.get(`/score/zq/future_match?homeid=${homeid}&awayid=${awayid}&matchdate=${matchdate}&fid=${fid}&T=${Date.now()}`)
        commit(mTypes.setFutureMatch, future_match)
        return future_match
    },
    async getLineUp ({commit}, {fid, isright}) {
        const lineup = await ajax.get(`/score/zq/lineup?isright=${isright}&fid=${fid}&T=${Date.now()}`)
        commit(mTypes.setLineUp, lineup)
        return lineup
    },
    async getFormation ({commit}, {homeid, awayid, fid}) {
        const formation = await ajax.get(`/score/zq/formation?homeid=${homeid}&awayid=${awayid}&fid=${fid}&T=${Date.now()}`)
        commit(mTypes.setFormation, formation)
        return formation
    },
    async getAllData ({state, commit, dispatch}, fid) {
        await dispatch(aTypes.getBaseInfo, fid)
        dispatch(aTypes.getSituation, fid)
        dispatch(aTypes.getLeaguerank, state.params)
        dispatch(aTypes.getCupRank, state.params)
        // dispatch(aTypes.getFifarank, state.params)
        await dispatch(aTypes.getJzData, state.params)
        commit(mTypes.setFilterData_jz, '000')

        state.params.limit = 10
        await dispatch(aTypes.getRecentRecord, state.params)
        commit(mTypes.setFilterData_recent, '000')

        dispatch(aTypes.getLineUp, state.params)
        dispatch(aTypes.getFormation, state.params)
        // dispatch(aTypes.getFutureMatch, state.params)
    },

    async getFilterData ({state, commit, dispatch}, {type, dispatchType, counts}) {
        let key = ''
        let status = state.filter[type].status
        for (let str in status) {
            if (status.hasOwnProperty(str)) {
                key += status[str]
            }
        }

        if (state.filter[type].data && state.filter[type].data[key]) {
            commit(mTypes['set' + dispatchType.slice(3)], state.filter[type].data[key])
            return
        }
        dispatch(aTypes.setMatchParams, {type, counts})
        await dispatch(aTypes[dispatchType], state.params)
        if(~type.indexOf('jz'))
            commit(mTypes.setFilterData_jz, key)
        else
            commit(mTypes.setFilterData_recent, key)
    },
    setStatus ({commit}, {type, status}) {
        commit(mTypes.setStatus, {type, status})
    },
    setBoxShow ({commit}, statu) {
        commit(mTypes.setBoxShow, statu)
    },
    setMatchParams ({commit}, {type, counts}) {
        let paramsObj = {}
        if (state.filter[type].status.league === 1) {
            paramsObj.leagueid = state.baseinfo.league_id
        }
        else {
            paramsObj.leagueid = -1
        }

        if (state.filter[type].status.hoa === 0) {
            paramsObj.hoa = 0
        }
        else {
            paramsObj.hoa = 1
        }

        paramsObj.limit = counts[state.filter[type].status.count]
        commit(mTypes.setParams, paramsObj)
    }
}, ns)

const mutationsInfo = mapMutations({
    setBaseInfo (state, baseinfo) {
        state.baseinfo = baseinfo
    },
    setSituation (state, situation) {
        state.situation = situation
    },
    setRecentRecord (state, recent_record) {
        state.recent_record = recent_record
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
    setJzData (state, jz_data) {
        state.jz_data = jz_data
    },
    setLineUp (state, lineup) {
        state.lineup = lineup
    },
    setFormation (state, formation) {
        state.formation = formation
    },
    setFilterData_jz(state, key) {
        state.filter.jz_data.data[key] = state.jz_data
    },
    setFilterData_recent(state, key) {
        state.filter.recent_record.data[key] = state.recent_record
    },
    setParams (state, params) {
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                state.params[key] = params[key]
            }
        }
    },
    setStatus (state, {type, status}) {
        state.filter[type].status = status
    }
}, ns)

const actions = actionsInfo.actions
const mutations = mutationsInfo.mutations
export const aTypes = actionsInfo.aTypes
export const mTypes = mutationsInfo.mTypes
export default {state, actions, mutations}
