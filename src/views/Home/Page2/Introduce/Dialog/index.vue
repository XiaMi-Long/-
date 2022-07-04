<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-04 22:38:29
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-04 22:54:05
-->
<template>
  <div>
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :close-on-press-escape="false"
      :wrapperClosable="false"
      append-to-body
      size="80%"
      @close="$emit('drawer-close')"
    >
      <div class="A-photo" v-if="getRole === 'A'"></div>
      <div class="B-photo" v-if="getRole === 'B'"></div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "PhotoDialogView",

  props: {
    openDrawer: {
      type: Boolean,
      default: false,
      required: true,
    },
  },

  data() {
    return {
      drawer: false,
    };
  },

  computed: {
    getRole() {
      return this.$store.getters.getRole;
    },
  },

  watch: {
    openDrawer(newValue) {
      this.drawer = newValue;
    },
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.A-photo {
  width: 100%;
  height: 100%;

  background: url("@/assets/A-lihui.png") no-repeat;
  background-size: contain;
}
.B-photo {
  width: 100%;
  height: 100%;

  background: url("@/assets/B-lihui.png") no-repeat;
  background-size: contain;
}
</style>
