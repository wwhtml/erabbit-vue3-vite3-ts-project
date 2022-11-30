<script lang="ts">
export default {
  name: "home-category",
};
</script>

<script lang="ts" setup>
import { computed, ref } from "vue";
//获取category数据
import { useCategoryStore } from "@/stores/category";
import { storeToRefs } from "pinia";
const categoryStore = useCategoryStore();

const { list } = storeToRefs(categoryStore);

const menuList = computed(() => {
  return list.value.map((item) => {
    return {
      id: item.id,
      name: item.name,
      children: item.children && item.children.slice(0, 2),
      goods: item.goods,
    };
  });
});

//设置当前分类（也就是鼠标划入的那一类）
const categoryId = ref<string | undefined | null>("");

const currCategory = computed(() => {
  return menuList.value.find((item) => item.id === categoryId.value);
});
</script>

<template>
  <div class="home-category" @mouseleave="categoryId = ''">
    <!-- <div class="home-category"> -->
    <ul class="menu">
      <li
        class="menu-item"
        v-for="item in menuList"
        :key="item.id"
        @mouseenter="categoryId = item.id"
      >
        <a href="#">{{ item.name }}</a>
        <!-- <template> -->
        <a href="#" v-for="sub in item.children" :key="sub.id">{{
          sub.name
        }}</a>
        <!-- </template> -->
      </li>
    </ul>
    <!-- 弹层 -->
    <div class="layer">
      <h4 v-if="currCategory">
        {{ currCategory.id === "brand" ? "品牌" : "分类" }}推荐
        <small>根据您的购买或浏览记录推荐</small>
      </h4>
      <ul
        v-if="currCategory && currCategory.goods && currCategory.goods.length"
      >
        <li v-for="item in currCategory.goods" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="" />
            <div class="info">
              <p class="name ellipsis-2">{{ item.name }}</p>
              <p class="desc ellipsis">{{ item.desc }}</p>
              <p class="price"><i>¥</i>{{ item.price }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
.home-category {
  width: 250px;
  background: rgba(0, 0, 0, 0.8);
  .menu {
    .menu-item {
      height: 50px;
      line-height: 50px;
      padding-left: 40px;
      a {
        margin-right: 5px;
        color: #fff;
      }
      &:hover {
        background-color: @xtxColor;
      }
    }
  }
}
.layer {
  width: 990px;
  height: 500px;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  left: 250px;
  top: 0;
  // display: none;
  padding: 0 15px;
  h4 {
    font-size: 20px;
    font-weight: normal;
    line-height: 80px;
    small {
      font-size: 16px;
      color: #666;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 310px;
      height: 120px;
      margin-right: 15px;
      margin-bottom: 15px;
      border: 1px solid #eee;
      border-radius: 4px;
      background: #fff;
      &:nth-child(3n) {
        margin-right: 0;
      }
      a {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        padding: 10px;
        &:hover {
          background: #e3f9f4;
        }
        img {
          width: 95px;
          height: 95px;
        }
        .info {
          padding-left: 10px;
          line-height: 24px;
          width: 190px;
          .name {
            font-size: 16px;
            color: #666;
          }
          .desc {
            color: #999;
          }
          .price {
            font-size: 22px;
            color: @priceColor;
            i {
              font-size: 16px;
            }
          }
        }
      }
    }
    li.brand {
      height: 180px;
      a {
        align-items: flex-start;
        img {
          width: 120px;
          height: 160px;
        }
        .info {
          p {
            margin-top: 8px;
          }
          .place {
            color: #999;
          }
        }
      }
    }
  }
}
</style>
