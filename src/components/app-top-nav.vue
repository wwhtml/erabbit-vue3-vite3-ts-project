<script lang="ts">
export default {
  name: "app-top-nav",
};
</script>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();

const { profile } = storeToRefs(userStore);
</script>

<template>
  <nav class="app-top-nav">
    <div class="container">
      <ul>
        <template v-if="profile.token">
          <li>
            <a href="#">
              <i class="iconfont icon-user"></i>{{ profile.name }}</a
            >
          </li>
          <li><a href="#">退出登录</a></li>
        </template>
        <template v-else>
          <li>
            <a href="#">用户登录</a>
          </li>
          <li><a href="#">用户注册</a></li>
        </template>

        <li><a href="#">我的订单</a></li>
        <li><a href="#">会员中心</a></li>
        <li><a href="#">帮助中心</a></li>
        <li><a href="#">关于我们</a></li>
        <li>
          <a href="javascript:;"><i class="iconfont icon-phone"></i>手机版</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="less">
.app-top-nav {
  background-color: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: @xtxColor;
        }
      }
      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
