<template>
    <div class="wrapper l-flex-column">
        <rank-list :data="integrate" v-if="integrate"></rank-list>
        <refresh-box :dispatchName='aTypes.getIntegrate' :param='$store.state.leagueZq.params'></refresh-box>
    </div>
</template>

<script>
import {aTypes} from '~store/leagueinfo/zq'
import rankList from '~components/zq/leagueinfo/rank_list.vue'
import refreshBox from '~components/common/refresh_box.vue'

export default {
    data() {
        return {
            aTypes
        }
    },
    components: {
        rankList,
        refreshBox
    },
    computed: {
        integrate() {
            return this.$store.state.leagueZq.integrate.all
        }
    },
    mounted() {
        if(this.$store.state.leagueZq.integrate.all && this.$store.state.leagueZq.params.sid === this.$route.params.sid) return
        this.$store.dispatch(aTypes.getAllData_Inter, this.$route.params.sid)
    }

}
</script>

<style lang="css">
</style>
