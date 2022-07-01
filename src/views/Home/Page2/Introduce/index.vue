<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-01 15:54:45
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-01 17:50:37
-->
<template>
  <div class="introduce-view">
    <div class="introduce-view-top-box">
      <h3 class="introduce-view-top-text">我的自我介绍</h3>
    </div>
    <div class="introduce-view-box" v-for="(item, index) of 2" :key="index">
      <img src="@/assets/卡通形象.png" alt="美女" class="introduce-view-img" />
      <div class="introduce-view-text">
        {{ info.introduce[index] }}
      </div>
    </div>
    <div class="introduce-view-btn-box">
      <a :href="info.bilibiliUrl" v-if="info.bilibiliUrl" target="_blank">
        <img
          src="@/assets/bilibili.png"
          alt="哔哩哔哩主页"
          class="img"
          title="哔哩哔哩主页"
        />
      </a>
      <a
        :href="info.bilibiliLiveRoomUrl"
        v-if="info.bilibiliLiveRoomUrl"
        target="_blank"
      >
        <img
          src="@/assets/bilibiliLive.png"
          alt="哔哩哔哩直播间"
          class="img"
          title="哔哩哔哩直播间"
      /></a>
      <a :href="info.QAurl" v-if="info.QAurl" target="_blank"
        ><img src="@/assets/QA.png" alt="提问箱" class="img" title="提问箱"
      /></a>
      <a :href="info.songSliceUrl" v-if="info.songSliceUrl" target="_blank">
        <img
          src="@/assets/music.png"
          alt="歌曲切片"
          class="img"
          title="歌曲切片"
      /></a>
      <a :href="info.cloudMusicUrl" v-if="info.cloudMusicUrl" target="_blank"
        ><img
          src="@/assets/cloudmusic.png"
          alt="网易云音乐"
          class="img"
          title="网易云音乐"
      /></a>
      <a :href="info.qqMusicUrl" v-if="info.qqMusicUrl" target="_blank">
        <img src="@/assets/qqmusic.png" alt="QQ音乐" class="img" title="QQ音乐"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroduceView",

  data() {
    return {
      info: {},
    };
  },

  computed: {
    getRole() {
      return this.$store.getters.getRole;
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.getInfo();
    });
  },
  methods: {
    getInfo() {
      this.info = window._user[this.getRole];
      console.log(this.info);
    },
  },
};
</script>

<style lang="scss" scoped>
.introduce-view {
  font-size: 16px;

  opacity: 0.8;

  height: 400px;

  background-color: white;

  box-shadow: 0px -1px 8px 0px #020202;

  border-radius: 6px;

  text-align: left;

  text-indent: 1em;

  padding: 20px 10px;

  &-box {
    display: flex;
    align-content: center;

    margin: 20px 10px;
  }

  &-img {
    width: 20px;
    height: 20px;

    border-radius: 50%;
  }

  &-text {
    line-height: 2;

    color: black;

    font-size: 1em;
    font-style: italic;

    display: inline-block;
  }
}

.introduce-view-top {
  &-box {
    display: flex;
    align-content: center;
  }

  &-text {
    margin: 0;

    font-weight: normal;
  }
}

.introduce-view-btn-box {
  text-align: right;
  .img {
    width: 32px;
    height: 32px;

    margin: 0 10px;
  }
}

// 宽度小于700
@media screen and (max-width: 700px) {
  .introduce-view {
    font-size: 14px;
  }

  .introduce-view-btn-box {
  }
}
</style>
