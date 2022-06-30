<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-05-06 09:37:05
 * @LastEditors: wwy
 * @LastEditTime: 2022-06-29 17:23:27
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
          <SongClassifyView
            @change-song-type="handleChangeSongType"
            @change-input-search="handleInputSearch"
            @change-song-sheet="handleChangeSongSheet"
          ></SongClassifyView>
        </div>
        <!-- 表格 -->
        <div class="table">
          <TableView :filterSong="getFilterSong"></TableView>
        </div>
      </header>
    </div>
    <!-- 切换用户 -->
    <ChangeUserView
      v-if="getRole !== 'All'"
      @change-user="changeUserCallBack"
    ></ChangeUserView>

    <!-- 回到顶部 -->
    <el-backtop></el-backtop>
  </div>
</template>

<script>
import UserView from "./User/index.vue";
import ChangeUserView from "./ChangeUser/index.vue";
import SongClassifyView from "./SongClassify/index.vue";
import TableView from "./Table/index.vue";

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
      /* 歌曲过滤所需的参数对象 */
      songFilterObject: {
        songType: "",
        searchWord: "",
      },
    };
  },

  computed: {
    getRole() {
      return this.$store.getters.getRole;
    },
    getSongType() {
      return this.$store.getters.getSongType;
    },
    /* 过滤表格歌曲应该显示哪些 */
    getFilterSong() {
      return window._song[this.getSongType].filter(
        (item) =>
          item.type.join("-").includes(this.songFilterObject.songType) &&
          (item.songName
            .toLocaleLowerCase()
            .includes(this.songFilterObject.searchWord) ||
            item.user
              .toLocaleLowerCase()
              .includes(this.songFilterObject.searchWord) ||
            item.language
              .toLocaleLowerCase()
              .includes(this.songFilterObject.searchWord) ||
            item.remarks
              .toLocaleLowerCase()
              .includes(this.songFilterObject.searchWord))
      );
    },
  },

  mounted() {
    /* 页面初始化 */
    this.PageViewResizeEventListener();
    /* 加入到页面刷新事件队列 */
    onResizeQueue(this.PageViewResizeEventListener);
  },

  methods: {
    /* 添加网页视口变化事件 */
    PageViewResizeEventListener() {
      if (window.innerWidth <= 1000) {
        let type = getHashStringArgs(location.hash)["role"];
        /* 如果是第一次 */
        if (this.isFirstComparePcAndMobile) {
          // 如果是All证明是从大屏转到小屏的
          if (type === "All") {
            // 获取默认展示A还是B的默认值
            type = window._config["defaultShowUser"];
          }

          this.isFirstComparePcAndMobile = false;
        }

        this.$store.commit("setRole", type);
        this.$store.commit("setSongType", type);
      } else if (window.innerWidth > 1000 && this.getRole !== "All") {
        this.$store.commit("setRole", "All");

        if (!this.isFirstComparePcAndMobile)
          this.isFirstComparePcAndMobile = true;
      }
    },

    /* 切换用户的回调 */
    changeUserCallBack(result) {
      this.$store.commit("setSongType", result);
    },

    /* 歌曲分类更改的回调 */
    handleChangeSongType(value) {
      /* 如果选中的被取消了,就查询全部 */
      if (value.length === 0) {
        value.push({ id: "" });
      }
      this.songFilterObject.songType = value[0].id;
    },

    /* 搜索框搜索的回调 */
    handleInputSearch(value) {
      this.songFilterObject.searchWord = value;
    },

    /* 歌单被整个切换的回调 */
    handleChangeSongSheet() {
      this.songFilterObject.songType = "";
      this.songFilterObject.searchWord = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  background: url("@/assets/background.jpg") no-repeat;
  background-size: cover;
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
