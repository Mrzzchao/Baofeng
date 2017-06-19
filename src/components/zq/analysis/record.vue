<template>
    <div v-if="isCup">
        <cup-rank v-if="isCup === '1'"></cup-rank>
        <league-rank v-else></league-rank>

        <jz-data></jz-data>
        <recent-record></recent-record>
        <!-- <future-match></future-match> -->
    </div>
</template>

<script>
import leagueRank from '~components/zq/analysis/record/league_rank.vue'
import cupRank from '~components/zq/analysis/record/cup_rank.vue'
import jzData from '~components/zq/analysis/record/jz_data.vue'
import recentRecord from '~components/zq/analysis/record/recent_record.vue'
import futureMatch from '~components/zq/analysis/record/future_match.vue'

export default {
    components: {
        leagueRank,
        cupRank,
        jzData,
        recentRecord,
        futureMatch
    },
    computed: {
        baseinfo() {
            return this.$store.state.zqInfo.baseinfo
        },
        isCup() {
            return this.$store.state.zqInfo.baseinfo && this.$store.state.zqInfo.baseinfo.is_cup
        }
    }
}
</script>

<style lang="css">
</style>
