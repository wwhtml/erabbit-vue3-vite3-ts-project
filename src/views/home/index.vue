<script lang="ts">
export default {
  name: "home-view",
};
</script>

<script lang="ts" setup>
import HomeCategory from "./components/home-category.vue";
import HomeBanner from "./components/home-banner.vue";
import HomeNew from "./components/home-new.vue";
import HomeHot from "./components/home-hot.vue";
</script>

<template>
  <div class="home-view">
    <div class="home-entery">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory></HomeCategory>

        <!-- 轮播图 -->
        <HomeBanner></HomeBanner>
      </div>
    </div>
    <!-- 新鲜好物 -->
    <HomeNew></HomeNew>
    <!-- 人气推荐 -->
    <HomeHot></HomeHot>
  </div>
</template>

<style scoped lang="less">
.home-view {
  position: relative;
}
</style>
