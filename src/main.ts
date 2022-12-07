import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

//初始化样式
import "normalize.css";
//通用样式
import "@/styles/common.less";

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import ui from "./components/library";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(router).use(ui).use(pinia);

app.mount("#app");
