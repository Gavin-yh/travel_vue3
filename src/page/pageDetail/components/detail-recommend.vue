<template>
    <div class="D-recom">
        <div class="travel">
            <div class="travel-T">
                <span class="travel-title">入园参考</span>
            </div>
            <div class="travel-content">
                <h4 class="Tcon-title">开放时间</h4>
                <p>旺季(6月～10月)：09:00～18:00开放，17:00停止入园；</p>
                <p>淡季(11月～5月)：09:00～17:00开放，16:00停止入园；</p>
            </div>
        </div>
        <div class="play travel">
            <div class="travel-T">
                <span class="travel-title">特色玩法</span>
            </div>
            <div class="travel-content">
                <div v-for = "(val,key,index) of recom" :key = "index">
                    <div class="play-recom">{{key}}</div>
                    <div class="play-img">
                        <img :src="val" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "detailR",
    props:{
        recom: Object
    }

}
</script>

<style lang="stylus" scoped>
    @import '~style/mixin.styl'
    .D-recom
        background #eeeeee
        line-height .6rem
        .travel
            position relative
            background #ffffff
            .travel-T
                border-bottom 1px solid #eee
                .travel-title
                    padding-left .2rem
                    display inline-block
                    width 4rem
                    font-size .3rem
                    font-weight bold
                    color #212121
                &:before
                    display inline-block
                    content ""
                    width .2rem
                    height .2rem
                    background #f40
            .travel-content 
                padding: 0rem 0.2rem .2rem;
                .Tcon-title
                    font-size .3rem
                    font-weight bold
                    color #212121
        .play
            margin-top .2rem
            .play-recom
                line-height .42rem
                color #616161
            .play-img
                height 0
                padding-bottom 59%
                width 100%
                overflow hidden
                background #eeeeee
                margin .2rem 0
                img
                    width 100%
                


            

                    
                
</style>