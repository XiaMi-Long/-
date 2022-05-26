<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-05-19 17:00:01
 * @LastEditors: wwy
 * @LastEditTime: 2022-05-26 15:27:16
-->
<template>
  <div class="classification-container">
    <div class="song-classification">
      <!-- 搜索框 -->
      <div class="song-search">
        <SongSearchPcView></SongSearchPcView>
      </div>
      <!-- 分类按钮 -->
      <BaseButton
        @base-button-click="HandleBaseButtonClick"
        v-for="(item, index) in songList"
        :key="index"
      >
        <template #text>
          <span>{{ item }}</span>
        </template>
      </BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton/BaseButtonComponents.vue";
import SongSearchPcView from "@/views/SongSearchPc/SongSearchPcView.vue";

export default {
  name: "SongClassifyView",
  components: {
    BaseButton,
    SongSearchPcView,
  },
  data() {
    return {
      songList: ["RaP", "付费", "英语", "爵士", "jazz HipHop"],
    };
  },
  methods: {
    HandleBaseButtonClick() {
      const songBox = document.getElementsByClassName("song-classification")[0];
      songBox
        ?.getElementsByClassName("base-button-click-focus")[0]
        ?.classList.remove("base-button-click-focus");
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

    .base-button-click-focus {
      background-color: #0d0d0d;

      border: 1px solid #0d0d0d;

      box-shadow: 0 0 5px;
    }

    .song-search {
      text-align: center;
    }
  }
}
</style>
