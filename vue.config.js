/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-05-06 09:29:53
 * @LastEditors: wwy
 * @LastEditTime: 2022-06-02 11:30:09
 */
const { defineConfig } = require("@vue/cli-service");

const CopyWepackPlugin = require("copy-webpack-plugin");

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

  configureWebpack: {
    plugins:
      process.env.NODE_ENV === "production"
        ? [
            new CopyWepackPlugin({
              patterns: [
                // { from: "src/song.js", to: "" },
                // { from: "src/type.js", to: "" },
                // { from: "src/user.js", to: "" },
              ],
            }),
          ]
        : [],
  },
});
