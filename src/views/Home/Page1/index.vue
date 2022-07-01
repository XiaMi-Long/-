<!--
 * @Descripttion: 
 * @version: 2人同时展示详情页面
 * @Author: wwy
 * @Date: 2022-07-01 14:54:14
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-01 15:12:50
-->
<template>
  <div class="page-one-container">
    <div class="page-one-box">
      <!-- LOGO -->
      <LogoView></LogoView>
      <!-- Img -->
      <PhotoView></PhotoView>
    </div>
  </div>
</template>

<script>
import LogoView from "./Logo/index.vue";
import PhotoView from "./Photo/index.vue";

export default {
  name: "PageOne",

  components: {
    LogoView,
    PhotoView,
  },
};
</script>

<style lang="scss" scoped>
.page-one {
  &-container {
    width: 90%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-box {
    width: 100%;
    height: 600px;

    border: 1px solid white;

    margin-top: 2%;
  }
}
</style>
