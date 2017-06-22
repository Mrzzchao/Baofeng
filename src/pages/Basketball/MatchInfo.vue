<template>
    <div>
        <schedule></schedule>
        <analysis></analysis>
    </div>
</template>

<script>
import {aTypes} from '~store/matchinfo/lq.js'
import schedule from '~components/lq/matchinfo/schedule.vue'
import analysis from '~components/lq/matchinfo/analysis.vue'

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
