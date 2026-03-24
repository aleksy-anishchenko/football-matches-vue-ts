import { defineStore } from "pinia";
import { ref, computed } from "vue";

const ACCESS_TOKEN_KEY = 'football-matches-access-token';
const REFRESH_TOKEN_KEY = 'football-matches-refresh-token';

export const useAuthStore = defineStore('authStore', () => {
    const accessToken = ref<string | null>(localStorage.getItem(ACCESS_TOKEN_KEY))
    const refreshToken = ref<string | null>(localStorage.getItem(REFRESH_TOKEN_KEY))

    const isAuthenticated = computed(() => !!accessToken.value);

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

    function logout(): void {
        removeAccessToken();
        removeRefreshToken();
    }

    return {
        accessToken,
        refreshToken,
        isAuthenticated,
        setAccessToken,
        removeAccessToken,
        setRefreshToken,
        removeRefreshToken,
        logout
    }
});