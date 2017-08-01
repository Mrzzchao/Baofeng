<template>
    <div>
        <div class="zhedie-box" v-if="noEmptyFlag">
            <div class="gl-nav">
                球队统计
            </div>
            <div class="zhedie">
                <ul class="zhzl-list">
                    <li class="responsive">
                        <div class="zhzl-left">
                            <div class="who-gamer-home l-flex-1">
                                <img :src="baseinfo.awaylogo"><em>{{baseinfo.awaysxname}}</em>
                            </div>
                        </div>
                        <div class="each-resone">
                            <div class="zhzl-classify">
                            </div>
                            <div class="responsive">
                                <div class="each-resone l-relative">
                                </div>
                                <div class="each-resone l-relative">
                                </div>
                            </div>
                        </div>
                        <div class="zhzl-right">
                            <div class="who-gamer-guest l-flex-1">
                                <em>{{baseinfo.homesxname}}</em><img :src="baseinfo.homelogo">
                            </div>
                        </div>
                    </li>
                    <li class="responsive" v-for="(name, type) in StatisticsType_LQ">
                        <div class="zhzl-left">
                            {{statistics.away.zj[type]}}
                        </div>
                        <div class="each-resone">
                            <div class="zhzl-classify">
                                {{name}}
                            </div>
                            <div class="responsive">
        						<div class="each-resone l-relative">
        							<div class="zhzl-vs-left" :class="leftColorClass[type]" :style="leftWidthStyle[type]">
        							</div>
        						</div>
        						<div class="each-resone l-relative">
        							<div class="zhzl-vs-right" :class="rightColorClass[type]" :style="rightWidthStyle[type]">
        							</div>
        						</div>
        					</div>
                        </div>
                        <div class="zhzl-right">
                            {{statistics.home.zj[type]}}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="zhedie-box" v-for="hoa in ['away', 'home']" v-if="baseinfo && noEmptyFlag">
            <div class="gl-nav">
                {{baseinfo[hoa + 'sxname']}}统计
            </div>
            <!-- <div class="jie-detail" v-for="(name, tab) in tabs">
                <div class="jie-detailL">
                    <div class="t-nav bgnav">
                        {{name}}球员
                    </div>
                    <ul class="t-detail bri">
                        <li v-for="member in statistics[hoa][tab]">{{member.player}}</li>
                    </ul>
                </div>
                <div class="jie-detailR">
                    <div class="slide-box">
                        <div class="t-nav bgnav">
                            <div class="responsive">
                                <div class="wjie" v-for="(th, type) in Statistics_LQ_TH">
                                    {{th}}
                                </div>
                            </div>
                        </div>
                        <ul class="t-detail">
                            <li class="responsive" v-for="member in statistics[hoa][tab]">
                                <div class="wjie" v-for="(th, type) in Statistics_LQ_TH">
                                    {{member[type]}}
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="white-shadow">
                        <div class="t-nav">
                            &nbsp;
                        </div>
                        <ul class="t-detail">
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>
                    </div>
                </div>
            </div> -->
            <div class="gl-box fx-zr-box">
            	<div class="dataBox">
            		<div class="zr-detail">
            			<ul class="zr-detail-left">
                            <template v-for="(name, tab) in tabs">
                                <li class="zr-detail-tit">{{name}}球员</li>
                                <li v-for="member in statistics[hoa][tab]">{{member.player}}</li>
                            </template>

            			</ul>
            			<div class="scroll-cont">
            				<ul class="zr-detail-right table-tj">
                                <template v-for="(name, tab) in tabs">
                                    <li class="zr-detailer zr-detail-tit">
                                        <ul>
                                            <li v-for="(th, type) in Statistics_LQ_TH">{{th}}</li>
                                        </ul>
                                    </li>
                                    <li class="zr-detailer" v-for="member in statistics[hoa][tab]">
                                        <ul>
                                            <li v-for="(th, type) in Statistics_LQ_TH">{{member[type]}}</li>
                                        </ul>
                                    </li>
                                </template>

            				</ul>
            			</div>
            		</div>
            	</div>
            </div>
        </div>
    </div>
</template>

<script>
import {StatisticsType_LQ, Statistics_LQ_TH} from '~common/constants'

export default {
    data() {
        return {
            StatisticsType_LQ,
            Statistics_LQ_TH,
            tabs: {
                sf: '首发',
                tb: '替补'
            }
        }
    },
    computed: {
        baseinfo() {
            return this.$store.state.matchLq.baseinfo
        },
        statistics() {
            return this.$store.state.matchLq.statistics
        },
        noEmptyFlag() {
            return this.noEmpty(this.statistics)
        },
        leftColorClass() {
            let colorObj = {}
            for (var type in this.StatisticsType_LQ) {
                if (this.StatisticsType_LQ.hasOwnProperty(type)) {
                    colorObj[type] = this.makeColorClass(type)
                }
            }
            return colorObj
        },
        rightColorClass() {
            let colorObj = {}
            for (var type in this.StatisticsType_LQ) {
                if (this.StatisticsType_LQ.hasOwnProperty(type)) {
                    colorObj[type] = this.makeColorClass(type, true)
                }
            }
            return colorObj
        },
        leftWidthStyle() {
            let widthObj = {}
            for (var type in this.StatisticsType_LQ) {
                if (this.StatisticsType_LQ.hasOwnProperty(type)) {
                    widthObj[type] = this.makeWidthStyle(type)
                }
            }
            return widthObj
        },
        rightWidthStyle() {
            let widthObj = {}
            for (var type in this.StatisticsType_LQ) {
                if (this.StatisticsType_LQ.hasOwnProperty(type)) {
                    widthObj[type] = this.makeWidthStyle(type, true)
                }
            }
            return widthObj
        }
    },
    methods: {
        makeWidthStyle(key, isReverse) {
            let home = parseInt(this.statistics.home.zj[key])
            let away = parseInt(this.statistics.away.zj[key])
            let result = (home / (home + away)) * 100
            if (isReverse) {
                return `width: ${result}%`
            }
            return `width: ${100 - result}%`
        },
        makeColorClass(key, isReverse, class_l = 'zhzl-green', class_s = 'zhzl-gray') {
            let home = parseInt(this.statistics.home.zj[key])
            let away = parseInt(this.statistics.away.zj[key])
            if (isReverse) {
                return home > away ? class_l : class_s
            }
            return home < away ? class_l : class_s
        },
        noEmpty(obj) {
            if(obj)
                return !!Object.keys(obj).length
            return false
        }
    }
}
</script>

<style lang="css">
</style>
