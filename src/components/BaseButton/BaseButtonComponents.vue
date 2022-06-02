<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-05-19 16:59:01
 * @LastEditors: wwy
 * @LastEditTime: 2022-06-02 11:16:41
-->
<template>
  <div class="base-button" @click="btnClick($event)">
    <slot name="text"></slot>
  </div>
</template>

<script>
import { songType } from "../../type";

export default {
  name: "BaseButtonComponents",
  methods: {
    btnClick(event) {
      const event0 = event.path[0];
      const event1 = event.path[1];
      if (
        event0.classList.contains("base-button-click-focus") ||
        event1.classList.contains("base-button-click-focus")
      ) {
        this.$emit(
          "base-button-click",
          songType.filter((item) => item.name === "")
        );
        return;
      }

      this.$emit(
        "base-button-click",
        songType.filter((item) => item.name === event.target.innerText)
      );

      if (event0.nodeName.toLocaleLowerCase() === "span") {
        event1.classList.add("base-button-click-focus");
      } else {
        event0.classList.add("base-button-click-focus");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.base-button {
  display: inline-block;

  padding: 0.5em;

  border: 1px solid white;

  min-width: 90px;

  color: white;

  margin: 1em;

  border-radius: 6px;

  letter-spacing: 2px;

  cursor: pointer;
  &:hover {
    background-color: #0d0d0d;

    border: 1px solid #0d0d0d;

    box-shadow: 0 0 5px;
  }
}
</style>
