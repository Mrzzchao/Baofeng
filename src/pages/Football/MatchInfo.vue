<template>
    <div>
        <schedule></schedule>
        <analysis></analysis>
    </div>
</template>

<script>
import {aTypes} from '~store/matchinfo/zq.js'
import schedule from '~components/zq/matchinfo/schedule.vue'
import analysis from '~components/zq/matchinfo/analysis.vue'

export default {
    components: {
        schedule,
        analysis
    },
    mounted () {
        this.$store.dispatch(aTypes.getAllData, this.$route.params.fid)
    }
}
</script>

<style lang="css">
</style>
