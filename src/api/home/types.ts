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
