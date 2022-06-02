<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-05-20 17:31:54
 * @LastEditors: wwy
 * @LastEditTime: 2022-06-02 11:20:33
-->
<template>
  <div class="change-user-container" @click="handleChangeUser">
    <img class="img" :src="imgUrl" alt="" />
    <h5 class="h5">{{ text }}</h5>
  </div>
</template>

<script>
import { User } from "../../../user";
const ChangeUserView = {
  A: {
    imgUrl: require("@/assets/preview.jpg"),
    text: User.text4,
  },
  B: {
    imgUrl: require("@/assets/sky.jpg"),
    text: User.text4,
  },
};
export default {
  name: "ChnageUserView",
  data() {
    return {
      imgUrl: ChangeUserView["A"].imgUrl,
      text: ChangeUserView["A"].text,
    };
  },
  computed: {
    getRole() {
      return this.$store.getters.getRole;
    },
  },
  methods: {
    handleChangeUser() {
      const result = this.getRole === "A" ? "B" : "A";
      window.location.hash = `role=${result}`;

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

  color: white;

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
