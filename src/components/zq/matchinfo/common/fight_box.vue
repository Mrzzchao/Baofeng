<template>
	<div class="zhedie" v-if="matchesObj">
		<div class="zd-detail">
			<div class="gaik clear">
				<span class="f30 color3 fl">近{{matchesObj.all_matches.all_count}}场<span v-if="isJz">交战</span>&nbsp;&nbsp;&nbsp;{{baseinfo[hoa]}}</span>
                <span class="f30 fl"><i class="win tcell">{{matchesObj.all_matches.win_count}}胜</i><i class="tie tcell">{{matchesObj.all_matches.draw_count}}平</i><i class="lose tcell">{{matchesObj.all_matches.lost_count}}负</i></span>
                <span class="f30 color3 fl">胜率{{matchesObj.all_matches.win_rate}}%</span>
			</div>
			<div class="total-tips">
                {{matchesObj.all_matches | avgResultFmt}}
			</div>
		</div>
		<table width="100%" cellpadding="0" cellspacing="0" class="fx-table">
		<colgroup><col width="20%"><col width="22%"><col width="18%"><col width="22%"><col></colgroup>
		<tbody>
		<tr>
			<th>
				赛事
			</th>
			<th>
				<div class="textright">
					主队
				</div>
			</th>
			<th>
				比分
			</th>
			<th>
				<div class="textleft">
					客队
				</div>
			</th>
			<th>
				{{tabs[key-1]}}
			</th>
		</tr>
		<tr v-for="(match, idx) in matchesFmt">
			<td>
				<span class="color9">{{match.simplegbname}}</span><span class="colorc f20">{{match.matchdate.slice(2, 10)}}</span>
			</td>
			<td>
				<div class="textright" :class="homeTeamClass[idx]">
                    <span class="color9" v-if="match.homestanding > 0">[{{match.homestanding}}]</span>
					{{match.homesxname}}
				</div>
			</td>
			<td>
				{{match.homescore}}:{{match.awayscore}}<span class="color9">({{match.homehalfscore}}:{{match.awayhalfscore}})</span>
			</td>
			<td>
				<div class="textleft" :class="awayTeamClass[idx]">
					{{match.awaysxname}}
                    <span class="color9" v-if="match.awaystanding > 0">[{{match.awaystanding}}]</span>
				</div>
			</td>
			<td @click='switchResult()'>
				<div :class="resultClass[idx]">
					{{match | resultFmt(key)}}
				</div>
			</td>
		</tr>
		</tbody>
		</table>
		<div class="box-arrow noborder" v-if="!isJz" v-tap="{methods: collap, lenght: matches.length}">
			<div class="zd-arrow" :class="{'rotate180': moreFlag}">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		matchesObj: {
			type: Object,
			required: true
		},
		isJz: {
			type: Boolean,
			default: false
		},
		hoa: {
			type: String,
			default: 'homesxname'
		}
	},
    data () {
        return {
            key: 1,
            tabs: [
                '赛果',
                '盘路',
                '大小'
            ],
            teamClassMap: [
                'win',
                'tie',
                'lose'
            ],
			moreFlag: false,
			cutLen: 6
        }
    },
    computed: {
        baseinfo () {
            return this.$store.state.matchZq.baseinfo
        },
        matches () {
            return this.matchesObj.matches
        },
		matchesFmt () {
			return this.matches.slice(0, this.cutLen)
		},
		homeTeamClass() {
			return this.matches && this.matches.map((item) => {
				return this.makeTeamClass(item, item.homesxname)
			})
		},
		awayTeamClass() {
			return this.matches && this.matches.map((item) => {
				return this.makeTeamClass(item, item.awaysxname)
			})
		},
		resultClass() {
			return this.matches.map((match) => {
				return this.makeResultClass(match)
			})
		}
    },
    methods: {
        switchResult () {
            this.key = ((this.key + 1) % 4) || 1
        },
        makeResultClass (match) {
            let result = match['result' + this.key]
            switch (result) {
            case '胜':
            case '大':
            case '赢': return 'red-k'

            case '平':
            case '走': return 'green-k'

            case '负':
            case '小':
            case '输': return 'blue-k'

            default: return 'gray-k'
            }
        },
        makeTeamClass (match, name) {
            let result = match.result1
            let key = 0
            switch (result) {
            case '胜': key = 0; break
            case '平': key = 1; break
            case '负': key = 2; break
            }
            return name === this.baseinfo[this.hoa] ? this.teamClassMap[key] : ''
        },
		collap ({length}) {
			this.moreFlag = !this.moreFlag
			this.cutLen = this.moreFlag ? length : 5
		},
    },
    filters: {
        avgResultFmt (input) {
            return `场均净胜${input.avar_gd}球，场均总进${input.avar_all}球， 大球${input.big_ball}次，小球${input.small_ball}次`
        },
        resultFmt (input, key) {
            let result = input['result' + key]
            if (result === '') return '-'
            if (key === 2) {
                result = input.handicapline + result
            }
            return result
        }
    }
}
</script>

<style lang="css">
</style>
