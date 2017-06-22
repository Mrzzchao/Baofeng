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
            <div class="jie-detailR" >
                <div id="slider" class="slide-box mr40">
                    <div class="t-nav">
                        <div class="responsive">
                            <div v-for="idx in sectionScore_h.length">
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
                            <div class="wjie" v-for="score in sectionScore_a">
                                {{score}}
                            </div>
                        </li>
                        <li class="responsive">
                            <div class="wjie" v-for="score in sectionScore_h">
                                {{score}}
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="zongfen-box">
                    <div class="zongfen gray-zf">
                        总分
                    </div>
                    <div class="zongfen red-zf">
                        {{baseinfo.awayscore}}
                    </div>
                    <div class="zongfen red-zf">
                        {{baseinfo.homescore}}
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
            return this.$store.state.matchLq.baseinfo
        },
        sectionScore_h() {
            return this.baseinfo.hscore.split('-')
        },
        sectionScore_a() {
            return this.baseinfo.ascore.split('-')
        }
    }
}
</script>

<style lang="css">
</style>
