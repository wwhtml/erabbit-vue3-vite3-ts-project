import service from "@/utils/require";
import type { BannerObject, NewObject, HotObject } from "./types";
//轮播图
export const findBanner = () => {
  return service.get<BannerObject>("/home/banner");
};

//新鲜好物
export const findNew = () => {
  return service.get<NewObject>("/home/new");
};

//人气推荐
export const findHot = () => {
  return service.get<HotObject>("/home/hot");
};
