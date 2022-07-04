<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-06-30 21:12:57
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-04 21:17:39
-->
<template>
  <div class="logo-container">
    <img class="logo" src="@/assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "LogoView",
};
</script>

<style lang="scss" scoped>
.logo-container {
  height: 35%;
}

.logo {
}

// 小于1200
@media screen and (max-width: 500px) {
  .logo {
    display: none;
  }
}
</style>
