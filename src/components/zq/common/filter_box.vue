<template>
    <div>
        <div class="ui-alert">
            <div class="ui-alert-tit">筛选</div>
            <div class="sx-nav">赛事筛选</div>
            <ul class="sx-list">
                <li :class="{'cur': status.league === 0}" @click='status.league = 0'>全部赛事</li>
                <li :class="{'cur': status.league === 1}" @click='status.league = 1'>仅本赛事</li>
            </ul>
            <div class="sx-nav">主客场筛选</div>
            <ul class="sx-list">
                <li :class="{'cur': status.hoa === 0}" @click='status.hoa = 0'>全部</li>
                <li :class="{'cur': status.hoa === 1}" @click='status.hoa = 1'>主客场相同</li>
            </ul>
            <div class="sx-nav">场数筛选</div>
            <ul class="sx-list">
                <!--<repeat>: countOption in currOptions.countOptionList-->
                <!--[repeat-item]countOption in currOptions.countOptionList-->
                <li :class="{'cur': status.count === 0}" @click='status.count = 0'>{{counts[0]}}场</li>
                <!--[repeat-item]countOption in currOptions.countOptionList-->
                <li :class="{'cur': status.count === 1}" @click='status.count = 1'>{{counts[1]}}场</li>
                <!--</repeat>: countOption in currOptions.countOptionList-->
            </ul>
            <div class="ui-alert-ft">
                <div class="ui-alert-btn" @click='closeBox()'>取消</div>
                <div class="ui-alert-btn" @click='confirm()'>确定</div>
            </div>
        </div>
        <div class="ui-alert-layer" style="z-index: 95;" @click='closeBox()'></div>
    </div>
</template>

<script>
import {aTypes} from '~store/zq.js'
export default {
    props: {
        counts: {
            type: Array,
            default () {
                return [6, 12]
            }
        },
        type: {
            type: String,
            required: true
        }
    },
    computed: {
        status () {
            return this.$store.state.zqInfo.filter[this.type].status
        }
    },
    methods: {
        closeBox () {
            this.$parent.boxShow = false
        },
        confirm () {
            this.$store.dispatch(aTypes.setStatus, {type: this.type, status: this.status})
            this.$emit('confirm', this.counts)
            this.closeBox()
        }
    }
}
</script>

<style lang="css">
</style>
