import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
// import { onAuthStateChanged } from "firebase/auth";

createApp(App).use(store).use(router).mount("#app");
