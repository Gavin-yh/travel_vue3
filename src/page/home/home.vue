<template>
    <div id="home">
        <home-header></home-header>
        <home-swiper :swiperdata = "state.headerSwiper"></home-swiper>
        <home-icon :icons = "state.iconList"></home-icon>
        <home-list-bottom></home-list-bottom>
        <home-wek-hot :weekendHot = "state.weekendHot"></home-wek-hot>
        <home-recom :recomment = "state.recomment"></home-recom>
        <home-wek-go :weekendGo = "state.weekendGo"></home-wek-go>
        <home-foot></home-foot>
    </div>
</template>
<script>
import homeHeader from './components/header.vue'
import homeSwiper from './components/swiper.vue'
import homeIcon from './components/icon.vue'
import homeListBottom from './components/map-list-bottom.vue'
import homeWekHot from './components/weekend-hot.vue'
import homeRecom from './components/recommend.vue'
import homeWekGo from './components/weekend-go.vue'
import homeFoot from './components/foot-dec.vue'
import axios from 'axios'
import { mapState } from 'vuex';
import { reactive,onMounted, computed, watch, getCurrentInstance, onActivated } from '@vue/composition-api'
import { getHomeData, getCity } from "./getStore"
export default {
    name : "homepage",
    setup() {
        let ctx = getCurrentInstance()
        let state = reactive({
            lastCity : getCity(ctx, 'city'),//缓冲的变量
            headerSwiper:[],
            iconList:[],
            weekendHot:[],
            recomment:[],
            weekendGo:[]
        })
        onMounted(async () => {
            await getHomeData(state)
        })
        onActivated(async () => {
            if(state.lastCity !== getCity(ctx, 'city')){
                state.lastCity = getCity(ctx, 'city')
                await getHomeData(state) 
            }
        })
        
        return {
            state
        }
    },
    components: {
        homeHeader,
        homeSwiper,
        homeIcon,
        homeListBottom,
        homeWekHot,
        homeRecom,
        homeWekGo,
        homeFoot
    },
    // data(){
    //     return {
    //         lastCity : '',//缓冲的变量
    //         headerSwiper:[],
    //         iconList:[],
    //         weekendHot:[],
    //         recomment:[],
    //         weekendGo:[]
    //     }
    // },
    // computed: {
    //     ...mapState({
    //         city : 'city' //获取状态 结合缓冲的变量 对当前的数据进行检查 看是否需要发送新的请求
    //     })
    // },
    // methods : {
    //     getInfo (){
    //         axios.get('/api/home.json')
    //     // axios.get('http://xpian.aliveto.cn/home.json')
    //         .then(res => {
    //                 let Data = res.data
    //                 if(res.statusText == "OK"){
    //                     ({
    //                         headerSwiper: this.headerSwiper,
    //                         iconList: this.iconList,
    //                         weekendHot: this.weekendHot,
    //                         recomment: this.recomment,
    //                         weekendGo: this.weekendGo
    //                     } = Data )
    //                 }
    //             })
    //     }
    // },
    // components: {
    //     homeHeader,
    //     homeSwiper,
    //     homeIcon,
    //     homeListBottom,
    //     homeWekHot,
    //     homeRecom,
    //     homeWekGo,
    //     homeFoot
    // },
    // mounted (){
        //mockjs + axios 
        //mockjs直接拦截 http (xhr)请求,当用<keep-alive>进行优化（减少在路由切换时频繁发送相应的请求) , 用mockjs 无法模拟真实的xhr请求
        // 进而 中间的一些需要优化的问题 也就没办法体现出来
        // axios.get('/home/data')
        //     .then(res => {
        //         let Data = res.data.data
        //         if(res.data.codemsg){
        //             this.headerSwiper = Data.headerSwiper
        //             this.iconList = Data.iconList
        //             this.weekendHot = Data.weekendHot
        //             this.recomment = Data.recomment
        //             this.weekendGo = Data.weekendGo
        //         }
        //     })


        // webpack 中的代理proxy  + axios
        // 可以比较完整的模拟出 ， xhr 的请求，在路由切换的时候，network 下的xhr 会发现mounted 执行时会发送相同的请求 而没有去缓存
        // 则<keep-alive> 实现组件数据的缓存
        // axios.get('/city/data')
        //     .then(res => {
        //         console.log(res)
        //     },fa => {
        //         console.log(fa)
        //     })
    //    this.lastCity = this.city
    //    this.getInfo() 
    // },
    // activated (){
    //     if(this.lastCity !== this.city){
    //         this.lastCity = this.city
    //         this.getInfo()
    //     }
    // }
}
</script>
