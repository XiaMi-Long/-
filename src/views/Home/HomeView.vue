<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-05-06 09:37:05
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-05 14:45:19
-->
<template>
  <div class="box">
    <div class="container">
      <!-- 两人同时展示页面 -->
      <PageOne v-if="getUrlRole === 'All'"></PageOne>
      <!-- 只能展示一个人的页面 -->
      <PageTwo v-if="getUrlRole !== 'All'"></PageTwo>
    </div>

    <!-- 回到顶部 -->
    <el-backtop></el-backtop>
  </div>
</template>

<script>
import PageOne from "./Page1/index.vue";
import PageTwo from "./Page2/index.vue";

export default {
  components: {
    PageOne,
    PageTwo,
  },

  data() {
    return {};
  },

  computed: {
    getUrlRole() {
      return new URLSearchParams(window.location.search).get("role");
    },
  },

  created() {
    this.setRole();
  },

  methods: {
    setRole() {
      this.$store.commit("setRole", this.getUrlRole);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;

  @include flex-justify-center;

  .header {
    width: 90%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    .main {
      width: 100%;
      height: 600px;

      border: 1px solid white;

      margin-top: 2%;
    }
  }
}
</style>
