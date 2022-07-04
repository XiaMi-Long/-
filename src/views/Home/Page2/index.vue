<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-01 15:48:35
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-04 22:03:55
-->
<template>
  <div class="page-two-container">
    <div class="page-two-box">
      <div class="page-two-introduce">
        <!-- 自我介绍 -->
        <IntroduceView></IntroduceView>
        <!-- 立绘 -->
        <PhotoView></PhotoView>
      </div>
    </div>
  </div>
</template>

<script>
import IntroduceView from "./Introduce/index.vue";
import PhotoView from "./Photo/index.vue";

export default {
  name: "PageTwo",

  components: {
    IntroduceView,
    PhotoView,
  },
};
</script>

<style lang="scss" scoped>
.page-two {
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

  &-introduce {
    display: flex;

    width: 100%;
    height: 100%;
  }
}

// 宽度小于700
@media screen and (max-width: 700px) {
  .page-two-introduce {
    width: 100%;
  }
}
</style>
