<template>
    <div v-if="noEmptyFlag">
        <div class="zhedie-box" v-if="noEmptyFlag_sf">
        	<div class="zj-nav">
        		预测首发
        	</div>
            <member-box :members='lineup.shoufa' v-if="noEmptyFlag_sf"></member-box>
            <div class="feed-back" v-else>
                <div class="feed-box">
                    <em>暂无数据</em>
                </div>
            </div>
        </div>

        <div class="zhedie-box" v-if="noEmptyFlag_sb">
        	<div class="zj-nav">
        		伤停阵容
        	</div>
            <member-box :members='lineup.shangbing' v-if="noEmptyFlag_sb"></member-box>
            <div class="feed-back" v-else>
                <div class="feed-box">
                    <em>暂无数据</em>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import memberBox from '~components/zq/matchinfo/common/member_box.vue'
export default {
    components: {
        memberBox
    },
    computed: {
        lineup() {
            return this.$store.state.matchZq.lineup
        },
        noEmptyFlag() {
            return this.noEmpty(this.lineup)
        },
        noEmptyFlag_sb() {
            return this.noEmpty(this.lineup.shangbing)
        },
        noEmptyFlag_sf() {
            return this.noEmpty(this.lineup.shoufa)
        }
    },
    methods: {
        noEmpty(obj) {
            if(obj) return !!Object.keys(obj).length
            return false
        }
    }
}
</script>

<style lang="css">
</style>
