<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-06-30 21:12:57
 * @LastEditors: wwy
 * @LastEditTime: 2022-06-30 21:22:51
-->
<template>
  <div>
    <p class="logo">LOGO</p>
  </div>
</template>

<script>
export default {
  name: "LogoView",
};
</script>

<style lang="scss" scoped>
.logo {
  padding: 40px;

  font: {
    size: 40px;
    weight: bold;
  }
  font-style: italic;
}

// 小于1200
@media screen and (max-width: 1000px) {
  .logo {
    display: none;
  }
}
</style>
