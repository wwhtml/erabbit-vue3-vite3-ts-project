<script lang="ts" setup>
import { ref } from "vue";
import { findNew } from "@/api/home";
import HomePanel from "./home-panel.vue";
import HomeSkeleton from "./home-skeleton.vue";

export interface New {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
}
//商品列表数据
const goods = ref<New[]>([]);

const getNewList = async () => {
  const { result } = await findNew();
  goods.value = result;
};
getNewList();
</script>

<template>
  <div class="home-new">
    <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
      <template #right>
        <div class="more">查看全部1></div>
      </template>
      <ul class="goods-list" v-if="goods.length">
        <li v-for="good in goods" :key="good.id">
          <a href="#">
            <img :src="good.picture" alt="" />
            <p class="name ellipsis">{{ good.name }}</p>
            <p class="price">{{ good.price }}</p>
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
.more {
  color: #9999;
}
.goods-list {
  display: flex;
  justify-content: space-between;
  li {
    width: 306px;
    height: 406px;
    background-color: #f0f9f4;
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
    .price {
      color: @priceColor;
    }
  }
}
</style>
