<template>
  <el-dialog
    title="代码详情"
    :visible="visibled"
    @close="closePreview"
    class="preview-code"
    top="8vh"
  >
    <mavon-editor
      :subfield="false"
      :defaultOpen="'preview'"
      v-model="ediorValue"
      :toolbars="{}"
      :toolbarsFlag="false"
    ></mavon-editor>
  </el-dialog>
</template>

<script>
export default {
  name: "PreviewCode",
  props: {
    ediorValue: {
      type: String,
      default: "",
      required: true,
    },
    visibled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    closePreview() {
      this.$parent.visibled = false;
    },
  },
};
</script>

<style lang="less" scoped>
.preview-code {
  /deep/.el-dialog__body {
    height: 70vh;
    overflow-y: auto;
  }
}
</style>
