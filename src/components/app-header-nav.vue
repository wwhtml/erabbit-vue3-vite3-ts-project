<script lang="ts">
export default {
  name: "app-header-nav",
};
</script>

<script lang="ts" setup>
import { useCategoryStore } from "@/stores/category";
import { storeToRefs } from "pinia";
const categoryStore = useCategoryStore();
const { list } = storeToRefs(categoryStore);
</script>

<template>
  <ul class="app-header-nav">
    <li><a href="#">首页</a></li>
    <li v-for="category in list" :key="category.id">
      <a href="#">{{ category.name }}</a>
      <!-- 二级分类列表 -->
      <div class="layer">
        <ul>
          <li v-for="item in category.children" :key="item.id">
            <a href="">
              <img :src="item.picture" alt="" />
              <p>{{ item.name }}</p>
            </a>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="less">
.app-header-nav {
  display: flex;
  padding-left: 40px;
  width: 820px;
  justify-content: space-between;
  position: relative;

  > li {
    height: 32px;
    line-height: 32px;
    margin-right: 40px;
    > a {
      display: block;
      font-size: 16px;
    }
    &:hover {
      > a {
        display: block;
        font-size: 16px;
        border-bottom: 1px solid @xtxColor;
        color: @xtxColor;
      }
      .layer {
        // display: block;
        opacity: 1;
        height: 132px;
      }
    }
  }
}
.layer {
  // display: none;
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all 0.2s 0.1s;
  z-index: 9999;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;
    li {
      width: 110px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      p {
        padding-top: 10px;
      }
      &:hover {
        p {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>
