<!--
 * @Descripttion: 
 * @version: 
 * @Author: wwy
 * @Date: 2022-05-19 16:59:01
 * @LastEditors: wwy
 * @LastEditTime: 2022-05-25 18:16:47
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
      this.$emit("base-button-click", event.target.innerText);

      if (event.path[0].nodeName.toLocaleLowerCase() === "span") {
        event.path[1].classList.add("base-button-click-focus");
      } else {
        event.path[0].classList.add("base-button-click-focus");
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
