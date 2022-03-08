<template>
  <div class="box-gemotry">
    <div class="text">
      立方缓冲几何体(BoxGeometry)
      <span class="show-code" @click="showCode">查看代码</span>
    </div>
    <div id="gui-container"></div>
    <div id="render-box"></div>
    <PreviewCodeVue
      :ediorValue="ediorValue"
      :visibled="visibled"
    ></PreviewCodeVue>
  </div>
</template>

<script>
/*esint-disable*/
import BoxGeomegry from "./BoxGeometry";
import { boxGeometry } from "./code";
import PreviewCodeVue from "@/components/PreviewCode.vue";
export default {
  name: "BoxGemotry",
  mixins: [BoxGeomegry],
  components: {
    PreviewCodeVue,
  },
  data() {
    return {
      visibled: false,
      ediorValue: boxGeometry,
      publicPath: process.env.BASE_URL,
    };
  },
  mounted() {
    this.initThree(
      document.getElementById("render-box"),
      document.getElementById("gui-container")
    );
  },
  methods: {
    showCode() {
      this.visibled = true;
    },
  },
};
</script>

<style lang="less" scoped>
.box-gemotry {
  position: relative;
  #gui-container {
    position: absolute;
    top: 0;
    right: 0;
  }
  .show-code {
    font-size: 14px;
    cursor: pointer;
  }
  .text {
    margin: 10px;
    height: 30px;
  }
  #render-box {
    width: 100%;
    height: calc(100% - 30px - 20px);
  }
}
</style>
