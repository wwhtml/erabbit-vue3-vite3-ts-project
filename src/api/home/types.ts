export interface ResData {
  msg: string;
  result: any;
}

//轮播图数据
export interface Banner {
  id: string;
  imgUrl: string;
  hrefUrl: string;
  type: string;
}

export interface BannerObject {
  msg: string;
  result: Banner[];
}

//new
export interface New {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum: number;
}

export interface NewObject {
  msg: string;
  result: New[];
}

//hot
export interface Hot {
  id: string;
  picture: string;
  title: string;
  alt: string;
}

export interface HotObject {
  msg: string;
  result: Hot[];
}

//brand
export interface Brand {
  id: string;
  name: string;
  nameEn: string;
  logo: string;
  picture: string;
  type?: any;
  desc: string;
  place: string;
}

export interface BrandObject {
  msg: string;
  result: Brand[];
}

//goods
export interface Children {
  id: string;
  name: string;
  layer: number;
  parent?: any;
}

export interface Good {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum: number;
}

export interface Goods {
  id: string;
  name: string;
  picture: string;
  saleInfo: string;
  children: Children[];
  goods: Good[];
}

export interface GoodsObject {
  msg: string;
  result: Goods[];
}
