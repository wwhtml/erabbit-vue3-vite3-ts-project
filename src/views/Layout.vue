<script lang="ts">
export default {
  name: "app-layout",
};
</script>

<script lang="ts" setup>
import AppHeader from "@/components/app-header.vue";
import AppTopNav from "@/components/app-top-nav.vue";
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

  <div class="app-body">
    <RouterView></RouterView>
  </div>
  <div class="app-footer">app-footer</div>
</template>

<style scoped lang="scss"></style>
