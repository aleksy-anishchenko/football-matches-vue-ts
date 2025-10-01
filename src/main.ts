import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "@/router/router.ts";
import "@/styles/global.css";

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const pinia = createPinia()
const vuetify = createVuetify({
    components,
    directives,
})


createApp(App)
    .use(pinia)
    .use(router)
    .use(vuetify)
    .mount('#app')