import router from 'vue-router'
import vue from 'vue'

vue.use(router)

import hotAllBar from '@/page/AllBar/hotAllBar.vue'
import homepage from '@/page/home/home.vue'
import pageDetail from '@/page/pageDetail/detail.vue'

import city from '@/page/city/city.vue'
export default new router({
    // mode :"history",
    routes:[{
        path: '/banner',
        component: hotAllBar
    },{
        path: '/',
        name: 'home',//具名路由
        component: homepage
    },{
        path: '/city',
        name: 'city',
        component: city

    },{
        path: '/detail/:id',
        name: "detail",
        component: pageDetail
    },{
        path: '*',
        component: homepage
    }]
})