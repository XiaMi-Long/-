<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-05-26 15:24:38
 * @LastEditors: wwy
 * @LastEditTime: 2022-06-01 16:46:33
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
            class="table-thody-tr"
            v-for="(item, index) in songResult"
            :key="index"
            @click="handleTableTrClick($event)"
          >
            <td class="table-thody-td">{{ index + 1 }}</td>
            <td class="table-thody-td">{{ item.songName }}</td>
            <td class="table-thody-td">{{ item.user }}</td>
            <td class="table-thody-td">{{ item.language }}</td>
            <td class="table-thody-td">{{ item.remarks }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { asyncClipboardUtils } from "async-clipboard-utils";
import { song } from "@/config/song";

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
      songResult: song["A"],
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

    color: #ded5d5;

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
          background-color: #050505;
        }
      }

      .table-thody-td {
        padding: 0.5em;
      }

      .id-th {
        width: 3%;
      }
    }
  }
}
</style>
