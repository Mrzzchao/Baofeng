<template>
    <div class="refresh-box"><i id="sx" class="refresh-icon" :class="{'refresh-rorate': isLoading}" @click='refresh()'></i></div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: false
        }
    },
    props: {
        dispatchName: {
            type: String,
            required: true
        },
        param: {

        }
    },
    methods: {
        refresh() {
            this.isLoading = true
            this.$store.dispatch(this.dispatchName, this.param).then(() => {
                this.isLoading = false
            })
        }
    }
}
</script>

<style lang="css">
</style>
