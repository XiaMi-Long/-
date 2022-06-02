/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-05-06 09:29:53
 * @LastEditors: wwy
 * @LastEditTime: 2022-06-02 11:07:04
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Icon, Dialog, Input, Drawer, Notification, Backtop } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "./style/normalize.css";
import "./style/font.css";
import "animate.css";

Vue.use(Icon);
Vue.use(Dialog);
Vue.use(Input);
Vue.use(Drawer);
Vue.use(Backtop);

Vue.config.productionTip = false;

Vue.prototype.$notify = Notification;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
