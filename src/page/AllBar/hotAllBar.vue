<template>
    <div class="banner-wrap">
        <default-header></default-header>
        <bar-list></bar-list>
    </div>
</template>

<script>
import defaultHeader from 'pubCom/headerBar/defaultHeader'
import barList from './component/barList.vue'
export default {
    name: "bannerBar",
    components: {
        defaultHeader,
        barList
    }
}
</script>

<style lang="stylus" scoped>

</style>
