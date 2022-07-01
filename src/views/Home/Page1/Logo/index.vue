<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-06-30 21:12:57
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-01 15:23:37
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
  color: white;

  padding: 40px;

  font: {
    size: 40px;
    weight: bold;
  }
  font-style: italic;
}

// 小于1200
@media screen and (max-width: 500px) {
  .logo {
    display: none;
  }
}
</style>
