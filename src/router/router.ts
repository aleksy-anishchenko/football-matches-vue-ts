import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main.vue";
import MatchPage from "@/pages/MatchPage.vue";
import Login from "@/pages/Login.vue";
import { useAuthStore } from "@/stores/authStore.ts";
import Register from "@/pages/Register.vue";

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/match/:id',
        name: 'match',
        component: MatchPage,
        meta: { requiresAuth: true },
        props: true
    }
]

const router = createRouter({
    routes: routes,
    history: createWebHistory()
})

router.beforeEach((to) => {
    const authStore = useAuthStore();

    if (to.meta?.requiresAuth && !authStore.isAuthenticated) {
        return { name: 'login' };
    }
});

export default router;