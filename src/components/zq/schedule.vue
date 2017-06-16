<template>
    <div>
        <event-list></event-list>
        <statistic-list></statistic-list>
    </div>
</template>

<script>
import eventList from '~components/zq/schedule/event_list.vue'
import statisticList from '~components/zq/schedule/statistic_list.vue'
export default {
    components: {
        eventList,
        statisticList
    }
}
</script>

<style lang="css">
</style>
