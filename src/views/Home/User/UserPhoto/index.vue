<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-06-02 09:29:46
 * @LastEditors: wwy
 * @LastEditTime: 2022-06-30 21:21:12
-->
<template>
  <div class="round">
    <img :src="photoUrl" alt="" class="img" :style="imgStyle" />
  </div>
</template>

<script>
export default {
  name: "UserPhotoView",
  props: {
    photoUrl: {
      type: String,
      default: function () {
        return "";
      },
    },
    imgStyle: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.round {
  margin: {
    top: 100px;
  }
  line-height: 5em;
  text-align: center;
  width: 100%;
  .img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 3px solid white;
    transition: border 0.5s;
    &:hover {
      border-color: #ff6f91;
    }
  }
}
// 小于500
@media screen and (max-width: 500px) {
  .round {
    .img {
      width: 65px !important;
      height: 65px !important;
    }
  }
}
// 小于900
@media screen and (max-width: 900px) {
  .round {
    line-height: 1;
    margin: {
      top: 60px;
    }
  }
}
// 小于1100
@media screen and (max-width: 1100px) {
  .round {
    .img {
      width: 150px !important;
      height: 150px !important;
    }
  }
}
</style>
