<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-01 15:48:35
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-05 15:14:56
-->
<template>
  <div class="page-two-container">
    <div class="page-two-box">
      <div class="page-two-introduce">
        <MobilePhotoView></MobilePhotoView>
        <!-- 自我介绍 -->
        <IntroduceView></IntroduceView>
        <!-- 立绘 -->
        <PhotoView></PhotoView>
      </div>
      <div class="page-two-input">
        <!-- 搜索框和分类 -->
        <SongClassifyView
          @change-input-search="handleInputSearch"
          @change-song-type="handleChangeSongType"
        ></SongClassifyView>
      </div>
      <div class="page-two-tab">
        <!-- 歌曲表格 -->
        <TableView :filterSong="getFilterSong"></TableView>
      </div>
    </div>
  </div>
</template>

<script>
import IntroduceView from "./Introduce/index.vue";
import PhotoView from "./Photo/index.vue";
import SongClassifyView from "./SongClassify/index.vue";
import TableView from "./Table/index.vue";
import MobilePhotoView from "./MobileStyle/Photo/index.vue";

export default {
  name: "PageTwo",

  components: {
    IntroduceView,
    PhotoView,
    SongClassifyView,
    TableView,
    MobilePhotoView,
  },

  data() {
    return {
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
    /* 过滤表格歌曲应该显示哪些 */
    getFilterSong() {
      return window._song[this.getRole].filter(
        (item) =>
          item.type.join("-").includes(this.songFilterObject.songType) &&
          (item.songName
            .toLocaleLowerCase()
            .includes(this.songFilterObject.searchWord.toLocaleLowerCase()) ||
            item.user
              .toLocaleLowerCase()
              .includes(this.songFilterObject.searchWord.toLocaleLowerCase()) ||
            item.language
              .toLocaleLowerCase()
              .includes(this.songFilterObject.searchWord.toLocaleLowerCase()) ||
            item.remarks
              .toLocaleLowerCase()
              .includes(this.songFilterObject.searchWord.toLocaleLowerCase()))
      );
    },
  },

  methods: {
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
  },
};
</script>

<style lang="scss" scoped>
.page-two {
  &-container {
    width: 90%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-box {
    width: 100%;
    height: 680px;

    margin-top: 2%;
  }

  &-introduce {
    display: flex;

    width: 100%;
    height: 100%;

    margin-bottom: 3em;
  }
}

// 宽度小于800
@media screen and (max-width: 800px) {
  .page-two-introduce {
    flex-direction: column;
  }

  .page-two-box {
    height: auto;
  }
}

// 宽度小于700
@media screen and (max-width: 700px) {
  .page-two-introduce {
    width: 100%;

    flex-direction: column;
  }
}
</style>
