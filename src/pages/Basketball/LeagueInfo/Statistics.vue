<template>
<section class="count-main l-flex-1 l-relative">
    <div class="l-flex-row" v-if="noEmptyFlag">
        <div class="plleft l-flex-column">
            <ul class="plleft-list l-scroll-y l-flex-1">
                <li :class="{'cur': type === key}" v-for="(name, type) in statisticsType" v-tap='{methods: updateData, type: type}'>{{name}}</li>
            </ul>
        </div>
        <div class="plright l-flex-1 l-flex-column">
            <h2 class="average-tit"><em>球队</em>场均{{statisticsType[key]}}</h2>
            <ul class="average-list l-flex-1 l-scroll-y">
                <li class="average-item clear" v-for="(item, idx) in statistics">
                    <div class="aver-team">
                        <em class="aver-turn">{{idx+1}}</em><span class="aver-team-img"><img :src="item.teamlogo"><em class="aver-team-name">{{item.teamgbname}}</em></span>
                    </div>
                    <span class="aver-score">{{item.value}}</span>
                </li>

            </ul>
        </div>
    </div>
    <prompt v-else type="no-data" tip0="暂无数据" style="min-height: 10rem;width: 100%;background-color: #f4f4f4"/>
    <refresh-box :dispatchName='aTypes.getStatistics_Refresh' :param='{sid: $route.params.sid, key: key}'></refresh-box>
</section>
</template>

<script>
import {
    aTypes
} from '~store/leagueinfo/lq'
import {
    LeagueStatistictType_LQ
} from '~common/constants'
import refreshBox from '~components/common/refresh_box.vue'
import Prompt from '~components/common/prompt.vue'
import vueTap from 'v-tap'
import vue from 'vue'
vue.use(vueTap)

export default {
    components: {
        vueTap,
        refreshBox,
        Prompt
    },
    data() {
        return {
            statisticsType: LeagueStatistictType_LQ,
            key: 'score',
            aTypes
        }
    },
    computed: {
        statistics() {
            return this.$store.state.leagueLq.statistics
        },
        noEmptyFlag() {
            return this.noEmpty(this.statistics)
        }
    },
    methods: {
        updateData({type}) {
            this.key = type
            this.$store.dispatch(aTypes.setParamKey, type)
            this.$store.dispatch(aTypes.getStatistics, this.$store.state.leagueLq.params)
        },
        noEmpty(obj) {
            if (obj) return !!Object.keys(obj).length
            return false
        }
    },
    mounted() {
        if(this.$store.state.leagueLq.statistics && this.$store.state.leagueLq.params.sid === this.$route.params.sid) return
        this.$store.dispatch(aTypes.getAllData_Stat, this.$route.params.sid)
    }
}
</script>

<style lang="css">
</style>
