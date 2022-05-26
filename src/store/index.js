/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-05-06 09:29:53
 * @LastEditors: wwy
 * @LastEditTime: 2022-05-25 16:06:50
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    role: "All",
  },
  getters: {
    getRole: (state) => {
      return state.role;
    },
  },
  mutations: {
    setRole: (state, value) => {
      window.location.hash = "role=" + value;
      state.role = value;
    },
  },
  actions: {},
  modules: {},
});
