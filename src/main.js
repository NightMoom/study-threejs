import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/utils/ui";
import "normalize.css";
Vue.config.productionTip = false;

import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
// use
Vue.use(mavonEditor);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
