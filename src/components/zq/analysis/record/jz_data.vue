<template>
    <div>
        <fight-box :matchesObj='jz_data' v-if="jz_data">
            <div class="zj-nav" slot='header'>
                <span class="saixuan" @click='boxShow=!boxShow'>筛选</span> 历史交战
            </div>
        </fight-box>
        <filter-box v-if="boxShow" type='jz_data' dispatchType='getRecentRecord' @confirm=''></filter-box>
    </div>
</template>

<script>
import fightBox from '~components/zq/common/fight_box.vue'
import filterBox from '~components/zq/common/filter_box.vue'

export default {
    data() {
        return {
            boxShow: false
        }
    },
    components: {
        fightBox,
        filterBox
    },
    computed: {
        jz_data() {
            return this.$store.state.zqInfo.jz_data
        }
    },
    methods: {

    }
}
</script>

<style lang="css">
</style>
