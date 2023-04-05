import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerapp } from "./globel";
import hyrequest from "./services/index";
import "./assets/css/index.less";
const app = createApp(App);
app.use(registerapp);
app.use(store).use(router).mount("#app");
hyrequest.request({
  url: "/about",
  method: "GET"
});
