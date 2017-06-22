<template>
    <section class="l-flex-1 l-relative" v-if="rank">
        <div class="inte-main l-full l-scroll-y" v-if="noEmptyFlag">
            <rank-list-n :data="rank.values" v-if="isNBA"></rank-list-n>
            <div class="games-list rank-tb" v-else>
                <rank-list :data="rank.values"></rank-list>
            </div>
        </div>
    </section>
</template>

<script>
import {aTypes} from '~store/leagueinfo/lq'
import rankListN from '~components/lq/leagueinfo/rank_list_nba.vue'
import rankList from '~components/lq/leagueinfo/rank_list.vue'
export default {
    components: {
        rankListN,
        rankList
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
        this.$store.dispatch(aTypes.getAllData_Rank, this.$route.params.sid)
    }

}
</script>

<style lang="css">
</style>
