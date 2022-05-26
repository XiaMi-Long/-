/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-05-06 09:29:53
 * @LastEditors: wwy
 * @LastEditTime: 2022-05-17 15:27:25
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "./style/normalize.css";
import "./style/font.css";
import "animate.css";

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
