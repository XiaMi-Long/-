<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-05-19 16:59:01
 * @LastEditors: wwy
 * @LastEditTime: 2022-07-05 14:59:09
-->
<template>
  <div class="base-button" @click="btnClick($event)">
    <slot name="text"></slot>
  </div>
</template>

<script>
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
          window._songType.filter((item) => item.name === "")
        );
        return;
      }

      this.$emit(
        "base-button-click",
        window._songType.filter((item) => item.name === event.target.innerText)
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

  border: 1px solid $song-classify-text-color;

  min-width: 90px;

  color: $song-classify-text-color;

  margin: 1em;

  border-radius: 6px;

  letter-spacing: 2px;

  cursor: pointer;
  &:hover {
    background-color: $song-classify-background-color;

    border: 1px solid $song-classify-hover-background-color;

    box-shadow: 0 0 5px;

    color: white;
  }
}
</style>
