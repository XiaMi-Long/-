<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-04 22:00:12
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-05 14:23:12
-->
<template>
  <div class="background-box">
    <div class="background-box-A-photo" v-if="getRole === 'A'"></div>
    <div class="background-box-B-photo" v-if="getRole === 'B'"></div>
  </div>
</template>

<script>
export default {
  name: "PhotoView",

  computed: {
    getRole() {
      return this.$store.getters.getRole;
    },
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.background-box {
  width: 50%;
  height: 100%;

  .background-box-A-photo {
    width: 100%;
    height: 100%;

    background: url("@/assets/A-lihui.png") no-repeat 50%;

    background-size: contain;
  }

  .background-box-B-photo {
    width: 100%;
    height: 100%;

    background: url("@/assets/B-lihui.png") no-repeat 50%;

    background-size: contain;
  }
}

// 宽度小于800
@media screen and (max-width: 800px) {
  .background-box {
    display: none;
  }
}
</style>
