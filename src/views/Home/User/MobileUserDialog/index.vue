<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-05-17 19:56:12
 * @LastEditors: wwy
 * @LastEditTime: 2022-06-22 17:54:19
-->
<template>
  <div>
    <el-drawer
      :title="info.userName + '的自我介绍'"
      :visible.sync="drawer"
      :direction="direction"
      append-to-body
      @close="dialogClose"
      size="90%"
      custom-class="mobile-dialog"
    >
      <h4 class="info" v-for="(item, index) in info.introduce" :key="index">
        <img class="info-icon" src="~@/assets/cat.png" alt="" />
        {{ item }}
      </h4>

      <p>&nbsp;</p>

      <a :href="info.cloudMusicUrl" class="href-button" target="_blank">
        <div class="button">
          {{ info.userName }}的网易云主页 <i class="el-icon-arrow-right"></i>
        </div>
      </a>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "MobileUserDialogView",
  data() {
    return {
      drawer: this.drawerOpen,
      direction: "rtl",
    };
  },
  props: {
    drawerOpen: {
      type: Boolean,
      default: false,
      required: true,
    },
    info: {
      type: Object,
      required: true,
    },
  },
  watch: {
    drawerOpen(newValue) {
      this.drawer = newValue;
    },
  },
  methods: {
    /* dialog关闭的回调 */
    dialogClose() {
      this.$emit("dialog-close");
    },
  },
};
</script>

<style lang="scss" scoped>
.info {
  font-weight: 200;
  text-align: left;

  &-icon {
    width: 25px;
    height: 25px;
  }
}

.mobile-dialog {
  .el-drawer__header {
    margin-bottom: 0;
  }
  .el-drawer__body {
    padding: 0 40px 40px 40px;
  }
}

.href-button {
  text-decoration: none;

  color: black;

  text-align: center;
  display: block;
}

.button {
  border: 2px solid black;
  border-radius: 7px;

  line-height: 2.5em;

  text-align: center;

  display: inline-block;

  width: 80%;
}
</style>
