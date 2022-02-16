import { createApp } from "vue";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/js/all";
import "./assets/tailwind.css";
import router from "./router";

createApp(App).use(router).mount("#app");
