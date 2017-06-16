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
				<div class="zhzl-l zhzl-green" :style="`width:${statistics.h_ballcontrol_rate}%`">
					<div class="wua">
						<div class="hh">
						</div>
					</div>
				</div>
				<div class="zhzl-r zhzl-gray" :style="`width:${statistics.a_ballcontrol_rate}%`">
					<div class="wua">
						<div class="hh">
						</div>
					</div>
				</div>
			</div>
			<div class="zhzl-bfb-left">
				{{statistics.h_ballcontrol_rate}}<i>%</i>
			</div>
			<div class="zhzl-bfb-right">
				{{statistics.a_ballcontrol_rate}}<i>%</i>
			</div>
		</div>
		<div class="zhedie">
			<ul class="zhzl-list">
				<li class="responsive">
				<div class="zhzl-left">
					{{statistics.h_shot_count}}
				</div>
				<div class="each-resone">
					<div class="zhzl-classify">
						射门
					</div>
					<div class="responsive">
						<div class="each-resone l-relative">
							<div class="zhzl-vs-left" :class="makeColorClass('shot_count')" :style="makeWidthStyle('shot_count')">
							</div>
						</div>
						<div class="each-resone l-relative">
							<div class="zhzl-vs-right" :class="makeColorClass('shot_count', true)" :style="makeWidthStyle('shot_count', true)">
							</div>
						</div>
					</div>
				</div>
				<div class="zhzl-right">
                    {{statistics.a_shot_count}}
				</div>
				</li>
				<li class="responsive">
				<div class="zhzl-left">
					{{statistics.h_shotin_count}}
				</div>
				<div class="each-resone">
					<div class="zhzl-classify">
						射正
					</div>
					<div class="responsive">
						<div class="each-resone l-relative">
							<div class="zhzl-vs-left" :class="makeColorClass('shotin_count')" :style="makeWidthStyle('shotin_count')">
							</div>
						</div>
						<div class="each-resone l-relative">
							<div class="zhzl-vs-right" :class="makeColorClass('shotin_count', true)" :style="makeWidthStyle('shotin_count', true)">
							</div>
						</div>
					</div>
				</div>
				<div class="zhzl-right">
					{{statistics.a_shotin_count}}
				</div>
				</li>
				<li class="responsive">
				<div class="zhzl-left">
					{{statistics.h_danger_attack_count}}
				</div>
				<div class="each-resone">
					<div class="zhzl-classify">
						危险进攻
					</div>
                    <div class="responsive">
						<div class="each-resone l-relative">
							<div class="zhzl-vs-left" :class="makeColorClass('danger_attack_count')" :style="makeWidthStyle('danger_attack_count')">
							</div>
						</div>
						<div class="each-resone l-relative">
							<div class="zhzl-vs-right" :class="makeColorClass('danger_attack_count', true)" :style="makeWidthStyle('danger_attack_count', true)">
							</div>
						</div>
					</div>
				</div>
				<div class="zhzl-right">
					{{statistics.a_danger_attack_count}}
				</div>
				</li>
				<li class="responsive">
				<div class="zhzl-left">
					{{statistics.h_attack_count}}
				</div>
				<div class="each-resone">
					<div class="zhzl-classify">
						进攻次数
					</div>
                    <div class="responsive">
						<div class="each-resone l-relative">
							<div class="zhzl-vs-left" :class="makeColorClass('attack_count')" :style="makeWidthStyle('attack_count')">
							</div>
						</div>
						<div class="each-resone l-relative">
							<div class="zhzl-vs-right" :class="makeColorClass('attack_count', true)" :style="makeWidthStyle('attack_count', true)">
							</div>
						</div>
					</div>
				</div>
				<div class="zhzl-right">
					{{statistics.a_attack_count}}
				</div>
				</li>
				<li class="responsive">
				<div class="zhzl-left">
					{{statistics.h_red_count}}
				</div>
				<div class="each-resone">
					<div class="zhzl-classify">
						红牌
					</div>
                    <div class="responsive">
						<div class="each-resone l-relative">
							<div class="zhzl-vs-left" :class="makeColorClass('red_count')" :style="makeWidthStyle('red_count')">
							</div>
						</div>
						<div class="each-resone l-relative">
							<div class="zhzl-vs-right" :class="makeColorClass('red_count', true)" :style="makeWidthStyle('red_count', true)">
							</div>
						</div>
					</div>
				</div>
				<div class="zhzl-right">
					{{statistics.a_red_count}}
				</div>
				</li>
				<li class="responsive">
				<div class="zhzl-left">
					{{statistics.h_yellow_count}}
				</div>
				<div class="each-resone">
					<div class="zhzl-classify">
						黄牌
					</div>
                    <div class="responsive">
						<div class="each-resone l-relative">
							<div class="zhzl-vs-left" :class="makeColorClass('yellow_count')" :style="makeWidthStyle('yellow_count')">
							</div>
						</div>
						<div class="each-resone l-relative">
							<div class="zhzl-vs-right" :class="makeColorClass('yellow_count', true)" :style="makeWidthStyle('yellow_count', true)">
							</div>
						</div>
					</div>
				</div>
				<div class="zhzl-right">
					{{statistics.a_yellow_count}}
				</div>
				</li>
				<li class="responsive">
				<div class="zhzl-left">
					{{statistics.h_foul_count}}
				</div>
				<div class="each-resone">
					<div class="zhzl-classify">
						犯规
					</div>
                    <div class="responsive">
						<div class="each-resone l-relative">
							<div class="zhzl-vs-left" :class="makeColorClass('foul_count')" :style="makeWidthStyle('foul_count')">
							</div>
						</div>
						<div class="each-resone l-relative">
							<div class="zhzl-vs-right" :class="makeColorClass('foul_count', true)" :style="makeWidthStyle('foul_count', true)">
							</div>
						</div>
					</div>
				</div>
				<div class="zhzl-right">
					{{statistics.a_foul_count}}
				</div>
				</li>
				<li class="responsive">
				<div class="zhzl-left">
					{{statistics.h_offset_count}}
				</div>
				<div class="each-resone">
					<div class="zhzl-classify">
						越位
					</div>
                    <div class="responsive">
						<div class="each-resone l-relative">
							<div class="zhzl-vs-left" :class="makeColorClass('offset_count')" :style="makeWidthStyle('offset_count')">
							</div>
						</div>
						<div class="each-resone l-relative">
							<div class="zhzl-vs-right" :class="makeColorClass('offset_count', true)" :style="makeWidthStyle('offset_count', true)">
							</div>
						</div>
					</div>
				</div>
				<div class="zhzl-right">
					{{statistics.a_offset_count}}
				</div>
				</li>
				<li class="responsive">
				<div class="zhzl-left">
					{{statistics.h_corner_count}}
				</div>
				<div class="each-resone">
					<div class="zhzl-classify">
						角球
					</div>
                    <div class="responsive">
						<div class="each-resone l-relative">
							<div class="zhzl-vs-left" :class="makeColorClass('corner_count')" :style="makeWidthStyle('corner_count')">
							</div>
						</div>
						<div class="each-resone l-relative">
							<div class="zhzl-vs-right" :class="makeColorClass('corner_count', true)" :style="makeWidthStyle('corner_count', true)">
							</div>
						</div>
					</div>
				</div>
				<div class="zhzl-right">
					{{statistics.a_corner_count}}
				</div>
				</li>
				<li class="responsive">
				<div class="zhzl-left">
					{{statistics.h_freekick_count}}
				</div>
				<div class="each-resone">
					<div class="zhzl-classify">
						任意球
					</div>
                    <div class="responsive">
						<div class="each-resone l-relative">
							<div class="zhzl-vs-left" :class="makeColorClass('freekick_count')" :style="makeWidthStyle('freekick_count')">
							</div>
						</div>
						<div class="each-resone l-relative">
							<div class="zhzl-vs-right" :class="makeColorClass('freekick_count', true)" :style="makeWidthStyle('freekick_count', true)">
							</div>
						</div>
					</div>
				</div>
				<div class="zhzl-right">
					{{statistics.a_freekick_count}}
				</div>
				</li>
			</ul>
		</div>
	</div>
</div>
</template>

<script>
export default {
    computed: {
        statistics() {
            return this.$store.state.zqInfo.situation && this.$store.state.zqInfo.situation.statistic
        }
    },
    methods: {
        makeWidthStyle(key, isReverse) {
            let home = parseInt(this.statistics['h_' + key])
            let away = parseInt(this.statistics['a_' + key])
            let result = (home / (home + away)) * 100
            if(isReverse) {
                return `width: ${100 - result}%`
            }
            return `width: ${result}%`
        },
        makeColorClass(key, isReverse, class_l = 'green-bg', class_s = 'gray-bg') {
            let home = this.statistics['h_' + key]
            let away = this.statistics['a_' + key]
            if(isReverse)
                return home < away ? class_l : class_s
            return home > away ? class_l : class_s
        }
    }
}
</script>

<style lang="css">
</style>
