<script lang="ts" setup>
import { ref } from "vue";
import HomePanel from "./home-panel.vue";
import { findBrand } from "@/api/home";
import type { Brand } from "@/api/home/types";
import XtxSkeleton from "@/components/library/xtx-skeleton.vue";

const brands = ref<Brand[]>([]);

const getBrandList = async () => {
  const { result } = await findBrand(10);
  brands.value = result;
};
getBrandList();

//控制索引
const index = ref<number>(0);
const toggle = (step: number) => {
  const newIndex = index.value + step;
  if (newIndex < 0 || newIndex > 1) return;
  index.value = newIndex;
};
</script>

<template>
  <div class="hot-brand">
    <HomePanel title="热门品牌" subTitle="国际经典 品质保证">
      <template v-slot:right>
        <a
          @click="toggle(-1)"
          :class="{ disabled: index === 0 }"
          href="javascript:;"
          class="iconfont icon-angle-left prev"
        ></a>
        <a
          @click="toggle(1)"
          :class="{ disabled: index === 1 }"
          href="javascript:;"
          class="iconfont icon-angle-right next"
        ></a>
      </template>
      <div class="brand-box">
        <Transition name="fade">
          <ul
            v-if="brands.length"
            class="brand-list"
            :style="{ transform: `translateX(${-index * 1240}px)` }"
          >
            <li v-for="brand in brands" :key="brand.id">
              <a href="#">
                <img :src="brand.picture" alt="" />
              </a>
            </li>
          </ul>
          <div v-else class="skeleton">
            <XtxSkeleton
              class="item"
              v-for="i in 5"
              :key="i"
              animated
              bg="#e4e4e4"
              width="240px"
              height="305px"
            />
          </div>
        </Transition>
      </div>
    </HomePanel>
  </div>
</template>

<style scoped lang="less">
.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background: @xtxColor;
  &::before {
    font-size: 12px;
    position: relative;
    top: -2px;
  }
  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}

.brand-box {
  // display: flex;
  overflow: hidden;
  width: 100%;
}
.brand-list {
  padding-bottom: 40px;
  display: flex;
  width: 200%;
  transition: all 1s;

  li {
    margin-right: 10px;
    width: 240px;
    &:nth-child(5n) {
      margin-right: 0;
    }
    a {
      img {
        height: 305px;
        width: 240px;
        background-color: red;
      }
    }
  }
}
</style>
