import { defineStore } from "pinia";

//一般情况下只需要定义state的类型，含数只需要定义函数参数的类型，函数类型是可以推导出来的；

//定义profile接口
interface ProfileInfo {
  id: string;
  avatar?: string;
  nickname?: string;
  account?: string;
  mobile?: string;
  token?: string;
  [propName: string]: any; //暂时项用它
}

// interface一般首字母大写
interface UserStateConfig {
  profile: ProfileInfo;
  res: string;
  [propName: string]: any;
}

//第一个参数 UserStore ，是一个id这必须是唯一的，不能与其他的创建的store的id重复
export const useUserStore = defineStore({
  id: "user",
  state: (): UserStateConfig => ({
    profile: {
      id: "1111",
      avatar: "",
      nickname: "",
      account: "",
      mobile: "",
      token: "",
    },
    res: "sss",
    count: 1,
  }),

  getters: {
    doublePlusOne(): number {
      return this.count * 2 + 1;
    },
  },

  // persist: true,
  persist: {
    key: "erabbit-user", //erabbit-user值是唯一的;不能与其他的store重复
    storage: localStorage, //或者 sessionStorage /  localStorage
    paths: ["profile", "res"], //profile：是需要保存的state中的一个数据名称
  },

  actions: {
    //函数一般不需要定义类型，只需要给参数定义类型就好了，函数会自动推导出类型来
    setUser(payload: ProfileInfo): void {
      this.profile = payload;
    },
  },
});
