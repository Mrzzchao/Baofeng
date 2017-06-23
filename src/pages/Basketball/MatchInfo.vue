<template>
    <div>
        <schedule></schedule>
        <analysis></analysis>
        <refresh-box :dispatchName='aTypes.getAllData' :param='$route.params.fid'></refresh-box>
    </div>
</template>

<script>
import {aTypes} from '~store/matchinfo/lq.js'
import schedule from '~components/lq/matchinfo/schedule.vue'
import analysis from '~components/lq/matchinfo/analysis.vue'
import refreshBox from '~components/common/refresh_box.vue'

export default {
    components: {
        schedule,
        analysis,
        refreshBox
    },
    data() {
        return {
            aTypes
        }
    },
    mounted () {
        this.$store.dispatch(aTypes.getAllData, this.$route.params.fid)
    }
}
</script>

<style lang="css">
</style>
