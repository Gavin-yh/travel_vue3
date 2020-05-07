import axios from 'axios'

export let getCity = (ctx, name) => ctx.$store.state[name]


export function headerWatch() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

export let getHomeData = (state) => {
    return axios.get('/api/home.json')
        // axios.get('http://xpian.aliveto.cn/home.json')
        .then(res => {
            let Data = res.data
            if (res.statusText == "OK") {
                ({
                    headerSwiper: state.headerSwiper,
                    iconList: state.iconList,
                    weekendHot: state.weekendHot,
                    recomment: state.recomment,
                    weekendGo: state.weekendGo
                } = Data)
            }
        })
}