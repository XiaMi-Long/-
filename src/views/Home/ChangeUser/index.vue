<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-05-20 17:31:54
 * @LastEditors: wwy
 * @LastEditTime: 2022-06-29 11:15:48
-->
<template>
  <div class="change-user-container" @click="handleChangeUser">
    <img class="img" :src="imgUrl" alt="" />
    <h5 class="h5">{{ text }}</h5>
  </div>
</template>

<script>
import { getHashStringArgs } from "@/utils/BaseUtils";

const ChangeUserView = {
  A: {
    imgUrl: require("@/assets/preview.jpg"),
    text: window._user["A"].text4,
  },
  B: {
    imgUrl: require("@/assets/sky.jpg"),
    text: window._user["B"].text4,
  },
  All: {
    imgUrl: "",
    text: "",
  },
};
export default {
  name: "ChnageUserView",
  data() {
    return {
      imgUrl: ChangeUserView[window._config["defaultShowUser"]].imgUrl,
      text: ChangeUserView[window._config["defaultShowUser"]].text,
    };
  },
  computed: {
    getRole() {
      return this.$store.getters.getRole;
    },
  },

  mounted() {
    /* 视频根据不同hash-Url在页面初始化时决定显示A还是B */
    this.$nextTick(() => {
      /* 决定应该显示A还是B */
      this.handleChangeUser("init");
    });
  },

  methods: {
    handleChangeUser(type) {
      let result = "";
      if (type === "init") {
        result = getHashStringArgs(location.hash)["role"];
      } else {
        result = this.getRole === "A" ? "B" : "A";
      }

      this.$store.commit("setRole", result);
      this.imgUrl = ChangeUserView[result].imgUrl;
      this.text = ChangeUserView[result].text;

      window.resize;

      this.$emit("change-user", result);
    },
  },
};
</script>

<style lang="scss" scoped>
.change-user-container {
  position: fixed;

  color: $changer-user-text-color;

  top: 1em;
  left: 1em;

  cursor: pointer;

  .img {
    width: 60px;
    height: 60px;

    border-radius: 50%;

    transition: 0.5s;
    &:hover {
      transform: scale(1.2, 1.2);
    }
  }

  .h5 {
    margin-top: 10px;
  }
}
</style>
