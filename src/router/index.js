import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import VideoCall from "@/views/videoCall/";
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
    path: "/video",
    name: "Video",
    component: VideoCall,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
