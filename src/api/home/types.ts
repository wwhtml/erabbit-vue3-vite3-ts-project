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
