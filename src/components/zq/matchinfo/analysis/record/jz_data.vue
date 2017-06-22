<template>
    <div v-if="noEmptyFlag">
        <div class="zhedie-box">
            <div class="zj-nav">
                <span class="saixuan" @click='boxShow=!boxShow'>筛选</span> 历史交战
            </div>
            <fight-box :matchesObj='jz_data' :isJz='isJz' v-if="jz_data">
            </fight-box>
        </div>
        <filter-box v-if="boxShow" type='jz_data' @confirm='updateData'></filter-box>
    </div>
</template>

<script>
import {aTypes} from '~store/matchinfo/zq.js'
import fightBox from '~components/zq/matchinfo/common/fight_box.vue'
import filterBox from '~components/zq/matchinfo/common/filter_box.vue'

export default {
    data () {
        return {
            boxShow: false,
            isJz: true
        }
    },
    components: {
        fightBox,
        filterBox
    },
    computed: {
        jz_data () {
            return this.$store.state.matchZq.jz_data
        },
        noEmptyFlag() {
            return this.noEmpty(this.jz_data)
        }
    },
    methods: {
        updateData(counts) {
            this.$store.dispatch(aTypes.getFilterData, {type: 'jz_data', dispatchType: 'getJzData', counts: counts})
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
