import service from "@/utils/require";
import type {
  BannerObject,
  NewObject,
  HotObject,
  BrandObject,
  ResData,
} from "./types";
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

//品牌
export const findBrand = (limit: number) => {
  return service.get<BrandObject>("/home/brand", { params: { limit: limit } });
};

//商品
export const findGoods = () => {
  return service.get<ResData>("/home/goods");
};

//最新专题
export const findSpecial = () => {
  return service.get<ResData>("/home/special");
};
