/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-05-06 09:29:53
 * @LastEditors: wwy
 * @LastEditTime: 2022-06-01 14:38:44
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /* 当前页面的角色 */
    role: "All",

    /* 当前页面的歌单主体 */
    songType: "A",
  },
  getters: {
    getRole: (state) => {
      return state.role;
    },
    getSongType: (state) => {
      return state.songType;
    },
  },
  mutations: {
    setRole: (state, value) => {
      window.location.hash = "role=" + value;
      state.role = value;
    },

    setSongType: (state, value) => {
      state.songType = value;
    },
  },
  actions: {},
  modules: {},
});
