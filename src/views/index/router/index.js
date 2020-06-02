/*
 * @Author: wangteng
 * @Date: 2020-04-16 19:49:16
 * @LastEditTime: 2020-04-16 20:14:55
 * @LastEditors: wangteng
 * @FilePath: /coureseware/src/views/interactive/router/index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../pages/index")
  },
  {
    path: "/other",
    name: "Other",
    component: () => import("../pages/other")
  }
];

const router = new VueRouter({
  routes
});

export default router;
