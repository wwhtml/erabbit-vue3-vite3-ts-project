export interface Children {
  id: string;
  name: string;
  picture: string;
  children?: any;
  goods?: any;
}

export interface Good {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum?: any;
}

export interface Category {
  id?: string;
  name?: string;
  picture?: string;
  children?: Children[];
  goods?: Good[];
  open?: boolean;
}

export interface ResObject {
  msg: string;
  result: Category[];
}
