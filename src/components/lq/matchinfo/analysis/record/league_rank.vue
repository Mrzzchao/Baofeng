<template>
    <div>
    	<div class="zhedie-box" v-if="baseinfo.stagemode === '1'">
    		<div class="zj-nav">
    			联赛排名
    		</div>
    		<div class="zhedie" v-if="noEmptyFlag">
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
                                <td v-for="(lname, type) in LeagueRankTypeMode1">
            						{{leaguerankFmt[hoa][tab + type]}}
            					</td>
            				</tr>
        				</tbody>
    				</table>
    			</div>
    		</div>
    	</div>

        <div class="zhedie-box" v-else>
        	<div class="zj-nav">
        		{{baseinfo.seasongbname}}{{baseinfo.matchgroup}}组排名
        	</div>
        	<div class="zhedie" v-if="noEmptyFlag">
        		<table width="100%" cellpadding="0" cellspacing="0" class="fx-table fb-lq">
        		<tbody>
        		<tr>
        			<th width="12%">
        				排名
        			</th>
        			<th>
        				<div class="qiud">
        					球队
        				</div>
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
        				得
        			</th>
        			<th width="10%">
        				失
        			</th>
        		</tr>
        		<tr v-for="(rank, idx) in leaguerank">
        			<td >
        				{{idx+1}}
        			</td>
        			<td v-for="(lname, type) in LeagueRankTypeMode2">
        				{{rank[type]}}
        			</td>
        		</tr>
        		</tbody>
        		</table>
        	</div>
        </div>

    </div>
</template>

<script>
export default {
    data () {
        return {
            LeagueRankTypeMode1: {
                count: '比赛',
                win: '胜',
                lost: '负',
                gain: '进',
                miss: '失',
                clean: '净',
                standing: '排名'
            },
            LeagueRankTypeMode2: {
                team: '球队',
                count: '比赛',
                win: '胜',
                lost: '负',
                gain: '进',
                miss: '失'
            },
            tabs: {
                '': '全部',
                'h': '主场',
                'a': '客场'
            }
        }
    },
    computed: {
        baseinfo() {
            return this.$store.state.matchLq.baseinfo
        },
        leaguerank() {
            return this.$store.state.matchLq.leaguerank
        },
        leaguerankFmt () {
            return {
                home: this.leaguerank[1],
                away: this.leaguerank[0]
            }
        },
        noEmptyFlag () {
            return this.noEmpty(this.leaguerank)
        }
    },
    methods: {
        noEmpty (obj) {
            if (obj) { return !!Object.keys(obj).length }
            return false
        }
    }
}
</script>

<style lang="css">
</style>
