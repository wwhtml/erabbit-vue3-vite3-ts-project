import type { App } from "vue";
import { defineAsyncComponent } from "vue";

const importCom = import.meta.glob("./*.vue");

//转换文件名格式
const transform = function (str: string) {
  const arr: string[] = str.split("-");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
  }
  return arr.join("");
};

//转换文件名格式

// 插件可以是一个带 install() 方法的对象，亦或直接是一个将被用作 install() 方法的函数。插件选项 (app.use() 的第二个参数) 将会传递给插件的 install() 方法。
export default {
  install(app: App) {
    // 批量注册全局组件
    Object.keys(importCom).forEach((key) => {
      const cname = key.replace(/\.\//, "").replace(/\.vue$/, "");
      const AsyncComponent = defineAsyncComponent(importCom[key]);
      app.component(transform(cname), AsyncComponent);
    });
  },
};
