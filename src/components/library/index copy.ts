import type { App } from "vue";

const importFn = import.meta.globEager("./*.vue");
// const importCom = import.meta.glob("./*.vue");

// console.log(importFn);
// console.log(importCom);

//转换文件名格式

// 插件可以是一个带 install() 方法的对象，亦或直接是一个将被用作 install() 方法的函数。插件选项 (app.use() 的第二个参数) 将会传递给插件的 install() 方法。
export default {
  install(app: App) {
    // 批量注册全局组件
    Object.keys(importFn).forEach((key) => {
      // 导入组件
      const component = importFn[key].default;
      // console.log(component);
      // 注册组件
      //setup语法糖组件的name属性默认是vue文件名;注册组件是一定要注意组件名称，这里需要转换一下格式
      app.component(component.name, component);
    });
  },
};
