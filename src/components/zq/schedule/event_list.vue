<template>
    <div v-if="noEmptyFlag && baseinfo">
        <div class="sk-nav bge6">
            事件
        </div>
        <div class="shikuang-box">
            <ul class="shikuang-line">
                <li class="d-zt-box"><span class="d-zt">结束</span></li>
                <li :class="makeEventTypeClass(event)"  v-for="(event, idx) in events">
                    <span class="sk-time">{{event.timing_point}}'</span>
                    <div v-if="event.eventtype === EventType.HUAN_REN.id">
                        <span class="shikuang-ball"><i class="jiaohuan"></i></span>
                        <span class="shikuang-ball"><i class="jiaohuan"></i></span>
                        <dl class="jh">
                            <dd>{{event.exchange_player[0] | truncate(8)}} <i class="green-arrow"></i></dd>
                            <dd>{{event.exchange_player[1] | truncate(8)}} <i class="red-arrow"></i></dd>
                        </dl>
                    </div>
                    <div v-else>
                        <span class="shikuang-ball">
                            <i :class="eventTypeMap[event.eventtype].className"></i>
                        </span>
                        <code class="jinqiu" v-if="event.eventtype === EventType.JIN_QIU.id && !(event.is_team)">进球</code>
                        <div class="ren-name">
                            {{event.cdata === '' ? (event.is_team === 1 ? `【${baseinfo.homesxname}】` : `【${baseinfo.awaysxname}】`) : event.cdata | truncate(12)}}
                        </div>
                        <code class="jinqiu" v-if="event.eventtype === EventType.JIN_QIU.id && event.is_team">进球</code>
                    </div>
                </li>
                <li class="d-zt-box"><span class="d-zt">开始</span></li>
            </ul>
        </div>
        <div class="sk-intro">
            <img src="http://tccache.500.com/mobile/touch/images/bifen/intro.png" width="100%">
        </div>
    </div>
</template>

<script>
import {EventType} from '~common/constants'
export default {
    data () {
        return {
            EventType: EventType
        }
    },
    computed: {
        baseinfo() {
            return this.$store.state.zqInfo.baseinfo
        },
        events () {
            return this.$store.state.zqInfo.situation && this.$store.state.zqInfo.situation.eventlist
        },
        eventTypeMap () {
            let obj = {}
            Object.keys(EventType).forEach((key) => {
                obj[EventType[key].id] = EventType[key]
            })

            return obj
        },
        noEmptyFlag() {
            return this.noEmpty(this.events)
        }
    },
    methods: {
        makeEventTypeClass (event) {
            let str = ''
            this.onLeft = event.is_team || false
            str = event.is_team ? 'shikuang-lineLeft' : 'shikuang-lineRight'
            str += event.eventtype === EventType.HUAN_REN.id ? ' jh-box' : ''
            return str
        },
        noEmpty(obj) {
            if(obj)
                return !!Object.keys(obj).length
            return false
        }
    },
    filters: {
        truncate (input, length, tail) {
            if (input.length <= length) {
                return input
            }
            return input.slice(0, length) + (tail || '...')
        }
    }
}
</script>

<style lang="css">
</style>
