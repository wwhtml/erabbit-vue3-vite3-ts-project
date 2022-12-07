import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig(({ mode }) => {
  //注意：vite中不能直接访问env，所以只能通过这种方式访问
  // const ENV1 = loadEnv(mode, process.cwd(), "");
  // console.log(ENV1);
  return {
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        //配置less
        less: {
          additionalData: `@import "@/styles/variables.less";@import "@/styles/mixins.less";`,
        },
      },
    },
    server: {
      host: "0.0.0.0",
      port: 9999,
      //跨域设置
      proxy: {
        "/api": {
          target: "https://apipc-xiaotuxian-front.itheima.net",
          ws: false, // webstock
          changeOrigin: true, // 是否开启跨域
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
