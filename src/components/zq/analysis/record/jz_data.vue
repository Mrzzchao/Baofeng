<template>
    <fight-box :matchesObj='jz_data' v-if="jz_data"></fight-box>
</template>

<script>
import fightBox from '~components/zq/common/fight_box.vue'

export default {
    components: {
        fightBox
    },
    computed: {
        jz_data() {
            return this.$store.state.zqInfo.jz_data
        }
    }
}
</script>

<style lang="css">
</style>
