import Vue from 'vue'
import App from './App.vue'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from '../router/router.js'
import store from '../state/index.js'
import '../src/assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import lazyLoad from 'vue-lazyload'
// import '../mock/mock'

import VueCompositionApi from '@vue/composition-api';

Vue.use(VueCompositionApi);

fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(lazyLoad,{
    loading: '../public/photo/loading2.png'
})


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')