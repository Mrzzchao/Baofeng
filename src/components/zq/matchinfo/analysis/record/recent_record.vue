<template>
    <div v-if="noEmptyFlag">
        <div class="zhedie-box">
            <div class="zj-nav">
                <span class="saixuan" @click='boxShow=!boxShow'>筛选</span> 近期战绩
            </div>
            <fight-box :matchesObj='recent_record.home'  v-if="noEmptyFlag_home">
            </fight-box>
            <fight-box :matchesObj='recent_record.away'  hoa='awaysxname' v-if="noEmptyFlag_away">
            </fight-box>
        </div>
        <filter-box v-if="boxShow" type='recent_record' :counts='[10, 20]' @confirm='updateData'></filter-box>
    </div>
</template>

<script>
import {aTypes} from '~store/matchinfo/zq.js'
import fightBox from '~components/zq/matchinfo/common/fight_box.vue'
import filterBox from '~components/zq/matchinfo/common/filter_box.vue'

export default {
    data () {
        return {
            boxShow: false
        }
    },
    components: {
        fightBox,
        filterBox
    },
    computed: {
        recent_record () {
            return this.$store.state.matchZq.recent_record
        },
        noEmptyFlag() {
            return this.noEmptyFlag_home && this.noEmptyFlag_away
        },
        noEmptyFlag_home() {
            return this.noEmpty(this.recent_record && this.recent_record.home)
        },
        noEmptyFlag_away() {
            return this.noEmpty(this.recent_record && this.recent_record.away)
        }
    },
    methods: {
        updateData(counts) {
            this.$store.dispatch(aTypes.getFilterData, {type: 'recent_record', dispatchType: 'getRecentRecord', counts: counts})
        },
        noEmpty(obj) {
            if(obj)
                return !!Object.keys(obj).length
            return false
        }
    }
}
</script>

<style lang="css">
</style>
