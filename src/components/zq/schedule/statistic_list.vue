<template>
    <div v-if="statistics">
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
            return this.$store.state.zqInfo.situation && this.$store.state.zqInfo.situation.statistic
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
        }
    }
}
</script>

<style lang="css">
</style>
