<script lang="ts" setup>
import { ref } from "vue";
import { findHot } from "@/api/home";
import HomePanel from "./home-panel.vue";
import HomeSkeleton from "./home-skeleton.vue";

export interface Hot {
  id: string;
  picture: string;
  title: string;
  alt: string;
}

//商品列表数据
const hots = ref<Hot[]>([]);

const getHotList = async () => {
  const { result } = await findHot();
  hots.value = result;
};
getHotList();
</script>

<template>
  <div class="home-new">
    <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
      <!-- <template #right>
        <div class="more">查看全部1></div>
      </template> -->
      <ul class="goods-list" v-if="hots.length">
        <li v-for="hot in hots" :key="hot.id">
          <a href="#">
            <img :src="hot.picture" alt="" />
            <p class="name ellipsis">{{ hot.title }}</p>
            <p class="desc">{{ hot.alt }}</p>
          </a>
        </li>
      </ul>
      <HomeSkeleton bg="#f0f9f4" v-else />
    </HomePanel>
  </div>
</template>

<style scoped lang="less">
.home-new {
  background-color: #fff;
}

.goods-list {
  display: flex;
  justify-content: space-between;
  li {
    width: 306px;
    height: 406px;
    background-color: #fff;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
