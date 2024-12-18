import { createRouter, createWebHistory } from "vue-router";
import NodirasTestPage from "../views/NodirasTestPage.vue";
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
        {
          path: "/nodira",
          name: "nodira",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: NodirasTestPage,
        },
      ],
    },
  ],
});

export default router;
