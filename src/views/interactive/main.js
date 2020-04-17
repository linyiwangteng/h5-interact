/*
 * @Author: wangteng
 * @Date: 2020-04-16 19:49:16
 * @LastEditTime: 2020-04-16 20:15:31
 * @LastEditors: wangteng
 * @FilePath: /coureseware/src/views/interactive/main.js
 */
import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "@/store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
