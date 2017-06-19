<template>
    <div class="zhedie">
        <table width="100%" cellpadding="0" cellspacing="0" class="lq-zr">
            <tbody>
                <tr v-for="member in members">
                    <td width="50%">
                        <span class="qiuhao">{{member.home.playernum}}</span>&nbsp;{{member.home.playername}} <span class="gangwei">{{member.home.rolegbname}}</span>
                    </td>
                    <td width="50%">
                        <span class="qiuhao">{{member.away.playernum}}</span>&nbsp;{{member.away.playername}} <span class="gangwei">{{member.away.rolegbname}}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        members: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="css">
</style>
