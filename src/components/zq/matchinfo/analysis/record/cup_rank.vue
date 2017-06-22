<template>
<div class="zhedie-box" v-if="noEmptyFlag">
    <div class="zhedie-box">
        <div class="zj-nav">
            {{baseinfo | titleFmt}}
        </div>
        <div class="zhedie show">
            <table width="100%" cellpadding="0" cellspacing="0" class="fx-table fb">
                <tbody>
                    <tr>
                        <th colspan="2"></th>
                        <th width="12%">赛</th>
                        <th width="15%">胜/平/负</th>
                        <th width="15%">进/失</th>
                        <th width="12%">净</th>
                        <th width="10%">积分</th>
                    </tr>
                    <tr v-for="match in cuprank">
                        <td>
                            {{match.standing}}
                        </td>
                        <td>
                            <div class="rank-team">
                                <img :src="match.teamlogo">{{match.sxname}}
                            </div>
                        </td>
                        <td>
                            {{match.matches_count}}
                        </td>
                        <td>
                            {{match | resultFmt}}
                        </td>
                        <td>
                            {{match | goalFmt}}
                        </td>
                        <td>{{match.diff}}</td>
                        <td>
                            <p class="textcenter">
                                {{match.score}}
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
    computed: {
        cuprank() {
            return this.$store.state.matchZq.cuprank
        },
        baseinfo() {
            return this.$store.state.matchZq.baseinfo
        },
        noEmptyFlag() {
            return this.noEmpty(this.cuprank)
        }
    },
    methods: {
        noEmpty(obj) {
            if (obj) return !!Object.keys(obj).length
            return false
        }
    },
    filters: {
        resultFmt(result) {
            return `${result.win_count}/${result.draw_count}/${result.lost_count}`
        },
        goalFmt(goal) {
            return `${goal.innum}/${goal.lostnum}`
        },
        titleFmt(input) {
            return `${input.simpleleague}${input.stagename}-${input.matchgroup}组-赛前积分排名`
        }
    }
}
</script>

<style lang="css">
</style>
