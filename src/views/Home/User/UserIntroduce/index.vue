<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-05-17 15:03:26
 * @LastEditors: wwy
 * @LastEditTime: 2022-05-26 17:42:39
-->
<template>
  <div class="text">
    <h2 class="h2 animate__animated animate__zoomIn">{{ info.text1 }}</h2>
    <h3 class="h3 animate__animated animate__zoomIn">
      {{ info.text2 }}
    </h3>
    <hr class="hr animate__animated animate__zoomIn" />
    <div class="introduce animate__animated animate__zoomIn">
      <span>
        {{ info.text3 }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "userIntroduceView",
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  color: white;

  padding: {
    left: 30px;
    right: 30px;
  }
}

.h2 {
  letter-spacing: 0.3em;

  text-shadow: 3px 4px black;
}

.h3 {
  font-weight: 300;
}

.hr {
  width: 70%;

  border-top: aqua;
}

.introduce {
  line-height: 2em;

  height: 75px;

  overflow: hidden;
}

// 小于900
@media screen and (max-width: 900px) {
  .h3 {
    font-size: 1.1em;
  }

  .introduce {
    font-size: 0.8em;
  }
}

// 小于900
@media screen and (max-width: 1100px) {
  .h3 {
    font-size: 1.1em;
  }

  .introduce {
    font-size: 0.8em;
  }
}

// 小于500
@media screen and (max-width: 500px) {
}
</style>
