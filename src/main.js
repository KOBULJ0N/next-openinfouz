import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import ElementPLus from "element-plus";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPLus);
app.mount("#app");
