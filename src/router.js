/**
 * Created by lichun on 2017/5/10.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

const MatchInfoZq = () => import('~pages/MatchInfoZq.vue' /* webpackChunkName: "chunks/test" */)
const MatchInfoLq = () => import('~pages/MatchInfoLq.vue')

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/zq/:fid/matchinfo',
            component: MatchInfoZq,
            name: 'football-matchinfo'
        },
        {
            path: '/lq/:fid/matchinfo',
            component: MatchInfoLq,
            name: 'basketball-matchinfo'
        }
    ]
})
