<template>
    <div>
        <!-- <score-rank></score-rank> -->
        <jz-data></jz-data>
        <!-- <recent-record></recent-record>
        <future-match></future-match> -->
    </div>
</template>

<script>
import scoreRank from '~components/zq/analysis/record/score_rank.vue'
import jzData from '~components/zq/analysis/record/jz_data.vue'
import recentRecord from '~components/zq/analysis/record/recent_record.vue'
import futureMatch from '~components/zq/analysis/record/future_match.vue'

export default {
    components: {
        scoreRank,
        jzData,
        recentRecord,
        futureMatch
    }
}
</script>

<style lang="css">
</style>
