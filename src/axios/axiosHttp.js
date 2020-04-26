import axios from "axios"

export let httpGet = (url)  =>  axios.get(url)
    // axios.get('/api/home.json')
    //     .then(res => {
    //         let Data = res.data
    //         if (res.statusText == "OK") {
    //             this.recomment = Data.recomment.reverse()
    //         }
    //     })