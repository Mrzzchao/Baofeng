<template>
<table class="games" width="100%" cellspacing="0" cellpadding="0">
    <colgroup>
        <col width="35%">
        <col width="18%">
        <col width="15%">
        <col width="15%">
        <col width="17%">
    </colgroup>
    <tbody>
        <tr>
            <th class="tb-lp">
                <em class="where-mat" v-if="strOfNBA">{{strOfNBA}}</em>
            </th>
            <th>
                胜/负
            </th>
            <th>
                胜率
            </th>
            <th>
                胜差
            </th>
            <th align="right">
                状态
            </th>
        </tr>
        <tr v-for="(row, idx) in data">
            <td>
                <em class="cate-cont"><i class="game-category">{{idx+1}}</i></em><em class="gamer-cont"><img :src="row.teamlogo">{{row.teamgbname}}</em>
            </td>
            <td>
                {{row.win}}/{{row.lost}}
            </td>
            <td>
                {{row.winrate}}%
            </td>
            <td>
                {{row.windiff}}
            </td>
            <td :class="status[row.winstatus].className">
                {{row.wintext}}{{status[row.winstatus].text}}
            </td>
        </tr>

    </tbody>
</table>
</template>

<script>
export default {
    data() {
        return {
            status: {
                '-1': {
                    className: '',
                    text: ''
                },
                '0': {
                    className: 'tb-rp tb-rp-fail',
                    text: '连败',
                },
                '1': {
                    className: 'tb-rp',
                    text: '连胜',
                }

            }
        }
    },
    props: {
        data: {
            type: Array,
            required: true
        },
        strOfNBA: {
            type: String
        }
    }
}
</script>

<style lang="css">
</style>
