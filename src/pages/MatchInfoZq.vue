<template>
    <div>
        <schedule></schedule>
        <analysis></analysis>
    </div>
</template>

<script>
import {aTypes} from '~store/zq.js'
import schedule from '~components/zq/schedule.vue'
import analysis from '~components/zq/analysis.vue'

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
