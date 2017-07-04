<template>
    <div class="wrapper">
        <!-- <league-header :tabs='tabs'></league-header> -->
        <div class="we l-flex-column">
            <div class="">
                数据由<span class="company">500彩票网</span>提供
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import leagueHeader from '~components/common/league_header.vue'
export default {
    components: {
        leagueHeader
    },
    data () {
        return {
            tabs: [
                {
                    type: 'rank',
                    name: '排名',
                    to: `/lq/leagueinfo/${this.$route.params.sid}/rank`
                },
                {
                    type: 'statistics',
                    name: '统计',
                    to: `/lq/leagueinfo/${this.$route.params.sid}/fx`
                }
            ]
        }
    },

}
</script>

<style lang="css">
</style>
