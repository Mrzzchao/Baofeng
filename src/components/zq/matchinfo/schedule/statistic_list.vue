<template>
    <div v-if="noEmptyFlag">
	<div class="sk-nav">
		统计
	</div>
	<div class="tongji-box">
		<div class="zhzl-box">
			<div class="zhzl-title">
				控球率
			</div>
			<div class="zhzl-vs">
				<div class="zhzl-l" :class="makeColorClass('ballcontrol_rate')" :style="makeWidthStyle('ballcontrol_rate')">
					<div class="wua">
						<div class="hh">
						</div>
					</div>
				</div>
                <div class="zhzl-r" :class="makeColorClass('ballcontrol_rate', true)" :style="makeWidthStyle('ballcontrol_rate', true)">
					<div class="wua">
						<div class="hh">
						</div>
					</div>
				</div>
			</div>
			<div class="zhzl-bfb-left">
				{{+statistics.h_ballcontrol_rate}}<i>%</i>
			</div>
			<div class="zhzl-bfb-right">
				{{+statistics.a_ballcontrol_rate}}<i>%</i>
			</div>
		</div>
		<div class="zhedie">
			<ul class="zhzl-list">
				<li class="responsive" v-for="(name, type) in StatisticsType_ZQ">
    				<div class="zhzl-left">
    					{{statistics['h_' + type]}}
    				</div>
    				<div class="each-resone">
    					<div class="zhzl-classify">
    						{{name}}
    					</div>
    					<div class="responsive">
    						<div class="each-resone l-relative">
    							<div class="zhzl-vs-left" :class="leftColorClass[type]" :style="leftWidthStyle[type]">
    							</div>
    						</div>
    						<div class="each-resone l-relative">
    							<div class="zhzl-vs-right" :class="rightColorClass[type]" :style="rightWidthStyle[type]">
    							</div>
    						</div>
    					</div>
    				</div>
    				<div class="zhzl-right">
                        {{statistics['a_' + type]}}
    				</div>
				</li>
			</ul>
		</div>
	</div>
</div>
</template>

<script>
import {StatisticsType_ZQ} from '~common/constants'
export default {
    data() {
        return {
            StatisticsType_ZQ
        }
    },
    computed: {
        statistics () {
            return this.$store.state.matchZq.situation && this.$store.state.matchZq.situation.statistic
        },
        leftColorClass() {
            let colorObj = {}
            for (var type in this.StatisticsType_ZQ) {
                if (this.StatisticsType_ZQ.hasOwnProperty(type)) {
                    colorObj[type] = this.makeColorClass(type)
                }
            }
            return colorObj
        },
        rightColorClass() {
            let colorObj = {}
            for (var type in this.StatisticsType_ZQ) {
                if (this.StatisticsType_ZQ.hasOwnProperty(type)) {
                    colorObj[type] = this.makeColorClass(type, true)
                }
            }
            return colorObj
        },
        leftWidthStyle() {
            let widthObj = {}
            for (var type in this.StatisticsType_ZQ) {
                if (this.StatisticsType_ZQ.hasOwnProperty(type)) {
                    widthObj[type] = this.makeWidthStyle(type)
                }
            }
            return widthObj
        },
        rightWidthStyle() {
            let widthObj = {}
            for (var type in this.StatisticsType_ZQ) {
                if (this.StatisticsType_ZQ.hasOwnProperty(type)) {
                    widthObj[type] = this.makeWidthStyle(type, true)
                }
            }
            return widthObj
        },
        noEmptyFlag () {
            return this.noEmpty(this.statistics)
        }
    },
    methods: {
        makeWidthStyle (key, isReverse) {
            let home = parseInt(this.statistics['h_' + key])
            let away = parseInt(this.statistics['a_' + key])
            let result = (home / (home + away)) * 100
            if (isReverse) {
                return `width: ${100 - result}%`
            }
            return `width: ${result}%`
        },
        makeColorClass (key, isReverse, class_l = 'green-bg', class_s = 'gray-bg') {
            let home = +(this.statistics['h_' + key])
            let away = +(this.statistics['a_' + key])
            if (isReverse) { return home < away ? class_l : class_s }
            return home > away ? class_l : class_s
        },
        noEmpty (obj) {
            if (obj) { return !!Object.keys(obj).length }
            return false
        }
    }
}
</script>

<style lang="css">
</style>
