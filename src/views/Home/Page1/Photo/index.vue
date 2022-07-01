<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-01 15:10:47
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-01 15:39:32
-->
<template>
  <div class="img-box">
    <div class="img-1">
      <img
        src="@/assets/1.jpg"
        class="img"
        alt=""
        @click="handleClickPhoto('A')"
      />
    </div>
    <div class="img-2">
      <img
        src="@/assets/2.jpg"
        class="img"
        alt=""
        @click="handleClickPhoto('B')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoView",

  data() {
    return {};
  },

  methods: {
    handleClickPhoto(type) {
      window.location.href =
        window.location.origin + window.location.pathname + `?role=${type}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.img-box {
  margin: {
    top: 100px;
  }
  width: 100%;

  display: flex;
  justify-content: center;

  .img-1 {
    width: 45%;
  }

  .img-2 {
    width: 45%;
  }
}

.img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid white;
  transition: border 0.5s;
  &:hover {
    border-color: #ff6f91;
  }
}

// 宽度小于900
@media screen and (max-width: 900px) {
  .img {
    width: 150px;
    height: 150px;
  }
}

// 宽度小于500
@media screen and (max-width: 500px) {
  .img {
    width: 100px;
    height: 100px;
  }
}
</style>
