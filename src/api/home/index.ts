import service from "@/utils/require";
import type { BannerObject } from "./types";
//轮播图
export const findBanner = () => {
  return service.get<BannerObject>("/home/banner");
};
