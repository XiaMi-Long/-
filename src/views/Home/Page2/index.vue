<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-01 15:48:35
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-05 14:31:51
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
      <div class="page-two-input">
        <!-- 搜索框和分类 -->
        <SongClassifyView></SongClassifyView>
      </div>
    </div>
  </div>
</template>

<script>
import IntroduceView from "./Introduce/index.vue";
import PhotoView from "./Photo/index.vue";
import SongClassifyView from "./SongClassify/index.vue";

export default {
  name: "PageTwo",

  components: {
    IntroduceView,
    PhotoView,
    SongClassifyView,
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

    margin-top: 2%;
  }

  &-introduce {
    display: flex;

    width: 100%;
    height: 100%;

    margin-bottom: 3em;
  }
}

// 宽度小于700
@media screen and (max-width: 700px) {
  .page-two-introduce {
    width: 100%;
  }
}
</style>
