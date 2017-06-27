import Vue from 'vue'
import VueRouter from 'vue-router'

const Football = require('~pages/Football.vue')
const FootballMatchInfo = require('~pages/Football/MatchInfo.vue')
const FootballLeagueInfo = require('~pages/Football/LeagueInfo.vue')
const FootballLeagueInfoRank = require('~pages/Football/LeagueInfo/Rank.vue')
const FootballLeagueInfoFx = require('~pages/Football/LeagueInfo/Statistics.vue')


const Basketball = require('~pages/Basketball.vue')
const BasketballMatchInfo = require('~pages/Basketball/MatchInfo.vue')
const BasketballLeagueInfo = require('~pages/Basketball/LeagueInfo.vue')
const BasketballLeagueInfoRank = require('~pages/Basketball/LeagueInfo/Rank.vue')
const BasketballLeagueInfoFx = require('~pages/Basketball/LeagueInfo/Statistics.vue')

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/zq',
            component: Football,
            name: 'football',
            children: [
                {
                    path: ':fid/matchinfo',
                    component: FootballMatchInfo,
                    name: 'football-matchinfo'
                },
                {
                    path: 'leagueinfo/:sid',
                    component: FootballLeagueInfo,
                    name: 'football-leagueinfo',
                    meta: {
                        tab: 'schedule'
                    },
                    children: [
                        {
                            path: 'fx',
                            component: FootballLeagueInfoFx,
                            name: 'football-leagueinfo-fx',
                            meta: {
                                tab: 'statistics'
                            }
                        },
                        {
                            path: 'rank',
                            component: FootballLeagueInfoRank,
                            name: 'football-leagueinfo-rank',
                            meta: {
                                tab: 'rank'
                            }
                        },
                        {
                            path: '*',
                            redirect: 'rank'
                        }
                    ]
                }
            ]
        },
        {
            path: '/lq',
            component: Basketball,
            name: 'basketball',
            children: [
                {
                    path: ':fid/matchinfo',
                    component: BasketballMatchInfo,
                    name: 'basketball-matchinfo'
                },
                {
                    path: 'leagueinfo/:sid',
                    component: BasketballLeagueInfo,
                    name: 'basketball-leagueinfo',
                    meta: {
                        tab: 'schedule'
                    },
                    children: [
                        {
                            path: 'fx',
                            component: BasketballLeagueInfoFx,
                            name: 'basketball-leagueinfo-fx',
                            meta: {
                                tab: 'statistics'
                            }
                        },
                        {
                            path: 'rank',
                            component: BasketballLeagueInfoRank,
                            name: 'basketball-leagueinfo-rank',
                            meta: {
                                tab: 'rank'
                            }
                        },
                        {
                            path: '*',
                            redirect: 'rank'
                        }
                    ]
                }
            ]
        }
    ]
})
