import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main.vue";
import MatchPage from "@/pages/MatchPage.vue";

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main
    },
    {
        path: '/match/:id',
        name: 'match',
        component: MatchPage,
        props: true
    }
]

const router = createRouter({
    routes: routes,
    history: createWebHistory()
})

export default router;