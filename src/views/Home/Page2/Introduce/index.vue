<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-07-01 15:54:45
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-04 22:46:37
-->
<template>
  <div class="introduce-view">
    <div class="introduce-view-top-box">
      <h3 class="introduce-view-top-text">{{ info.userName }}的自我介绍</h3>
    </div>
    <div
      class="introduce-view-box"
      v-for="(item, index) of info.introduce"
      :key="index"
    >
      <img src="@/assets/卡通形象.png" alt="美女" class="introduce-view-img" />
      <div class="introduce-view-text">
        {{ item }}
      </div>
    </div>
    <div class="introduce-view-dialog-btn-box">
      <div class="btn" @click="mobileOpenDialog">查看立绘</div>
    </div>
    <div class="introduce-view-tag-box" v-if="info.introduceTabel">
      <span class="tag">种族：{{ info.introduceTabel.race }}</span>
      <span class="tag">外貌：{{ info.introduceTabel.appearance }}</span>
      <span class="tag">生日：{{ info.introduceTabel.birthday }}</span>
      <span class="tag">应援色：{{ info.introduceTabel.color }}</span>
      <span class="tag" v-if="info.introduceTabel.address"
        >属地：{{ info.introduceTabel.address }}</span
      >
      <span class="tag" v-if="info.introduceTabel.occupation"
        >职业：{{ info.introduceTabel.occupation }}</span
      >
      <span class="tag">身高：{{ info.introduceTabel.height }}</span>
      <span class="tag">年龄：{{ info.introduceTabel.age }}</span>
      <span class="tag">出道日：{{ info.introduceTabel.startDay }}</span>
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

    <!-- 立绘弹窗 -->
    <PhotoDialogView
      :openDrawer="openDrawer"
      @drawer-close="handleDrawerClose"
    ></PhotoDialogView>
  </div>
</template>

<script>
import PhotoDialogView from "./Dialog/index.vue";

export default {
  name: "IntroduceView",

  components: {
    PhotoDialogView,
  },

  data() {
    return {
      info: {},
      /* 是否打开立绘弹窗 */
      openDrawer: false,
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
    /* 初始化赋值 */
    getInfo() {
      this.info = window._user[this.getRole];
      console.log(this.info);
    },

    /* 打开立绘弹窗 */
    mobileOpenDialog() {
      this.openDrawer = true;
    },

    /* 关闭立绘弹窗 */
    handleDrawerClose() {
      this.openDrawer = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.introduce-view {
  font-size: 16px;

  opacity: 0.8;

  width: 50%;
  height: 100%;

  background-color: white;

  border-radius: 6px;

  text-align: left;

  text-indent: 1em;

  padding: 20px 10px;

  overflow: auto;

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

.introduce-view-dialog-btn-box {
  display: none;

  .btn {
    display: block;

    line-height: 1em;

    text-align: center;

    border: 1px solid #909399;

    border-radius: 4px;

    padding: 8px 16px;

    margin-left: 16px;

    color: #5d5e61;

    cursor: pointer;

    &:hover {
      border-color: #6bbeea;

      background-color: #6bbeea;

      color: white;

      filter: brightness(1.05);
    }

    &:active {
      border-color: #6bbeea;

      background-color: #6bbeea;

      color: white;

      filter: brightness(0.95);
    }
  }
}

.introduce-view-tag-box {
  margin: 2em 0;
  .tag {
    display: block;

    line-height: 1em;

    text-align: center;

    border: 1px solid #909399;

    border-radius: 4px;

    padding: 8px 16px;

    margin-left: 16px;

    color: #5d5e61;

    transition: color 0.4s;

    &:hover {
      color: black;
    }
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

// 宽度小于800
@media screen and (max-width: 800px) {
  .introduce-view {
    width: 100%;
  }

  .introduce-view-dialog-btn-box {
    display: block;
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
