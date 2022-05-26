<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-05-06 09:37:05
 * @LastEditors: wwy
 * @LastEditTime: 2022-05-26 15:47:07
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-05-06 09:37:05
 * @LastEditors: wwy
 * @LastEditTime: 2022-05-19 17:05:24
-->
<template>
  <div class="box">
    <div class="container">
      <header class="header">
        <main class="main">
          <!-- 用户头像和个人介绍 -->
          <UserView></UserView>
        </main>
        <!-- 分类和搜索框 -->
        <div class="classification">
          <SongClassifyView></SongClassifyView>
        </div>
        <!-- 表格 -->
        <div class="table">
          <TableView></TableView>
        </div>
      </header>
    </div>
    <!-- 切换用户 -->
    <ChangeUserView
      v-if="getRole !== 'All'"
      @change-user="ChnageUserCallBack"
    ></ChangeUserView>
  </div>
</template>

<script>
import UserView from "./User/UserView.vue";
import ChangeUserView from "./ChangeUser/ChangeUserView.vue";
import SongClassifyView from "@/views/SongClassify/SongClassifyView.vue";
import TableView from "@/views/Table/TableView.vue";

import { onResizeQueue, getHashStringArgs } from "@/utils/BaseUtils";

export default {
  components: {
    UserView,
    ChangeUserView,
    SongClassifyView,
    TableView,
  },

  data() {
    return {
      fixedBoxObject: {},
      /* 当前是否是第一次进行pc和手机判断 */
      isFirstComparePcAndMobile: true,
    };
  },

  computed: {
    getRole() {
      return this.$store.getters.getRole;
    },
  },

  mounted() {
    this.PageViewResizeEventListener();
    /* 加入到页面刷新事件队列 */
    onResizeQueue(this.PageViewResizeEventListener);
  },

  methods: {
    /* 添加网页视口变化事件 */
    PageViewResizeEventListener() {
      if (window.innerWidth <= 1000) {
        /* 如果是第一次 */
        if (this.isFirstComparePcAndMobile) {
          window.location.hash = "role=A";
          this.$store.commit("setRole", "A");
          this.isFirstComparePcAndMobile = false;
          return;
        }

        this.$store.commit("setRole", getHashStringArgs()["role"]);
      } else if (window.innerWidth > 1000 && this.getRole !== "All") {
        this.$store.commit("setRole", "All");

        if (!this.isFirstComparePcAndMobile)
          this.isFirstComparePcAndMobile = true;
      }
    },

    /* 切换用户的回调 */
    ChnageUserCallBack(result) {
      console.log(result);
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  background: url("@/assets/wallhaven-3.png") no-repeat;
  background-size: cover;

  opacity: 0.8;
}

.container {
  width: 100%;
  height: 100%;

  @include flex-justify-center;

  .header {
    width: 90%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    .main {
      width: 100%;
      height: 600px;

      // border: 1px solid white;

      margin-top: 2%;

      .mouseleave {
        width: 100%;
        height: 100%;

        @include flex-justify-center;
      }
    }

    .classification {
      width: 100%;
    }

    .table {
      width: 100%;

      margin: {
        top: 1em;
        bottom: 2em;
      }
    }
  }
}

// 大于1400
@media screen and (min-width: 1400px) {
}

// 小于1200
@media screen and (max-width: 1200px) {
}

// 小于1200
@media screen and (max-width: 1100px) {
  .container .header .main {
    height: 550px;
  }
}

// 小于600
@media screen and (max-width: 900px) {
  .container .header .main {
    height: 470px;
  }
}
</style>
