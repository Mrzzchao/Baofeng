<template>
    <div class="zhedie-box" v-if="leaguerank">
    	<div class="zhedie-box">
    		<div class="zj-nav">
    			{{leaguerank.title}} 联赛积分排名
    			<ul class="volumeTab" id="tabBefore">
    				<li :class="{'cur': tab === 'all'}" @click="onTab('all')">全部</li>
    				<li :class="{'cur': tab === 'home'}" @click="onTab('home')">主客</li>
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
    			<tr>
    				<td>
    					{{leaguerank.hometeam.standing}}
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
    					{{leaguerank.hometeam[tab].matches_count}}
    				</td>
    				<td>
    					{{leaguerank.hometeam[tab] | resultFmt}}
    				</td>
    				<td>
    					{{leaguerank.hometeam[tab] | goalFmt}}
    				</td>
    				<td>
    					<p class="textcenter">
    						{{leaguerank.hometeam[tab].score}}
    					</p>
    				</td>
    			</tr>
                <tr>
    				<td>
    					{{leaguerank.awayteam.standing}}
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
    					{{leaguerank.awayteam[tab].matches_count}}
    				</td>
    				<td>
    					{{leaguerank.awayteam[tab] | resultFmt}}
    				</td>
    				<td>
    					{{leaguerank.awayteam[tab] | goalFmt}}
    				</td>
    				<td>
    					<p class="textcenter">
    						{{leaguerank.awayteam[tab].score}}
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
    data() {
        return {
            tab: 'all'
        }
    },
    computed: {
        leaguerank() {
            return this.$store.state.zqInfo.leaguerank
        },
        baseinfo() {
            return this.$store.state.zqInfo.baseinfo
        }
    },
    methods: {
        onTab(tab) {
            this.tab = tab
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
