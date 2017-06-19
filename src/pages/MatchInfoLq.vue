<template>
    <div>
        <schedule></schedule>
        <!-- <analysis></analysis> -->
    </div>
</template>

<script>
import {aTypes} from '~store/lq.js'
import schedule from '~components/lq/schedule.vue'
import analysis from '~components/lq/analysis.vue'

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
