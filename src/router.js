/**
 * Created by lichun on 2017/5/10.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

const MatchInfo = () => import('~pages/MatchInfo.vue' /* webpackChunkName: "chunks/test" */)


Vue.use(VueRouter)

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/matchinfo',
            component: MatchInfo
        }
    ]
})
