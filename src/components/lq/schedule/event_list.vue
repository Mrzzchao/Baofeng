<template>
    <div v-if="baseinfo">
        <div class="jie-detail jie-detail-nomb">
            <div class="jie-detailL">
                <div class="t-nav">
                </div>
                <ul class="t-detail">
                    <li>
                        <div class="t-img">
                            <img :src="baseinfo.awaylogo">
                        </div>
                        {{baseinfo.awaysxname}}(客)</li>
                    <li>
                        <div class="t-img">
                            <img :src="baseinfo.homelogo">
                        </div>
                        {{baseinfo.homesxname}}(主)</li>
                </ul>
            </div>
            <div class="jie-detailR" v-if="lastEvents">
                <div id="slider" class="slide-box mr40">
                    <div class="t-nav">
                        <div class="responsive">
                            <div v-for="idx in eventLength">
                                <div class="wjie" v-if="idx < 5">
                                    {{idx}}节
                                </div>
                                <div class="wjie" v-else>
                                    加{{idx-4}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul class="t-detail">
                        <li class="responsive">
                            <div class="wjie" v-for="event in lastEvents">
                                {{event.awayscore}}
                            </div>
                        </li>
                        <li class="responsive">
                            <div class="wjie" v-for="event in lastEvents">
                                {{event.homescore}}
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="zongfen-box">
                    <div class="zongfen gray-zf">
                        总分
                    </div>
                    <div class="zongfen red-zf">
                        {{lastEvents[eventLength - 1].awayscore}}
                    </div>
                    <div class="zongfen red-zf">
                        {{lastEvents[eventLength - 1].homescore}}
                    </div>
                </div>
                <div class="sli-line">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    computed: {
        baseinfo() {
            return this.$store.state.lqInfo.baseinfo
        },
        events() {
            return this.$store.state.lqInfo.events
        },
        eventLength() {
            return this.events && this.events.length
        },
        lastEvents() {
            return this.events && this.events.map((arr) => {
                return arr[arr.length - 1]
            })
        }
    }
}
</script>

<style lang="css">
</style>
