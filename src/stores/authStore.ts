import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { login, logout, refreshTokenRequest, register } from "@/api/authApi.ts";
import { getMe } from "@/api/userApi.ts";
import type { User } from "@/types/types.ts";

const ACCESS_TOKEN_KEY = 'football-matches-access-token';
const REFRESH_TOKEN_KEY = 'football-matches-refresh-token';

export const useAuthStore = defineStore('authStore', () => {
    const accessToken = ref<string | null>(localStorage.getItem(ACCESS_TOKEN_KEY))
    const refreshToken = ref<string | null>(localStorage.getItem(REFRESH_TOKEN_KEY))
    const isAuthenticated = computed(() => !!accessToken.value);
    const currentUser = ref<User | null>(null);


    function setAccessToken(newToken: string): void {
        accessToken.value = newToken;
        localStorage.setItem(ACCESS_TOKEN_KEY, newToken);
    }

    function removeAccessToken(): void {
        accessToken.value = null;
        localStorage.removeItem(ACCESS_TOKEN_KEY);
    }

    function setRefreshToken(newRefreshToken: string): void {
        refreshToken.value = newRefreshToken;
        localStorage.setItem(REFRESH_TOKEN_KEY, newRefreshToken);
    }

    function removeRefreshToken(): void {
        refreshToken.value = null;
        localStorage.removeItem(REFRESH_TOKEN_KEY);
    }

    function removeToken(): void {
        removeAccessToken();
        removeRefreshToken();
    }

    async function getUser() {
        try {
            let response = await getMe(accessToken.value!);

            if (response.status === 401) {
                const refreshData = await refreshTokenRequest(refreshToken.value!);

                const newAccessToken = refreshData.data.accessToken;
                setAccessToken(newAccessToken);

                response = await getMe(newAccessToken);
            }

            const data = await response.json();
            currentUser.value = data.data.user;

        } catch (e) {
            removeToken();
            console.error('Fetch user failed', e);
        }
    }

    const handleLogin = async (form: { email: string; password: string }) => {
        try {
            const data = await login(form);

            setAccessToken(data.data.accessToken);
            setRefreshToken(data.data.refreshToken);

        } catch (e) {
            console.error('Login error', e);
        }
    };

    const handleRegister = async (form: { email: string; password: string }) => {
        try {
            const data = await register(form);

            setAccessToken(data.data.accessToken);
            setRefreshToken(data.data.refreshToken);

        } catch (e) {
            console.error('Register error', e);
        }
    };

    const handleLogout = async () => {
        try {
            if (accessToken.value) {
                await logout(accessToken.value);
            }
        } catch (e) {
            console.warn('Logout API failed, continue logout');
        }

        removeToken();
    };

    return {
        accessToken,
        refreshToken,
        isAuthenticated,
        currentUser,
        getUser,
        setAccessToken,
        removeToken,
        handleLogin,
        handleRegister,
        handleLogout
    }
});