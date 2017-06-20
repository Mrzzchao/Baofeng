<template>
    <div>
        <div class="zhedie-box" v-if="noEmptyFlag">
            <div class="gl-nav">
                球队统计
            </div>
            <div class="zhedie">
                <ul class="zhzl-list">
                    <li class="responsive" v-for="(name, type) in StatisticsType_LQ">
                        <div class="zhzl-left">
                            {{statistics.away.zj[type]}}
                        </div>
                        <div class="each-resone">
                            <div class="zhzl-classify">
                                {{name}}
                            </div>
                            <div class="responsive">
                                <div class="each-resone l-relative">
                                    <div class="zhzl-vs-left" :class="makeColorClass(type)" :style="makeWidthStyle(type)">
                                    </div>
                                </div>
                                <div class="each-resone l-relative">
                                    <div class="zhzl-vs-right" :class="makeColorClass(type, true)" :style="makeWidthStyle(type, true)">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="zhzl-right">
                            {{statistics.home.zj[type]}}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="zhedie-box" v-for="hoa in ['away', 'home']" v-if="baseinfo && noEmptyFlag">
            <div class="gl-nav">
                {{baseinfo[hoa + 'sxname']}}统计
            </div>
            <div class="jie-detail" v-for="(name, tab) in tabs">
                <div class="jie-detailL">
                    <div class="t-nav bgnav">
                        {{name}}球员
                    </div>
                    <ul class="t-detail bri">
                        <li v-for="member in statistics[hoa][tab]">{{member.player}}</li>
                    </ul>
                </div>
                <div class="jie-detailR">
                    <div class="slide-box">
                        <div class="t-nav bgnav">
                            <div class="responsive">
                                <div class="wjie" v-for="(th, type) in Statistics_LQ_TH">
                                    {{th}}
                                </div>
                            </div>
                        </div>
                        <ul class="t-detail">
                            <li class="responsive" v-for="member in statistics[hoa][tab]">
                                <div class="wjie" v-for="(th, type) in Statistics_LQ_TH">
                                    {{member[type]}}
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="white-shadow">
                        <div class="t-nav">
                            &nbsp;
                        </div>
                        <ul class="t-detail">
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {StatisticsType_LQ, Statistics_LQ_TH} from '~common/constants'

export default {
    data() {
        return {
            StatisticsType_LQ,
            Statistics_LQ_TH,
            tabs: {
                sf: '首发',
                tb: '替补'
            }
        }
    },
    computed: {
        baseinfo() {
            return this.$store.state.lqInfo.baseinfo
        },
        statistics() {
            return this.$store.state.lqInfo.statistics
        },
        noEmptyFlag() {
            return this.noEmpty(this.statistics)
        }
    },
    methods: {
        makeWidthStyle(key, isReverse) {
            let home = parseInt(this.statistics.home.zj[key])
            let away = parseInt(this.statistics.away.zj[key])
            let result = (home / (home + away)) * 100
            if (isReverse) {
                return `width: ${result}%`
            }
            return `width: ${100 - result}%`
        },
        makeColorClass(key, isReverse, class_l = 'zhzl-green', class_s = 'zhzl-gray') {
            let home = parseInt(this.statistics.home.zj[key])
            let away = parseInt(this.statistics.away.zj[key])
            if (isReverse) {
                return home > away ? class_l : class_s
            }
            return home < away ? class_l : class_s
        },
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
