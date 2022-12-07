<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: "title",
  },
  subTitle: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <h3>
          {{ title }}<small>{{ subTitle }}</small>
        </h3>
        <slot name="right"></slot>
      </div>
      <slot>展示区域</slot>
    </div>
  </div>
</template>

<style scoped lang="less">
.head {
  padding: 40px 0;
  align-items: flex-end;
  display: flex;

  h3 {
    font-size: 32px;
    flex: 1;
    font-weight: normal;
    margin-left: 6px;
    height: 35px;
    line-height: 35px;
    small {
      font-size: 16px;
      color: #9999;
      margin-left: 20px;
    }
  }
}
</style>
