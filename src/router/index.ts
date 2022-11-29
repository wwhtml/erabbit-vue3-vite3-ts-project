import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/Layout.vue";
import Home from "@/views/home/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout,
      children: [{ path: "/", name: "home", component: Home }],
    },
  ],
});

export default router;
