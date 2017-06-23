<template>
    <div class="wrapper l-full l-flex-column">
        <statistics-list :data='statistics' v-if="statistics"></statistics-list>
        <refresh-box :dispatchName='aTypes.getStatistics' :param='$store.state.leagueZq.params'></refresh-box>
    </div>
</template>

<script>
import {aTypes} from '~store/leagueinfo/zq'
import statisticsList from '~components/zq/leagueinfo/statistic_list.vue'
import refreshBox from '~components/common/refresh_box.vue'

export default {
    data() {
        return {
            aTypes
        }
    },
    components: {
        statisticsList,
        refreshBox
    },
    computed: {
        statistics() {
            return this.$store.state.leagueZq.statistics
        }
    },
    mounted() {
        if(this.$store.state.leagueZq.statistics && this.$store.state.leagueZq.params.sid === this.$route.params.sid) return
        this.$store.dispatch(aTypes.getAllData_Stat, this.$route.params.sid)
    }
}
</script>

<style lang="css">
</style>
