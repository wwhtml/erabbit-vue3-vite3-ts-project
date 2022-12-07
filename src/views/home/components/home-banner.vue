<script setup lang="ts">
import { ref } from "vue";
import { findBanner } from "@/api/home";
import type { Banner } from "@/api/home/types";
import XtxCarousel from "@/components/library/xtx-carousel.vue";

const sliders = ref<Banner[]>();

findBanner().then((data) => {
  sliders.value = data.result;
});
</script>

<template>
  <div class="home-banner">
    <XtxCarousel auto-play :sliders="sliders" />
  </div>
</template>

<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
}

.xtx-carousel {
  :deep(.carousel-btn.prev) {
    left: 270px;
  }
  :deep(carousel-indicator) {
    padding-left: 250px;
  }
}
</style>
