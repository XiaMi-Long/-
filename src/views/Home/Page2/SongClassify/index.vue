<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-05-19 17:00:01
 * @LastEditors: wwy
 * @LastEditTime: 2022-06-29 11:12:39
-->
<template>
  <div class="classification-container">
    <div class="song-classification">
      <!-- 标题 -->
      <div class="song-title">
        <p>当前是 {{ filterUserName }} 的歌单</p>
      </div>
      <!-- 搜索框 -->
      <div class="song-search">
        <SongSearchPcView @input-search="handleInputSearch"></SongSearchPcView>
      </div>
      <!-- 分类按钮 -->
      <BaseButton
        @base-button-click="HandleBaseButtonClick"
        v-for="(item, index) in filterSongList"
        :key="index"
      >
        <template #text>
          <span>{{ item.name }}</span>
        </template>
      </BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton/index.vue";
import SongSearchPcView from "./SongSearchPc/index.vue";

export default {
  name: "SongClassifyView",
  components: {
    BaseButton,
    SongSearchPcView,
  },
  data() {
    return {
      /* 当前分类列表 */
      songList: window._songType,
      /* 当前被选中的分类文字 */
      choiseClassify: "",
    };
  },

  computed: {
    getSongType() {
      return this.$store.getters.getSongType;
    },

    filterSongList() {
      const typeValue = this.getSongType;
      return this.songList.filter((item) =>
        window._user[typeValue].hasType.includes(item.id)
      );
    },

    filterUserName() {
      return window._user[this.getSongType].userName;
    },
  },

  watch: {
    getSongType() {
      /* 如果切换歌单,清除按钮focus效果 */
      this.HandleBaseButtonClick("");
      /* 切换歌单的回调 */
      this.$emit("change-song-sheet");
    },
  },

  methods: {
    HandleBaseButtonClick(text) {
      const songBox = document.getElementsByClassName("song-classification")[0];
      songBox
        ?.getElementsByClassName("base-button-click-focus")[0]
        ?.classList.remove("base-button-click-focus");

      this.choiseClassify = text;

      /* 如果不是分类被点击 */
      if (text === "") return;
      this.$emit("change-song-type", this.choiseClassify);
    },

    handleInputSearch(value) {
      this.$emit("change-input-search", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.classification-container {
  text-align: center;

  .song-classification {
    width: 90%;
    height: 10%;

    border: 1px solid white;

    display: inline-block;

    padding: 1em;

    border-radius: 0.7em;

    .song-title {
      font-size: 1.3em;

      color: $song-title-text-color;
    }

    .base-button-click-focus {
      background-color: $song-classify-background-color;

      border: 1px solid $song-classify-hover-background-color;

      box-shadow: 0 0 5px;
    }

    .song-search {
      text-align: center;
    }
  }
}

@media screen and (max-width: 1000px) {
  .base-button {
    display: block;
  }
}
</style>
