<template>
    <div class="zhedie-box" v-if="noEmptyFlag">
    	<div class="zj-nav">
    		本场首发
    	</div>
    	<div class="zhedie">
    		<div class="zuqiuc">
    			<table cellspacing="0" cellpadding="0" border="0" class="zx-table" width="100%">
        			<tbody>
            			<tr v-for="row in formation.hlineup">
            				<td>
            					<ul class="zx-ul responsive">
            						<li class="each-resone" v-for="cell in row"><span class="person">{{cell.playernum}}<img :src="cell.characterpic1" v-if="cell.characterpic1"></span><br>
            						{{cell.playernum}} {{cell.playername}}</li>
            					</ul>
            				</td>
            			</tr>
        			</tbody>
    			</table>
                <table cellspacing="0" cellpadding="0" border="0" class="zx-table" width="100%">
                    <tbody>
                        <tr v-for="row in alineup">
                            <td>
                                <ul class="zx-ul responsive">
                                    <li class="each-resone" v-for="cell in row"><span class="person">{{cell.playernum}}<img :src="cell.characterpic1" v-if="cell.characterpic1"></span><br>
                                    {{cell.playernum}} {{cell.playername}}</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
    			<div class="zhu-zx">
    				{{homeZx}}
    			</div>
    			<div class="ke-zx">
    				{{awayZx}}
    			</div>
    		</div>
    	</div>
    </div>
</template>

<script>
export default {
    computed: {
        baseinfo() {
            return this.$store.state.matchZq.baseinfo
        },
        formation() {
            return this.$store.state.matchZq.formation
        },
        alineup() {
            return this.$store.state.matchZq.formation && this.$store.state.matchZq.formation.alineup
        },
        homeZx() {
            return `${this.baseinfo && this.baseinfo.homesxname}阵型 ${this.formation.hformation && this.formation.hformation.split('').join('-')}`
        },
        awayZx() {
            return `${this.formation.aformation && this.formation.aformation.split('').join('-')}${this.baseinfo && this.baseinfo.awaysxname}阵型 `
        },
        noEmptyFlag() {
            return this.noEmpty(this.formation)
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
