import { useAuthStore } from '@/stores/authStore.ts';
import { login, register, logout } from '@/api/authApi';
import { useRouter } from 'vue-router';

export function useAuth() {
    const authStore = useAuthStore();
    const router = useRouter();

    const handleLogin = async (form: { email: string; password: string }) => {
        try {
            const data = await login(form);

            authStore.setAccessToken(data.data.accessToken);
            authStore.setRefreshToken(data.data.refreshToken);

            await router.push('/');

        } catch (e) {
            console.error('Login error', e);
        }
    };

    const handleRegister = async (form: { email: string; password: string }) => {
        try {
            const data = await register(form);

            authStore.setAccessToken(data.data.accessToken);
            authStore.setRefreshToken(data.data.refreshToken);

            await router.push('/');

        } catch (e) {
            console.error('Register error', e);
        }
    };

    const handleLogout = async () => {
        try {
            if (authStore.accessToken) {
                await logout(authStore.accessToken);
            }
        } catch (e) {
            console.warn('Logout API failed, continue logout');
        }

        authStore.logout();
        await router.push('/login');
    };

    return {
        handleLogin,
        handleRegister,
        handleLogout
    };
}