import { createRouter, createWebHashHistory } from "vue-router"; // createWebHistory
import Home from "../views/Home.vue";
import Room from "../views/Room.vue";
import About from "../views/About.vue";

const routes = [
  { path: "", redirect: { path: "/home" } },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/room/:id",
    name: "Room",
    component: Room,
    props: true,
  },
];
// () => import(/* webpackChunkName: "room" */ "../views/Room.vue")
const router = createRouter({
  history: createWebHashHistory(), // createWebHistory()
  routes,
});

export default router;
