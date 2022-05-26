/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-05-06 09:29:53
 * @LastEditors: wwy
 * @LastEditTime: 2022-05-17 14:13:16
 */
const { defineConfig } = require("@vue/cli-service");

const port = 9641;

module.exports = defineConfig({
  transpileDependencies: true,

  productionSourceMap: process.env.NODE_ENV !== "production",

  publicPath: process.env.NODE_ENV === "production" ? "/production/" : "/",

  devServer: {
    port,
    open: false,
    https: false,

    proxy: {},
  },

  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/style/currency.scss";`,
      },
    },
  },
});
