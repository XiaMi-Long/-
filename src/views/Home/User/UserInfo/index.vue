<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-05-17 16:28:15
 * @LastEditors: wwy
 * @LastEditTime: 2022-06-22 17:45:28
-->
<template>
  <div class="user-box">
    <div class="title">
      <div class="left">
        <h3 class="left-name">{{ info.userName }}的自我介绍</h3>
      </div>
      <div class="right">
        <a :href="info.cloudMusicUrl" target="_blank">
          <img
            class="right-icon"
            src="~@/assets/cloudmusic.png"
            alt="网易云音乐"
          />
        </a>
      </div>
    </div>

    <h4 class="info" v-for="(item, index) in info.introduce" :key="index">
      <img class="info-icon" src="~@/assets/cat.png" alt="" />
      {{ item }}
    </h4>
  </div>
</template>

<script>
export default {
  name: "UserInfoView",
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.user-box {
  width: 100%;
  height: 80%;

  border: 3px solid white;
  border-radius: 10px;

  padding: 15px;

  color: white;

  background-color: #999;

  .title {
    display: flex;
    align-items: center;

    .left {
      width: 50%;

      text-align: left;
      &-name {
        margin: 0;
        font-weight: 400;
      }
    }

    .right {
      width: 50%;

      text-align: right;

      cursor: pointer;

      &-icon {
        width: 40px;
        height: 40px;

        margin-left: 15px;
      }
    }
  }

  .info {
    font-weight: 200;
    text-align: left;

    &-icon {
      width: 25px;
      height: 25px;
    }
  }
}
</style>
