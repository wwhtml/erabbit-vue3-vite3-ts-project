import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: () => {
    return {
      //购物车数据集合
      list: [{ id: 1 }],
    };
  },
  // persist: true,
  persist: {
    key: "erabbit-cart",
    paths: ["list"],
  },

  actions: {
    addCart() {
      this.list = [{ id: 2 }];
    },
  },
});
