<template>
    <div class="zhedie-box" v-if="noEmptyFlag">
    	<div class="zhedie-box">
    		<div class="zj-nav">
    			{{leaguerank.title}} 联赛积分排名
    			<ul class="volumeTab" id="tabBefore">
    				<li :class="{'cur': tab1 === 'all'}" @click="onTab('all', 'all')">全部</li>
    				<li :class="{'cur': tab1 === 'home'}" @click="onTab('home', 'away')">主客</li>
    			</ul>
    		</div>
    		<div class="zhedie show">
    			<table width="100%" cellpadding="0" cellspacing="0" class="fx-table fb">
    			<tbody>
    			<tr>
    				<th colspan="2">
    					排名
    				</th>
    				<th width="18%">
    					赛事
    				</th>
    				<th width="10%">
    					赛
    				</th>
    				<th width="15%">
    					胜/平/负
    				</th>
    				<th width="12%">
    					进/失
    				</th>
    				<th width="12%">
    					积分
    				</th>
    			</tr>
    			<tr v-if="noEmptyFlag_home">
    				<td>
    					{{leaguerank.hometeam[tab1].standing}}
    				</td>
    				<td>
    					<div class="rank-team">
    						<img :src="leaguerank.hometeam.teamlogo">{{baseinfo.homesxname}}
    					</div>
    				</td>
    				<td>
    					{{leaguerank.hometeam.leaguename}}
    				</td>
    				<td>
    					{{leaguerank.hometeam[tab1].matches_count}}
    				</td>
    				<td>
    					{{leaguerank.hometeam[tab1] | resultFmt}}
    				</td>
    				<td>
    					{{leaguerank.hometeam[tab1] | goalFmt}}
    				</td>
    				<td>
    					<p class="textcenter">
    						{{leaguerank.hometeam[tab1].score}}
    					</p>
    				</td>
    			</tr>
                <tr v-if="noEmptyFlag_away">
    				<td>
    					{{leaguerank.awayteam[tab2].standing}}
    				</td>
    				<td>
    					<div class="rank-team">
    						<img :src="leaguerank.awayteam.teamlogo">{{baseinfo.awaysxname}}
    					</div>
    				</td>
    				<td>
    					{{leaguerank.awayteam.leaguename}}
    				</td>
    				<td>
    					{{leaguerank.awayteam[tab2].matches_count}}
    				</td>
    				<td>
    					{{leaguerank.awayteam[tab2] | resultFmt}}
    				</td>
    				<td>
    					{{leaguerank.awayteam[tab2] | goalFmt}}
    				</td>
    				<td>
    					<p class="textcenter">
    						{{leaguerank.awayteam[tab2].score}}
    					</p>
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
            tab1: 'all',
            tab2: 'all'
        }
    },
    computed: {
        leaguerank () {
            return this.$store.state.zqInfo.leaguerank
        },
        baseinfo () {
            return this.$store.state.zqInfo.baseinfo
        },
        noEmptyFlag() {
            return this.noEmpty(this.leaguerank) && this.noEmptyFlag_home && this.noEmptyFlag_away
        },
        noEmptyFlag_home() {
            return this.noEmpty(this.leaguerank.hometeam)
        },
        noEmptyFlag_away() {
            return this.noEmpty(this.leaguerank.awayteam)
        }
    },
    methods: {
        noEmpty(obj) {
            if(obj) return !!Object.keys(obj).length
            return false
        },
        onTab (tab1, tab2) {
            this.tab1 = tab1
            this.tab2 = tab2
        }
    },
    filters: {
        resultFmt (result) {
            return `${result.win}/${result.draw}/${result.lost}`
        },
        goalFmt (goal) {
            return `${goal.innum}/${goal.lostnum}`
        }
    }
}
</script>

<style lang="css">
</style>
