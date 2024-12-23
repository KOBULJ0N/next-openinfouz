import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import MainLayout from "@/layout/MainLayout.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "",
          redirect: "home",
        },
        {
          path: "/home",
          name: "home",
          components: {
            default: () => import("../views/HomeView.vue"),
          },
        },
        {
          path: "/about",
          name: "about",
          component: () => import("../views/AboutView.vue"),
        },
      ],
    },
  ],
});

export default router;
