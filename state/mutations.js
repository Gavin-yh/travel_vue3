export default {
    changeState(state,city){
        state.city = city
        try{
            localStorage.city = city
        }catch (e){}
    },
    changeViewName (state, Name){
        try{
            localStorage.viewName = Name
        }catch(e){}
        state.viewName = name
    },
    saveDetailData (state , params){
        state.imgUrl = params.url,
        state.imgLength = params.url.length,
        state.imgName = params.name,
        state.firstImg = params.url[0]

        state.recom = params.recom
    }

}