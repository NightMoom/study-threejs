<template>
  <div class="menu">
    <el-menu mode="horizontal" router>
      <el-submenu
        v-for="(v, index) in createRoute"
        :key="v.path"
        :index="index + 1 + ''"
      >
        <template slot="title">
          {{ v.name }}
        </template>
        <el-menu-item
          v-for="t in v.children"
          :key="t.path"
          :index="t.path"
          :route="t.path"
        >
          {{ t.name }}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { createRoute } from "@/router/route";

export default {
  name: "Menu",
  data() {
    return {
      createRoute,
    };
  },
  methods: {
    onMenuSelect(e) {
      console.log("e", e);
    },
  },
};
</script>

<style lang="less" scoped></style>
