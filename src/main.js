import { createApp } from "vue";
import { createPinia } from "pinia";
import { i18n } from "./i18n/translate";
import "element-plus/dist/index.css"; // Light theme (default)
import "element-plus/theme-chalk/dark/css-vars.css"; // Dark theme
import App from "./App.vue";
import router from "./router";
import ElementPLus from "element-plus";
import "./styles/main.css";
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(ElementPLus);
app.mount("#app");
