<template>
    <div class="main member l-flex-1 l-relative count-main">
        <div class="l-full  l-scroll-y">
            <div v-if="noEmptyFlag">
                <div v-for="(name, type) in memberType">
                    <div class="main-box" >
                        <div class="box-tit">
                            <h2> {{name}} </h2>
                        </div>
                        <div class="member-list">
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <colgroup>
                                    <col width="10%">
                                    <col width="">
                                    <col width="18%">
                                </colgroup>
                                <tbody>
                                    <tr v-for="member in data[type]" v-if="noEmpty(data[type])">
                                        <td align="left">
                                            <img :src="member.avatar" class="member-face">
                                        </td>
                                        <td align="left">
                                            <strong>{{member.playername}}</strong>

                                            <p>{{member.teamsxname}}</p>
                                        </td>
                                        <td align="right">
                                            <strong>{{member[resultType[type]]}}</strong>
                                            <p>{{member['avg_' + resultType[type]]}}球/场</p>
                                        </td>
                                    </tr>
                                    <prompt v-else type="no-data" tip0="暂无数据"/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <prompt v-else type="no-data" tip0="暂无数据"/>
        </div>
    </div>
</template>

<script>
import Prompt from '~components/common/prompt.vue'

export default {
    components: {
        Prompt
    },
    data() {
        return {
            memberType: {
                scores: '射手榜',
                assists: '助攻榜'
            },
            resultType: {
                scores: 'goals',
                assists: 'assists'
            }
        }
    },
    computed: {
        noEmptyFlag () {
            return this.noEmpty(this.data)
        }
    },
    methods: {
        noEmpty (obj) {
            if (obj) { return !!Object.keys(obj).length }
            return false
        }
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="css">
.main {
    margin: auto;
}
</style>
