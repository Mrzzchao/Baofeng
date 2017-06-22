<template>
    <statistics-list :data='statistics' v-if="statistics"></statistics-list>
</template>

<script>
import {aTypes} from '~store/leagueinfo/zq'
import statisticsList from '~components/zq/leagueinfo/statistic_list.vue'

export default {
    components: {
        statisticsList
    },
    computed: {
        statistics() {
            return this.$store.state.leagueZq.statistics
        }
    },
    mounted() {
        this.$store.dispatch(aTypes.getAllData_Stat, this.$route.params.sid)
    }
}
</script>

<style lang="css">
</style>
