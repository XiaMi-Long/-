<!--
 * @Descripttion: 手机大小,显示出头像
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-05 15:01:13
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-05 15:08:29
-->
<template>
  <div class="mobile-photo-box">
    <img src="@/assets/1.jpg" alt="" class="img" v-if="getRole === 'A'" />
    <img src="@/assets/2.jpg" alt="" class="img" v-if="getRole === 'B'" />
  </div>
</template>

<script>
export default {
  name: "MobilePhotoView",

  computed: {
    getRole() {
      return this.$store.getters.getRole;
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-photo-box {
  width: 100%;
  height: 200px;

  margin: 2em 0;
  .img {
    width: 200px;
    height: 200px;

    object-fit: cover;

    border-radius: 50%;
  }
}

// 宽度小于700
@media screen and (min-width: 800px) {
  .mobile-photo-box {
    display: none;
  }
}
</style>
