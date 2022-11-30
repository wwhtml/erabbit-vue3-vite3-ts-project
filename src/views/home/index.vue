<script lang="ts">
export default {
  name: "home-view",
};
</script>

<script lang="ts" setup>
import HomeCategory from "./components/home-category.vue";
import Skeleton from "@/components/library/xtx-skeleton.vue";
</script>

<template>
  <div class="home-view">
    <div class="home-entery">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory></HomeCategory>

        <!-- 轮播图 -->
        <Skeleton></Skeleton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.home-view {
}
</style>
