import Vue from 'vue'
import VueRouter from 'vue-router'

const Football = () => import('~pages/Football.vue')
const FootballMatchInfo = () => import('~pages/Football/MatchInfo.vue')
const FootballLeagueInfo = () => import('~pages/Football/LeagueInfo.vue')
const FootballLeagueInfoRank = () => import('~pages/Football/LeagueInfo/Rank.vue')
const FootballLeagueInfoFx = () => import('~pages/Football/LeagueInfo/Statistics.vue')


const Basketball = () => import('~pages/Basketball.vue')
const BasketballMatchInfo = () => import('~pages/Basketball/MatchInfo.vue')
const BasketballLeagueInfo = () => import('~pages/Basketball/LeagueInfo.vue')
const BasketballLeagueInfoRank = () => import('~pages/Basketball/LeagueInfo/Rank.vue')
const BasketballLeagueInfoFx = () => import('~pages/Basketball/LeagueInfo/Statistics.vue')

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
