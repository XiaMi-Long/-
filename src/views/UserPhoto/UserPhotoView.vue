<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-05-17 14:50:11
 * @LastEditors: wwy
 * @LastEditTime: 2022-05-26 17:14:20
-->
<template>
  <div class="round">
    <img :src="photoUrl" alt="" class="img" />
  </div>
</template>

<script>
export default {
  name: "UserPhotoView",
  props: {
    photoUrl: {
      type: String,
      default: function () {
        return require("@/assets/yilein.png");
      },
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
      width: 65px;
      height: 65px;
    }
  }
}

// 小于500
@media screen and (max-width: 900px) {
  .round {
    line-height: 1;

    margin: {
      top: 60px;
    }
  }
}

// 小于500
@media screen and (max-width: 1100px) {
  .round {
    .img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
