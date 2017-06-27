<template>
    <div>
        <div class="we l-flex-column bg-c1">
            <div class="">
                数据由<span class="company">500彩票网</span>提供
            </div>
        </div>
        <schedule></schedule>
        <analysis></analysis>
        <refresh-box :dispatchName='aTypes.getAllData' :param='$route.params.fid'></refresh-box>
    </div>
</template>

<script>
import {aTypes} from '~store/matchinfo/zq.js'
import schedule from '~components/zq/matchinfo/schedule.vue'
import analysis from '~components/zq/matchinfo/analysis.vue'
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
