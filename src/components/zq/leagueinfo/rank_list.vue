<template>
    <section class="">
        <div class="">
            <div v-if="noEmptyFlag">
                <div class="inte-main" v-if="data.rettype=='array'">
                    <!--没有分组-->
                    <div class="games-list game-list-b">
                        <table class="games" width="100%" cellspacing="0" cellpadding="0">
                            <colgroup>
                                <col width="45.5%">
                                <col width="8%">
                                <col width="16.6%">
                                <col width="10.3%">
                                <col width="5%">
                                <col width="15.6%">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th></th>
                                    <th>赛</th>
                                    <th>胜/平/负</th>
                                    <th>进/失</th>
                                    <th>净</th>
                                    <th>积分</th>
                                </tr>
                                <tr v-for="(list, idx) in data.values">
                                    <td>
                                        <em class="cate-cont"><i class="game-category" :style="styleArr[idx]">{{idx+1}}</i></em>
                                        <em class="gamer-cont"><img :src="list.teamlogo">{{list.teamsxname}}</em>
                                    </td>
                                    <td>{{list.total}}</td>
                                    <td>{{list | resultFmt}}</td>
                                    <td>{{list | goalFmt}}</td>
                                    <td>{{list.js}}</td>
                                    <td>{{list.score}}</td>
                                </tr>
                            </tbody>
                        </table>
                        <!--颜色代表说明-->
                        <ul class="color-mean what-means" v-if="vtype === 'all'">
                            <li class="mean-item" v-for="item in data.desc"><i class="game-category" :style="{'background': item.color}"></i><em>{{item.name}}</em>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="inte-main" v-else>
                    <div class="games-list game-list-b" v-for="key in data.sort">
                        <table class="games" width="100%" cellspacing="0" cellpadding="0">
                            <colgroup>
                                <col width="45.5%">
                                <col width="8%">
                                <col width="16.6%">
                                <col width="10.3%">
                                <col width="5%">
                                <col width="15.6%">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th><em class="group">{{key}}</em></th>
                                    <th>赛</th>
                                    <th>胜/平/负</th>
                                    <th>进/失</th>
                                    <th>净</th>
                                    <th>积分</th>
                                </tr>
                                <tr v-for="(list, idx) in data.values[key]">
                                    <td>
                                        <em class="cate-cont"><i class="game-category" :style="styleObj[key][idx]">{{idx+1}}</i></em>
                                        <em class="gamer-cont"><img :src="list.teamlogo">{{list.teamsxname}}</em>
                                    </td>
                                    <td>{{list.total}}</td>
                                    <td>{{list | resultFmt}}</td>
                                    <td>{{list | goalFmt}}</td>
                                    <td>{{list.js}}</td>
                                    <td>{{list.score}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <prompt v-else type="no-data" tip0="暂无数据"/>
        </div>
    </section>
</template>

<script>
import Prompt from '~components/common/prompt.vue'

export default {
    components: {
        Prompt
    },
    computed: {
        vtype () {
            return this.$store.state.leagueZq.params.vtype
        },
        noEmptyFlag () {
            return this.noEmpty(this.data.values)
        },
        styleArr() {
            return this.data.values.map((rank) => {
                return this.styleSelect(rank)
            })
        },
        styleObj() {
            let styleObj = {}
            this.data.sort.forEach((key) => {
                styleObj[key] = this.data.values[key].map((rank) => {
                    return this.styleSelect(rank)
                })
            })
            return styleObj
        }
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    methods: {
        styleSelect (rank) {
            let item = this.data.desc.filter((item) => {
                return item.type === rank.type
            })[0]

            if (item) {
                return `background: ${item.color};color:#fff;`
            }
            return ''
        },
        noEmpty (obj) {
            if (obj) { return !!Object.keys(obj).length }
            return false
        },
        toTeamMatches ({teamId}) {
            this.$router.push(`/team/football/${teamId}/sc`)
        }
    },
    filters: {
        resultFmt (result) {
            return `${result.win}/${result.draw}/${result.lost}`
        },
        goalFmt (goal) {
            return `${goal.jq}/${goal.sq}`
        }
    }
}
</script>

<style lang="css">
</style>
