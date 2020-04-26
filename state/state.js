
let Default = "上海"

try{
    if(localStorage.city){
        Default = localStorage.city
    }
}catch (e){}

let DefaultRouteState = "/"
try{
    if(localStorage.detailRouteState){
        DefaultRouteState = localStorage.detailRouteState
    }
}catch{}


export default  {
    city: Default,
    viewName:"",
    imgUrl:[],
    imgLength:0,
    imgName:"",
    firstImg:"",
    recom:null,//详情页中的数据（detail-recommend)

    detailRouteState: DefaultRouteState//路由的缓存 ， 供城市选择与首页和榜单页面之间的逻辑
}