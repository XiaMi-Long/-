<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-01 15:48:35
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-01 17:51:05
-->
<template>
  <div class="page-two-container">
    <div class="page-two-box">
      <div class="page-two-introduce">
        <IntroduceView></IntroduceView>
      </div>
    </div>
  </div>
</template>

<script>
import IntroduceView from "./Introduce/index.vue";

export default {
  name: "PageTwo",

  components: {
    IntroduceView,
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
    width: 60%;
  }
}

// 宽度小于700
@media screen and (max-width: 700px) {
  .page-two-introduce {
    width: 100%;
  }
}
</style>
