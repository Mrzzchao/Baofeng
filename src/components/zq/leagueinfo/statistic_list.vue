<template>
    <div class="main member l-flex-1 l-relative count-main">
        <div class="l-full  l-scroll-y">
            <div v-if="noEmptyFlag">
                <div v-for="(name, type) in memberType">
                    <div class="main-box" >
                        <div class="box-tit">
                            <h2> {{name}} </h2>
                        </div>
                        <div class="member-list" v-if="noEmpty(data[type])">
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <colgroup>
                                    <col width="10%">
                                    <col width="">
                                    <col width="18%">
                                </colgroup>
                                <tbody>
                                    <tr v-for="member in data[type]" >
                                        <td align="left">
                                            <img v-img-load='member.avatar' class="member-face">
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
                                </tbody>
                            </table>
                        </div>
                        <div class="member-list member-empty" v-else>暂无数据</div>
                    </div>
                </div>
            </div>
            <prompt v-else type="no-data" tip0="暂无数据"/>
        </div>
    </div>
</template>

<script>
import Prompt from '~components/common/prompt.vue'
import imgLoad from '~directives/imgLoad'
export default {
    components: {
        Prompt
    },
    directives: {
        imgLoad
    },
    props: {
        data: {
            type: Object,
            required: true
        }
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
    }
}
</script>

<style lang="css">
.main {
    margin: auto;
}
</style>
