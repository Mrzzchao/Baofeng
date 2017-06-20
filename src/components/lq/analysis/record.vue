<template>
    <div>
        <!-- <cup-rank v-if="isCup === '1'"></cup-rank> -->
        <!-- <league-rank></league-rank>
        <NBA-rank></NBA-rank> -->
        <jz-data></jz-data>
        <recent-record></recent-record>
        <!-- <future-match></future-match> -->
    </div>
</template>

<script>
import leagueRank from '~components/lq/analysis/record/league_rank.vue'
import NBARank from '~components/lq/analysis/record/nba_rank.vue'
import cupRank from '~components/lq/analysis/record/cup_rank.vue'
import jzData from '~components/lq/analysis/record/jz_data.vue'
import recentRecord from '~components/lq/analysis/record/recent_record.vue'
import futureMatch from '~components/lq/analysis/record/future_match.vue'

export default {
    components: {
        leagueRank,
        cupRank,
        NBARank,
        jzData,
        recentRecord,
        futureMatch
    },
    computed: {
        baseinfo() {
            return this.$store.state.lqInfo.baseinfo
        },
        isCup() {
            return this.$store.state.lqInfo.baseinfo && this.$store.state.zqInfo.baseinfo.is_cup
        }
    }
}
</script>

<style lang="css">
</style>
