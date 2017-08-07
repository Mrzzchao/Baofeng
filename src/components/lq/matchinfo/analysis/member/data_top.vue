<template>
    <div class="tContent" style="display:block" v-if="noEmptyFlag">
    	<div class="zj-nav">
    		球员-数据王
    	</div>
    	<div class="gl-box fx-zr-box">
            <template  v-for="(name, type) in Best3Type">
                <div class="qy-databox"  v-tap="{methods: () => Best3TypeStatus[type] = !Best3TypeStatus[type]}">
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
                <div class="other-qy" v-if="Best3TypeStatus[type]">
                    <ul class="dataItem" v-for="idx in (best3[type].home.length - 1)">
                        <li class="itemL">
                            <div class="qy-info">
                                <p>{{best3[type].away[idx].player | truncate(4)}}</p>
                            </div>
                        </li>
                        <li class="itemC">
                            <span class="qy-score">{{best3[type].away[idx].value}}</span>
                            <span class="qy-score">{{best3[type].home[idx].value}}</span>
                        </li>
                        <li class="itemR">
                            <div class="qy-info">
                                <p>{{best3[type].home[idx].player | truncate(4)}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </template>
    	</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            Best3Type: {
                points: '得分',
                rebounds: '篮板',
                assists: '助攻',
                steals: '抢断',
                cap: '盖帽'
            },
            Best3TypeStatus: {
                points: false,
                rebounds: false,
                assists: false,
                steals: false,
                cap: false
            }
        }
    },
    computed: {
        best3() {
            return this.$store.state.matchLq.best3
        },
        noEmptyFlag () {
            return this.noEmpty(this.best3)
        }
    },
    methods: {
        noEmpty (obj) {
            if (obj) { return !!Object.keys(obj).length }
            return false
        }
    },
    filters: {
        truncate (input, length, tail) {
            if (input.length <= length) {
                return input
            }
            return input.slice(0, length) + (tail || '...')
        }
    }
}
</script>

<style lang="css">
</style>
