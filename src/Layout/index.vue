<template>
  <div class="layout">
    <el-container>
      <el-header>
        <Menu></Menu>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Menu from "./Menu.vue";

export default {
  name: "Layout",
  data() {
    return {};
  },
  components: {
    Menu,
  },
};
</script>

<style lang="less">
.main {
  height: calc(100vh - 60px);
  + div {
    height: 100%;
    overflow: auto;
  }
}
</style>
