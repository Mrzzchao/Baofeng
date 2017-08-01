<template>
	<div class="zhedie" v-if="matchesObj">
		<div class="zd-detail">
			<div class="gaik clear">
				<span class="f30 color3 fl">近{{matchesObj.all_count}}场<span v-if="isJz">交战</span>&nbsp;&nbsp;&nbsp;{{baseinfo[hoa]}}</span>
                <span class="f30 fl"><i class="win tcell">{{matchesObj.win_count}}胜</i><i class="lose tcell">{{matchesObj.lost_count}}负</i></span>
                <span class="f30 color3 fl">胜率{{matchesObj.winrate}}%</span>
			</div>
			<div class="total-tips">
                {{matchesObj | avgResultFmt}}
			</div>
		</div>
		<table width="100%" cellpadding="0" cellspacing="0" class="fx-table">
			<colgroup>
			                <col width="24%">
			                <col width="15%">
			                <col width="23%">
			                <col width="15%">
			                <col width="">
			            </colgroup>
		<tbody>
			<tr>
                    <th>赛事</th>
                    <th>
                        <div class="textright">客队</div>
                    </th>
                    <th>比分[总分]</th>
                    <th>
                        <div class="textleft">主队</div>
                    </th>
                    <th>{{tabs[key-1]}}</th>
                </tr>
			<tr v-for="(match, idx) in matchesFmt">
				<td>
					<span class="color9">{{match.simpleleague}}</span><span class="colorc f20">{{match.date.slice(2, 10)}}</span>
					<em class="bkb-icon" v-if="bkbStatus[idx]"></em>
				</td>
				<td>
					<div class="textright" :class="awayTeamClass[idx]">
						<span class="color9" v-if="match.awaystanding > 0">[{{match.awaystanding}}]</span>
						{{match.awaysxname}}
					</div>
				</td>
				<td>
					{{match.ascore}}:{{match.hscore}}<span class="color9">[{{match.total}}]</span>
				</td>
				<td>
					<div class="textleft" :class="homeTeamClass[idx]">
						{{match.homesxname}}
						<span class="color9" v-if="match.homestanding > 0">[{{match.homestanding}}]</span>
					</div>
				</td>
				<td v-tap='{methods: switchResult}'>
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
                '[分差]赛果',
                '让分',
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
            return this.$store.state.matchLq.baseinfo
        },
        matches () {
            return this.matchesObj.matches
        },
		matchesFmt () {
			return this.matches.slice(0, this.cutLen)
		},
        bkbStatus () {
            return this.matches && this.matches.map((item, idx, arr) => {
                if (idx === arr.length - 1) return false
                let dt1 = new Date(item.date)
                dt1.setDate(dt1.getDate()) // 处理为相同日期

                let dt2 = new Date(arr[idx + 1].date)
                dt2.setDate(dt2.getDate() + 1) // 处理为相同日期
                return +dt1 === +dt2
            })
        },
        homeTeamClass () {
            return this.matches && this.matches.map((item) => {
                return this.makeTeamClass(item, item.homesxname)
            })
        },
        awayTeamClass () {
            return this.matches && this.matches.map((item) => {
                return this.makeTeamClass(item, item.awaysxname)
            })
        },
        resultClass () {
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
            return `场均得分${input.avar_get}分，场均失${input.avar_lost}分， 大分${input.big_ball}次，小分${input.small_ball}次`
        },
        resultFmt (input, key) {
            let result = input['result' + key]
            let preStr = ''
            if (result === '') return '-'

            switch (key) {
            case 1: preStr = `[${input.sub}]`; break
            case 2: preStr = input.rangfen; break
            case 3: preStr = input.zongfen; break
            }
            return preStr + ' ' + result
        }
    }
}
</script>

<style lang="css">
</style>
