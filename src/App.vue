<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-05-06 09:29:53
 * @LastEditors: wwy
 * @LastEditTime: 2022-06-29 11:42:54
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  position: absolute;

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

// html {
//   /*里面的代码可以根据自己需求去进行更改*/
//   /* 设置滚动条的样式 */
//   ::-webkit-scrollbar {
//     width: 10px;
//   }
//   /* 滚动槽 */
//   ::-webkit-scrollbar-track {
//     -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3);
//     // border-radius: 10px;
//   }
//   /* 滚动条滑块 */
//   ::-webkit-scrollbar-thumb {
//     border-radius: 10px;
//     background: #ff6f91;
//   }

//   ::-webkit-scrollbar-track-piece {
//     border-radius: 0.7em;
//     background-color: #b0a8b9;
//   }

//   div {
//     ::-webkit-scrollbar {
//       width: 1px;
//     }
//     /* 滚动槽 */
//     ::-webkit-scrollbar-track {
//       -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3);
//       // border-radius: 10px;
//     }
//     /* 滚动条滑块 */
//     ::-webkit-scrollbar-thumb {
//       border-radius: 0em;
//       background-color: #f1f1f1;
//     }

//     ::-webkit-scrollbar-track-piece {
//       border-radius: 0em;
//       background: #c1c1c1;
//     }
//   }
// }
</style>
