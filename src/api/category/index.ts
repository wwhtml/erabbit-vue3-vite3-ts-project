import service from "@/utils/require";
import type { ResObject } from "./types";

export const findAllCategory = () => {
  return service.get<ResObject>("/home/category/head");
};

//轮播图数据
