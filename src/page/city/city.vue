<template>
    <div>
        <city-header :cities = "cities"></city-header>
        <city-list :graph = "graph" :hotcity = "hotcity" :cities = "cities"></city-list>
        <city-graph @export = "childVal" :cities = "cities"></city-graph>
    </div>
</template>

<script>
import cityHeader from './component/city-header'
import cityList from './component/city-list'
import cityGraph from './component/city-graph'
import axios from 'axios'


export default {
    name: "city",
    data(){
        return {
            cities:{},
            hotcity:[],
            graph: ""
        }
    },
    methods: {
        childVal(val){
            if(val){
                console.log(val)
               this.graph = val 
            }
        },
        getInfo (){
        axios.get('/api/city.json')
        // axios.get('http://xpian.aliveto.cn/city.json')
            .then(res => {
                if(res.statusText == "OK"){
                    let data = res.data
                    this.cities = data.cities
                    this.hotcity = data.hotcity
                }
            })
        }
    },
    components: {
        cityHeader,
        cityList,
        cityGraph
    },
    mounted (){
        // axios.get('/city/data')
        //     .then(res => {
        //         if(res.data.codemsg){
        //             let data = res.data.data
        //             this.cities = data.cities
        //             this.hotcity = data.hotcity
        //         }
        //     })
        this.getInfo()
    }
}
</script>

<style lang="stylus" scoped>
</style>