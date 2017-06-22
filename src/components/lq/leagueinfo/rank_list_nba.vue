<template>
    <div class="">
        <div class="games-list rank-tb" v-for="(name, type) in rankType">
            <rank-list :data='data[type]' :strOfNBA='name'></rank-list>
        </div>
    </div>
</template>

<script>
import vue from 'vue'
import vueTap from 'v-tap'
import Prompt from '~components/common/prompt.vue'
import rankList from '~components/lq/leagueinfo/rank_list.vue'
vue.use(vueTap)

export default {
    components: {
        rankList
    },
    data() {
        return {
            rankType: {
                east: '东部',
                west: '西部'
            }
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
</style>
