<script lang="ts">
export default {
  name: "app-layout",
};
</script>

<script lang="ts" setup>
import AppHeader from "@/components/app-header.vue";
import AppTopNav from "@/components/app-top-nav.vue";
import AppFooter from "@/components/app-footer.vue";
import AppHeaderSticky from "@/components/app-header-sticky.vue";

import { RouterView } from "vue-router";
import { useCategoryStore } from "@/stores/category";
const categoryStore = useCategoryStore();
categoryStore.getList();
</script>

<template>
  <!-- app-top-nav -->
  <AppTopNav></AppTopNav>
  <!-- app-top-nav.vue -->
  <AppHeader></AppHeader>
  <!-- app-header-sticky -->
  <AppHeaderSticky></AppHeaderSticky>

  <div class="app-body">
    <RouterView></RouterView>
  </div>

  <AppFooter></AppFooter>
  <div class="app-footer">app-footer</div>
</template>

<style scoped lang="less">
.app-body {
  min-height: 500px;
}
</style>
