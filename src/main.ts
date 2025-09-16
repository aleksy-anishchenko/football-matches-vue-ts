import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/router/router.ts";
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import "@/styles/global.css";

const app = createApp(App)

const pinia = createPinia()
const vuetify = createVuetify()


app
    .use(pinia)
    .use(router)
    .use(vuetify)
    .mount('#app')