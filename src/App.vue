<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-05-06 09:29:53
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-01 17:12:09
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
body {
  background: url("@/assets/background.jpg") no-repeat;
  // background-color: #343333;
  background-size: 100% 100%;
  background-attachment: fixed;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  // position: absolute;

  width: 100%;
  height: 100%;

  /* webkit, opera, IE9 */
  ::selection {
    background: #409eff;
  }
  /* mozilla firefox */
  ::-moz-selection {
    background: #409eff;
  }
}
</style>
