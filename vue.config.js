/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-05-06 09:29:53
 * @LastEditors: wwy
 * @LastEditTime: 2022-06-30 17:40:41
 */
const { defineConfig } = require("@vue/cli-service");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";

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

  configureWebpack: (config) => {
    if (isProduction) {
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: "gzip",
          test: /\.js$|\.html$|\.json$|\.css/,
          threshold: 10240,
          minRatio: 0.8,
        })
      );

      config.optimization = {
        runtimeChunk: "single",
        splitChunks: {
          chunks: "all", //async异步代码分割 initial同步代码分割 all同步异步分割都开启
          // minChunks: 1,             //模块至少使用次数
          maxInitialRequests: 3, //首页加载的时候引入的文件最多几个
          minSize: 20000, //字节 引入的文件大于kb才进行分割
          automaticNameDelimiter: "~", //缓存组和生成文件名称之间的连接符
          cacheGroups: {
            //缓存组，将所有加载模块放在缓存里面一起分割打包
            vendor: {
              //自定义打包模块
              test: /[\\/]node_modules[\\/]/, //匹配
              name(module) {
                // get the name. E.g. node_modules/packageName/not/this/part.js
                // or node_modules/packageName
                let packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                );
                if (packageName !== null) {
                  packageName = packageName[1];
                } else {
                  packageName = "animate";
                }
                // npm package names are URL-safe, but some servers don't like @ symbols
                return `npm.${packageName.replace("@", "")}`;
              },
            },
          },
        },
      };
    }
  },
});
