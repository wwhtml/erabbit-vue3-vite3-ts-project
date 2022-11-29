import { defineStore } from "pinia";
import { findAllCategory } from "@/api/category";
import type { Category } from "@/api/category/types";

import { topCategory } from "@/api/constants";

const topHead = topCategory.map((item: string) => ({ name: item }));

interface CategoryState {
  list: Category[];
}

export const useCategoryStore = defineStore({
  id: "category",
  state: (): CategoryState => ({
    list: topHead,
  }),
  actions: {
    setCategory(payload: Category[]) {
      this.list = payload;
    },

    async getList() {
      const { result } = await findAllCategory();
      //添加open属性
      result.forEach((item) => {
        item.open = false;
      });
      // 获取数据成功
      this.setCategory(result);
    },
  },
});
