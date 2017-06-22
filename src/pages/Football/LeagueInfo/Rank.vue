<template>
    <rank-list :data="integrate" v-if="integrate"></rank-list>
</template>

<script>
import {aTypes} from '~store/leagueinfo/zq'
import rankList from '~components/zq/leagueinfo/rank_list.vue'

export default {
    components: {
        rankList
    },
    computed: {
        integrate() {
            return this.$store.state.leagueZq.integrate.all
        }
    },
    mounted() {
        this.$store.dispatch(aTypes.getAllData_Inter, this.$route.params.sid)
    }

}
</script>

<style lang="css">
</style>
