<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-05-26 15:24:38
 * @LastEditors: wwy
 * @LastEditTime: 2022-06-29 11:16:37
-->
<template>
  <div class="table-container">
    <div class="box">
      <table class="song-table" cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th class="id-th"></th>
            <th class="thead-tr-th">歌名</th>
            <th class="thead-tr-th">歌手</th>
            <th class="thead-tr-th">语言</th>
            <th class="thead-tr-th">备注</th>
            <th class=""></th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="table-thody-tr animate__animated animate__fadeInLeft"
            v-for="(item, index) in songResult"
            :key="index"
            @click="handleTableTrClick($event)"
          >
            <td class="table-thody-td">{{ index + 1 }}</td>
            <td class="table-thody-td">{{ item.songName }}</td>
            <td class="table-thody-td">{{ item.user }}</td>
            <td class="table-thody-td">{{ item.language }}</td>
            <td class="table-thody-td">{{ item.remarks }}</td>
            <td class="table-thody-td" v-if="item.isHot">
              <div class="table-thody-td-hot-icon">
                <img src="@/assets/HOT.png" alt="热门" />
              </div>
            </td>
            <td class="table-thody-td" v-if="item.isNew">
              <div class="table-thody-td-hot-icon">
                <img src="@/assets/NEW.png" alt="最新" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { asyncClipboardUtils } from "async-clipboard-utils";

export default {
  name: "TableView",

  props: {
    filterSong: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },

  data() {
    return {
      songResult: window._song["A"],
    };
  },

  computed: {},

  watch: {
    filterSong(newValue) {
      this.songResult = newValue;
    },
  },

  methods: {
    handleTableTrClick(event) {
      const nodeName = event.path[0].nodeName.toLocaleLowerCase();
      if (nodeName === "img" || nodeName === "div") {
        this.$notify({
          title: "复制失败",
          message: "标签无法复制",
          type: "error",
          duration: 1500,
        });
        return;
      }

      const copyText = event.path[1].childNodes[1].innerText;
      asyncClipboardUtils({
        type: "write-text",
        text: copyText,
        writeSuccess: () => {
          this.$notify({
            title: "复制成功",
            message: "复制内容为：" + copyText,
            type: "success",
            duration: 2000,
          });
        },
        writeError: function (error) {
          console.log(error);
        },
        error: (err) => {
          console.log(err);
          this.$notify({
            title: "复制失败",
            message: "请确认网站为HTTPS协议",
            type: "error",
            duration: 1500,
          });
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.table-container {
  text-align: center;

  .box {
    width: 90%;
    height: 10%;

    border: 1px solid white;

    display: inline-block;

    padding: 1em;

    border-radius: 0.7em;

    font-weight: 600;

    color: $table-text-color;

    overflow-x: auto;
    .song-table {
      width: 100%;
      min-width: 900px;

      border-collapse: collapse;

      .thead-tr-th {
        padding: 0.5em 0.5em 1em 0.5em;

        color: #60bee9;
      }

      .table-thody-tr {
        line-height: 2.5em;

        cursor: pointer;

        border-bottom: 1px solid #fffbfb26;

        transition: background-color 0.25s ease;
        &:hover {
          background-color: $table-tr-hover-background-color;
        }
      }

      .table-thody-td {
        padding: 0.5em;

        .table-thody-td-hot-icon {
          line-height: 10px;

          cursor: auto;
        }
      }

      .id-th {
        width: 3%;
      }
    }
  }
}
</style>
