import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerapp } from "./globel";
import hyrequest from "./services/index";
const app = createApp(App);
registerapp(app);
createApp(App).use(store).use(router).mount("#app");

hyrequest.request({
  url: "/about",
  method: "GET"
});
