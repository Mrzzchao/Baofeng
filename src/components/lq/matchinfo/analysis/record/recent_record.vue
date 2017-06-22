<template>
    <div v-if="noEmptyFlag">
        <div class="zhedie-box">
            <div class="zj-nav">
                近期战绩
            </div>
            <fight-box :matchesObj='recent_record.alist' hoa='awaysxname' v-if="noEmptyFlag_home">
            </fight-box>
            <fight-box :matchesObj='recent_record.hlist'  v-if="noEmptyFlag_away">
            </fight-box>
        </div>
    </div>
</template>

<script>
import fightBox from '~components/lq/matchinfo/common/fight_box.vue'

export default {
    data () {
        return {
            boxShow: false
        }
    },
    components: {
        fightBox
    },
    computed: {
        recent_record () {
            return this.$store.state.matchLq.recent_record
        },
        noEmptyFlag() {
            return this.noEmptyFlag_home && this.noEmptyFlag_away
        },
        noEmptyFlag_home() {
            return this.noEmpty(this.recent_record && this.recent_record.hlist)
        },
        noEmptyFlag_away() {
            return this.noEmpty(this.recent_record && this.recent_record.alist)
        }
    },
    methods: {
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
