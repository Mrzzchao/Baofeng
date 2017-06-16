<template>
    <div class="zhedie-box" v-if="jz_data">
    	<div class="zj-nav">
    		<span class="saixuan" onclick="_hmt.push([&quot;_trackEvent&quot;,&quot;zq_detail&quot;,&quot;click&quot;,&quot;analysis_zj_ls&quot;])">筛选</span> 历史交战
    	</div>
    	<div class="zhedie">
    		<div class="zd-detail">
    			<div class="gaik clear">
    				<span class="f30 color3 fl">近{{jz_data.all_matches.all_count}}场交战&nbsp;&nbsp;&nbsp;{{baseinfo.homexname}}</span>
                    <span class="f30 fl"><i class="win tcell">{{jz_data.all_matches.win_count}}胜</i><i class="tie tcell">{{jz_data.all_matches.draw_count}}平</i><i class="lose tcell">{{jz_data.all_matches.lost_count}}负</i></span>
                    <span class="f30 color3 fl">胜率{{jz_data.all_matches.win_rate}}%</span>
    			</div>
    			<div class="total-tips">
                    {{jz_data.all_matches | avgResultFmt}}
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
    				赛果
    			</th>
    		</tr>
    		<tr v-for="match in jz_data.matches">
    			<td>
    				<span class="color9">{{match.simplegbname}}</span><span class="colorc f20">{{match.matchdate.slice(2, 10)}}</span>
    			</td>
    			<td>
    				<div class="textright">
    					{{match.homexname}}
    				</div>
    			</td>
    			<td>
    				0:1<span class="color9">(0:0)</span>
    			</td>
    			<td>
    				<div class="textleft win">
    					{{match.awaysxname}}
    				</div>
    			</td>
    			<td onclick="_hmt.push([&quot;_trackEvent&quot;,&quot;zq_detail&quot;,&quot;click&quot;,&quot;analysis_zj_ls2&quot;])">
    				<div class="red-k">
    					胜
    				</div>
    			</td>
    		</tr>
    		<tr>
    			<td>
    				<span class="color9">阿甲</span><span class="colorc f20">15-08-15</span>
    			</td>
    			<td>
    				<div class="textright">
    					<span class="color9">[7]</span>阿独立
    				</div>
    			</td>
    			<td>
    				1:0<span class="color9">(1:0)</span>
    			</td>
    			<td>
    				<div class="textleft lose">
    					防卫者<span class="color9">[24]</span>
    				</div>
    			</td>
    			<td onclick="_hmt.push([&quot;_trackEvent&quot;,&quot;zq_detail&quot;,&quot;click&quot;,&quot;analysis_zj_ls2&quot;])">
    				<div class="blue-k">
    					负
    				</div>
    			</td>
    		</tr>
    		<tr>
    			<td>
    				<span class="color9">阿甲</span><span class="colorc f20">14-10-13</span>
    			</td>
    			<td>
    				<div class="textright">
    					<span class="color9">[4]</span>阿独立
    				</div>
    			</td>
    			<td>
    				1:1<span class="color9">(0:0)</span>
    			</td>
    			<td>
    				<div class="textleft tie">
    					防卫者<span class="color9">[16]</span>
    				</div>
    			</td>
    			<td onclick="_hmt.push([&quot;_trackEvent&quot;,&quot;zq_detail&quot;,&quot;click&quot;,&quot;analysis_zj_ls2&quot;])">
    				<div class="green-k">
    					平
    				</div>
    			</td>
    		</tr>
    		</tbody>
    		</table>
    	</div>
    </div>
</template>

<script>
export default {
    computed: {
        jz_data() {
            return this.$store.state.zqInfo.jz_data
        },
        baseinfo() {
            return this.$store.state.zqInfo.baseinfo
        }
    },
    filters: {
        avgResultFmt(input) {
            return `场均净胜${input.avar_gd}球，场均总进${input.win_count}球， 大球${input.big_ball}次，小球${input.small_ball}次`
        }
    }
}
</script>

<style lang="css">
</style>
