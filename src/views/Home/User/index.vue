<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-05-20 15:51:18
 * @LastEditors: wwy
 * @LastEditTime: 2022-06-22 17:46:27
-->
<template>
  <div class="user_container">
    <div class="user_left" v-if="leftShow">
      <!-- 用户头像 -->
      <UserPhotoView :photoUrl="leftPhoto"></UserPhotoView>

      <!-- 用户简述 -->
      <UserIntroduceView :info="introduceUserA"></UserIntroduceView>

      <!-- 个人信息按钮 -->
      <div class="mobile_button">
        <!-- 个人介绍 -->
        <div class="mobile_introduce" @click="handleLeftClick">个人介绍</div>
        <!-- 去直播间 -->
        <a
          :href="introduceUserA.bilibiliUrl"
          target="_blank"
          class="a-clear-default-style"
        >
          <div class="mobile_introduce">去直播间</div>
        </a>
        <!-- 我的歌单 -->
        <div class="mobile_introduce" @click="handleLeftSongSheetClick">
          我的歌单
        </div>
      </div>
    </div>
    <div class="user_right" v-if="rightShow">
      <!-- 用户头像 -->
      <UserPhotoView :photoUrl="rightPhoto"></UserPhotoView>

      <!-- 用户简述 -->
      <UserIntroduceView :info="introduceUserB"></UserIntroduceView>

      <!-- 个人信息按钮 -->
      <div class="mobile_button">
        <!-- 个人介绍 -->
        <div class="mobile_introduce" @click="handleRightClick">个人介绍</div>
        <!-- 去直播间 -->
        <a
          :href="introduceUserB.bilibiliUrl"
          target="_blank"
          class="a-clear-default-style"
        >
          <div class="mobile_introduce">去直播间</div>
        </a>
        <!-- 我的歌单 -->
        <div class="mobile_introduce" @click="handleRightSongSheetClick">
          我的歌单
        </div>
      </div>
    </div>

    <!-- 左边的弹窗 -->
    <el-dialog
      :visible.sync="leftDialogVisible"
      width="50%"
      append-to-body
      class="user_view_dialog"
      v-if="leftShow"
    >
      <UserInfoView :info="introduceUserA"></UserInfoView>
    </el-dialog>

    <!-- 右边的弹窗 -->
    <el-dialog
      :visible.sync="rightDialogVisible"
      width="50%"
      append-to-body
      class="user_view_dialog"
      v-if="rightShow"
    >
      <UserInfoView :info="introduceUserB"></UserInfoView>
    </el-dialog>

    <!-- 手机视口下的个人介绍弹窗-左边 -->
    <MobileUserDialogView
      :drawer-open="isOpenMobileLeftDialog"
      @dialog-close="MobileLeftDialogClose"
      :info="introduceUserA"
      v-if="leftShow"
    ></MobileUserDialogView>

    <!-- 手机视口下的个人介绍弹窗-右边 -->
    <MobileUserDialogView
      :drawer-open="isOpenMobileRightDialog"
      @dialog-close="MobileRightDialogClose"
      :info="introduceUserB"
      v-if="rightShow"
    ></MobileUserDialogView>
  </div>
</template>

<script>
import UserPhotoView from "@/views/Home/User/UserPhoto/index.vue";
import UserIntroduceView from "@/views/Home/User/UserIntroduce/index.vue";
import UserInfoView from "@/views/Home/User/UserInfo/index.vue";
import MobileUserDialogView from "@/views/Home/User/MobileUserDialog/index.vue";

export default {
  name: "UserView",
  components: {
    UserPhotoView,
    UserIntroduceView,
    UserInfoView,
    MobileUserDialogView,
  },
  data() {
    return {
      leftPhoto: require("@/assets/sky.jpg"),
      rightPhoto: require("@/assets/preview.jpg"),

      introduceUserA: window._user["A"],
      introduceUserB: window._user["B"],

      leftDialogVisible: false,
      rightDialogVisible: false,
      isOpenMobileLeftDialog: false,
      isOpenMobileRightDialog: false,
    };
  },

  computed: {
    getRole() {
      return this.$store.getters.getRole;
    },
    leftShow() {
      return this.getRole === "All" || this.getRole === "A";
    },
    rightShow() {
      return this.getRole === "All" || this.getRole === "B";
    },
    leftShowMobileDialog() {
      return this.getRole === "A";
    },
    rightShowMobileDialog() {
      return this.getRole === "B";
    },
  },

  watch: {},
  mounted() {
    this.defaultShowRole = this.getRole;
  },

  methods: {
    /* 处理左边用户个人介绍 */
    handleLeftClick() {
      if (this.leftShowMobileDialog) {
        this.isOpenMobileLeftDialog = true;
      } else {
        this.leftDialogVisible = true;
      }
    },

    /* 处理右边用户个人介绍 */
    handleRightClick() {
      if (this.rightShowMobileDialog) {
        this.isOpenMobileRightDialog = true;
      } else {
        this.rightDialogVisible = true;
      }
    },

    /* 处理左边的歌单 */
    handleLeftSongSheetClick() {
      this.$store.commit("setSongType", "A");
    },

    /* 处理右边的歌单 */
    handleRightSongSheetClick() {
      this.$store.commit("setSongType", "B");
    },

    /* 左边弹窗关闭回调 */
    MobileLeftDialogClose() {
      this.isOpenMobileLeftDialog = false;
    },

    /* 右边弹窗关闭回调 */
    MobileRightDialogClose() {
      this.isOpenMobileRightDialog = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.user_container {
  display: flex;
}
.user_left {
  width: 50%;

  @include flex-justify-center;
  flex-direction: column;
}

.user_right {
  width: 50%;

  @include flex-justify-center;
  flex-direction: column;
}

.mobile_button {
  color: #fff;

  margin: {
    top: 1em;
  }

  @include flex-justify-center;
  .mobile_introduce {
    width: 90px;
    height: 28px;

    padding: 5px;

    line-height: 28px;

    border: 1px solid white;

    cursor: pointer;

    border-radius: 3px;

    margin: 0 10px;

    &:hover {
      background-color: #ffffff33;
    }
  }
}

.user_view_dialog {
  ::v-deep .el-dialog__header {
    display: none;
  }
  ::v-deep .el-dialog__body {
    padding: 0;
  }
}

.a-clear-default-style {
  text-decoration: none;
  color: white;
}

// 小于700
@media screen and (max-width: 1000px) {
  .user_left {
    width: 100%;
  }
  .user_right {
    width: 100%;
  }
}
</style>
