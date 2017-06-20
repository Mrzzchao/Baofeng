<template>
    <div class="tContent" style="display:block" v-if="noEmptyFlag">
    	<div class="zj-nav">
    		球员-数据王
    	</div>
    	<div class="gl-box fx-zr-box">
    		<div class="qy-databox" v-for="(name, type) in Best3Type">
    			<ul class="dataItem">
    				<li class="itemL">
        				<div class="qy-icon">
        					<img alt="球员头像" :src="best3[type].away[0].photo">
        				</div>
        				<div class="qy-info">
        					<p>
        						{{best3[type].away[0].number}}号
        					</p>
        					<p>
        						{{best3[type].away[0].player}}
        					</p>
        				</div>
    				</li>
    				<li class="itemC"><span class="qy-score">{{best3[type].away[0].value}}</span><span>{{name}}</span><span class="qy-score">{{best3[type].home[0].value}}</span></li>
    				<li class="itemR">
                        <div class="qy-info">
        					<p>
        						{{best3[type].home[0].number}}号
        					</p>
        					<p>
        						{{best3[type].home[0].player}}
        					</p>
        				</div>
        				<div class="qy-icon">
        					<img alt="球员头像" :src="best3[type].home[0].photo">
        				</div>
    				</li>
    			</ul>
    		</div>

    	</div>
    </div>
</template>

<script>
import {Best3Type} from '~common/constants'
export default {
    data() {
        return {
            Best3Type
        }
    },
    computed: {
        best3() {
            return this.$store.state.lqInfo.best3
        },
        noEmptyFlag() {
            return this.noEmpty(this.best3)
        }
    },
    methods: {
        noEmpty(obj) {
            if(obj)
                return !!Object.keys(obj).length
            return false
        }
    }
}
</script>

<style lang="css">
</style>
