import { createApp } from "vue";
import App from "./App.vue";

import { createPinia } from "pinia";
import router from "@/router/router.ts";

import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { definePreset } from "@primeuix/themes";

import "@/styles/global.css";

const pinia = createPinia();

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: "{emerald.50}",
            100: "{emerald.100}",
            200: "{emerald.200}",
            300: "{emerald.300}",
            400: "{emerald.400}",
            500: "{emerald.500}",
            600: "{emerald.600}",
            700: "{emerald.700}",
            800: "{emerald.800}",
            900: "{emerald.900}",
            950: "{emerald.950}"
        }
    }
});

createApp(App)
    .use(pinia)
    .use(router)
    .use(PrimeVue, {
        theme: {
            preset: MyPreset,
            options: {
                prefix: "p",
                darkModeSelector: "none",
                cssLayer: false
            }
        }
    })
    .mount("#app")