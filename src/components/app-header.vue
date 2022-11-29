<script lang="ts">
export default {
  name: "app-header",
};
</script>

<script lang="ts" setup>
//获取分类列表
import AppHeaderNav from "./app-header-nav.vue";
</script>

<template>
  <div class="app-header">
    <div class="container">
      <h3 class="logo"><a href="#">小兔鲜</a></h3>
      <AppHeaderNav></AppHeaderNav>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜" />
      </div>
      <div class="cart">
        <a class="curr" href="#">
          <i class="iconfont icon-cart"></i><em>2</em>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.app-header {
  background: #fff;

  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    a {
      display: block;
      width: 200px;
      height: 132px;
      text-indent: -9999px;
      background: url(../assets/images/logo.png) no-repeat center 18px / contain;
      //相当于下面的配置
      // background: url(../assets/images/logo.png);
      // background-repeat: no-repeat;
      // background-position: center 18px;
      // background-size: contain; //contain	把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域。
    }
  }

  .search {
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;
    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }
    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }
  .cart {
    width: 50px;
    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;
      .icon-cart {
        font-size: 22px;
      }
      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: @helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>
