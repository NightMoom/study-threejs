import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/Layout/index";
import { createRoute } from "./route";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
  },
  ...createRoute,
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
