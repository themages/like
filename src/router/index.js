import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import VideoChat from "@/views/videoChat/";
import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/chat",
    name: "Chat",
    component: VideoChat,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
