import { createRouter, createWebHistory } from "vue-router";
import savatcha from "../views/savatchaView.vue";
import taqqoslash from "../views/taqqoslashView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/savatcha",
      name: "savatcha",
      component: savatcha,
    },
    {
      path: "/taqqoslash",
      name: "taqqoslash",
      component: taqqoslash,
    },
    {
      path: "/taqqoslash",
      name: "taqqoslash",
      component: taqqoslash,
    },
  ],
});

export default router;
