import { useAuthStore } from '@/stores/authStore.ts';
import { getMe } from '@/api/userApi';
import { refreshTokenRequest } from '@/api/authApi';
import { ref } from "vue";
import type { User } from "@/types/types";

export function useUser() {
    const authStore = useAuthStore();

    const currentUser = ref<User | null>(null);

    const fetchUser = async () => {
        try {
            let response = await getMe(authStore.accessToken!);

            if (response.status === 401) {
                const refreshData = await refreshTokenRequest(authStore.refreshToken!);

                authStore.setAccessToken(refreshData.data.accessToken);

                response = await getMe(authStore.accessToken!);
            }

            const data = await response.json();
            currentUser.value = data.data.user;

        } catch (e) {
            console.error('Fetch user failed', e);
            authStore.logout();
        }
    };

    return {
        currentUser,
        fetchUser
    };
}