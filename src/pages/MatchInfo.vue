<template>
  <h1>hello</h1>
</template>

<script>
import {aTypes} from '~store/zq.js'

export default {
    mounted() {
        this.$store.dispatch(aTypes.getAllData, 33);
    }
}
</script>

<style lang="css">
</style>
