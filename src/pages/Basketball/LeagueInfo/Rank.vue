<template>
    <section class="count-main l-flex-1 l-relative" v-if="rank">
        <div class="inte-main l-full l-scroll-y" v-if="noEmptyFlag">
            <rank-list-n :data="rank.values" v-if="isNBA"></rank-list-n>
            <div class="games-list rank-tb" v-else>
                <rank-list :data="rank.values"></rank-list>
            </div>
        </div>
        <prompt v-else type="no-data" tip0="暂无数据"/>
        <refresh-box :dispatchName='aTypes.getRank' :param='$store.state.leagueLq.params'></refresh-box>
    </section>
</template>

<script>
import {aTypes} from '~store/leagueinfo/lq'
import rankListN from '~components/lq/leagueinfo/rank_list_nba.vue'
import rankList from '~components/lq/leagueinfo/rank_list.vue'
import refreshBox from '~components/common/refresh_box.vue'
import Prompt from '~components/common/prompt.vue'

export default {
    components: {
        rankListN,
        rankList,
        refreshBox,
        Prompt
    },
    data() {
        return {
            aTypes
        }
    },
    computed: {
        rank() {
            return this.$store.state.leagueLq.rank
        },
        isNBA() {
            return this.rank && this.rank.rettype === 'object'
        },
        noEmptyFlag() {
            return this.noEmpty(this.rank.values)
        }
    },
    methods: {
        noEmpty(obj) {
            if (obj) return !!Object.keys(obj).length
            return false
        }
    },
    mounted() {
        if(this.$store.state.leagueLq.rank && this.$store.state.leagueLq.params.sid === this.$route.params.sid) return
        this.$store.dispatch(aTypes.getAllData_Rank, this.$route.params.sid)
    }

}
</script>

<style lang="css">
</style>
