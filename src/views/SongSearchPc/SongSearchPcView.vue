<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-05-19 19:38:31
 * @LastEditors: wwy
 * @LastEditTime: 2022-05-25 18:23:52
-->
<template>
  <div class="search-container">
    <el-input
      placeholder="搜索歌曲"
      v-model="inputValue"
      class="input-with-select"
    >
      <div slot="append" class="search-icon">
        <i class="el-icon-search"></i>
      </div>
    </el-input>
  </div>
</template>

<script>
export default {
  name: "SongSearchPcView",
  data() {
    return {
      inputValue: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.search-container {
  width: 50%;

  display: inline-block;

  margin: {
    bottom: 30px;
  }
}

.input-with-select {
  ::v-deep .el-input__inner {
    &:focus {
      border: 1px solid #0d0d0d;
      box-shadow: 0 0 5px;
    }

    background-color: #545454;

    border: 1px solid #545454;

    color: white;
  }

  ::v-deep .el-input-group__append {
    background-color: #545454;

    border: 1px solid #545454;

    border-left: 1px solid #3d3d3d;

    &:hover {
      border: 1px solid #0d0d0d;
      box-shadow: 0 0 5px;
    }
  }
}

.search-icon {
  cursor: pointer;
}

@media screen and (max-width: 1000px) {
  .search-container {
    min-width: 80%;

    margin: {
      top: 30px;
    }
  }
}

@media screen and (max-width: 900px) {
  .search-container {
    margin: {
      top: 10px;
    }
  }
}
</style>
