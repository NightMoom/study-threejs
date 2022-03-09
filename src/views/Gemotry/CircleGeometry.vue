<template>
  <div class="circle-geometry">
    <div class="text">
      圆形缓冲几何体(CircleGeometry)
      <span class="show-code" @click="showCode">查看代码</span>
    </div>
    <div id="gui-container"></div>
    <div id="render-box"></div>
  </div>
</template>

<script>
export default {
  name: "CircleGeometry",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.circle-geometry {
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
