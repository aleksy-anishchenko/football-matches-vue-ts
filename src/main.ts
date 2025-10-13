import { createApp } from "vue";
import App from "./App.vue";

import { createPinia } from "pinia";
import router from "@/router/router.ts";

import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { definePreset } from "@primeuix/themes";

import "@/styles/global.css";

const customTheme = definePreset(Aura, {
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

const ruLocale = {
    firstDayOfWeek: 1,
    dayNames: [
        'Воскресенье', 'Понедельник', 'Вторник',
        'Среда', 'Четверг', 'Пятница', 'Суббота'
    ],
    dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    monthNames: [
        'Январь', 'Февраль', 'Март', 'Апрель',
        'Май', 'Июнь', 'Июль', 'Август',
        'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ],
    monthNamesShort: [
        'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
        'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
    ],
    today: 'Сегодня',
    clear: 'Очистить',
    dateFormat: 'dd.mm.yy'
};

createApp(App)
    .use(createPinia())
    .use(router)
    .use(PrimeVue, {
        theme: {
            preset: customTheme,
            options: {
                prefix: "p",
                darkModeSelector: "none",
                cssLayer: false
            }
        },
        locale: ruLocale
    })
    .mount("#app")