<template>
  <div class="foot-wrap">
    <div class="foot-title border-bottom">
      <h3 class="title">看了该景点的人还看了</h3>
    </div>
    <recom-list :recomment="state.recomment"></recom-list>
  </div>
</template>

<script>
import recomList from "./recom-list.vue";
import { reactive, onMounted } from "@vue/composition-api";

import axios from "axios";

import { httpGet } from "@/axios/axiosHttp.js";
export default {
  name: "detailFoot",
  setup() {
    let state = reactive({
      recomment: []
    });
    onMounted(async () => {
      let Data = await httpGet("/api/home.json");
      if (Data.statusText == "OK") {
        state.recomment = Data.data.recomment.reverse();
      }
    });
    return {
      state
    };
  },
  components: {
    recomList
  }
};
</script>

<style lang="stylus" scoped>
.foot-wrap {
  z-index: -1;
  background: #ffffff;
  margin-top: 0.2rem;

  .foot-title {
    .title {
      padding: 0 0.1rem;
      height: 0.88rem;
      background: #fff;
      color: #333;
      font-size: 0.3rem;
      line-height: 0.88rem;
      text-indent: 0.2rem;

      &::before {
        display: inline-block;
        content: '';
        height: 0.25rem;
        width: 0.04rem;
        background: #00f;
        margin-right: 0.2rem;
      }
    }
  }
}
</style>