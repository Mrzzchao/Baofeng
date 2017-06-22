<template>
    <div v-if="baseinfo && noEmptyFlag">
    	<div class="zhedie-box">
    		<div class="zj-nav">
    			联赛排名
    		</div>
    		<div class="zhedie">
    			<div v-for="hoa in ['away', 'home']">
    				<div class="pm-namel">
    					{{baseinfo[hoa + 'sxname']}} ({{baseinfo.simpleleague}})
    				</div>
    				<table width="100%" cellpadding="0" cellspacing="0" class="fx-table fb">
    				<tbody>
    				<tr>
    					<th width="12%">
    						场次
    					</th>
    					<th width="10%">
    						比赛
    					</th>
    					<th width="10%">
    						胜
    					</th>
    					<th width="10%">
    						负
    					</th>
    					<th width="10%">
    						进
    					</th>
    					<th width="10%">
    						失
    					</th>
    					<th width="10%">
    						净
    					</th>
    					<th width="12%">
    						排名
    					</th>
    				</tr>
    				<tr v-for="(tname, tab) in tabs">
    					<td>
    						<span class="color9 f23">{{tname}}</span>
    					</td>
                        <td v-for="(lname, type) in LeagueRankType">
    						{{leaguerankFmt[hoa][tab + type]}}
    					</td>
    				</tr>
    				</tbody>
    				</table>
    			</div>
    		</div>
    	</div>
    </div>
</template>

<script>
import {LeagueRankType} from '~common/constants'

export default {
    data () {
        return {
            LeagueRankType,
            tabs: {
                '': '全部',
                'h': '主场',
                'a': '客场'
            }
        }
    },
    computed: {
        leaguerank () {
            return this.$store.state.matchLq.leaguerank
        },
        baseinfo () {
            return this.$store.state.matchLq.baseinfo
        },
        leaguerankFmt () {
            return {
                home: this.leaguerank[1],
                away: this.leaguerank[0]
            }
        },
        noEmptyFlag() {
            return this.noEmpty(this.leaguerank)
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
