<template>
    <div class="zhedie-box zhedie-box-wl">
    	<div>
    		<div class="zj-nav">
    			未来赛事
    		</div>
    		<div class="zhedie show">
    			<table width="100%" cellpadding="0" cellspacing="0" class="fx-table" v-for="hoa in ['home', 'away']">
        			<tbody>
            			<tr>
            				<th width="22%">
            					<span class="color3 f28">{{baseinfo[home + 'sxname']}}</span>
            				</th>
            				<th width="20%">
            					日期
            				</th>
            				<th width="17%">
            					<div class="textright">
            						主队
            					</div>
            				</th>
            				<th width="7%">
            				</th>
            				<th width="17%">
            					<div class="textleft">
            						客队
            					</div>
            				</th>
            				<th>
            					相隔
            				</th>
            			</tr>
            			<tr v-for="list in future_match[hoa]">
            				<td>
            					<span class="color9">{{list.simpleleague}}</span>
            				</td>
            				<td>
            					{{list.matchdate}}
            				</td>
            				<td>
            					<div class="textright">
            						{{list.awaysxname}}
            					</div>
            				</td>
            				<td>
            					vs
            				</td>
            				<td>
            					<div class="textleft">
            						{{list.homesxname}}
            					</div>
            				</td>
            				<td>
            					{{list.xdays}}
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
    computed: {
        baseinfo() {
            return this.$store.state.mchao.baseinfo
        }
    },
    props: {
        future_match: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="css">
</style>
