<template>
        <header class="header inte-header">
            <nav class="sk-tab">
                <router-link v-for="(tab, idx) in tabs" :class="{'cur': type==tab.type}" :to="tab.to" :key="idx" replace>{{tab.name}}<i class="sktab-arrow"></i></a></router-link>
            </nav>
        </header>
</template>

<script>

export default {
    computed: {
        type () {
            return this.$route.meta.tab
        },
        iscup() {
            return this.$store.state.leagueZq.params.iscup === '0'
        }
    },
    props: {
        tabs: {
            type: Array,
            required: true
        }
    },
    mounted () {
        if (this.iscup) {
            this.tabs[0].name = '积分榜'
        }
    }
}
</script>

<style lang="css">
    .header {
        height: 1rem;
    }
</style>
