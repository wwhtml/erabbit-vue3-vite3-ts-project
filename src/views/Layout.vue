<script lang="ts">
export default {
  name: "app-layout",
  components: { AppTopNav },
};
</script>

<script lang="ts" setup>
import AppTopNav from "@/components/app-top-nav.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <!-- app-top-nav -->
  <AppTopNav></AppTopNav>
  <div class="app-header">app-header</div>
  <div class="app-body">
    <RouterView></RouterView>
  </div>
  <div class="app-footer">app-footer</div>
</template>

<style scoped lang="scss"></style>
