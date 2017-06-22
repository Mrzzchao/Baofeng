<template>
    <div>
        <!-- <cup-rank v-if="isCup === '1'"></cup-rank> -->
        <NBA-rank v-if="isNBA"></NBA-rank>
        <league-rank v-else></league-rank>
        <jz-data></jz-data>
        <recent-record></recent-record>
        <!-- <future-match></future-match> -->
    </div>
</template>

<script>
import leagueRank from '~components/lq/matchinfo/analysis/record/league_rank.vue'
import NBARank from '~components/lq/matchinfo/analysis/record/nba_rank.vue'
import cupRank from '~components/lq/matchinfo/analysis/record/cup_rank.vue'
import jzData from '~components/lq/matchinfo/analysis/record/jz_data.vue'
import recentRecord from '~components/lq/matchinfo/analysis/record/recent_record.vue'
import futureMatch from '~components/lq/matchinfo/analysis/record/future_match.vue'

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
            return this.$store.state.matchLq.baseinfo
        },
        isNBA() {
            return this.$store.state.matchLq.baseinfo && (this.$store.state.matchLq.baseinfo.simpleleague === 'NBA')
        }
    }
}
</script>

<style lang="css">
</style>
