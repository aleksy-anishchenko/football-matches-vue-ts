const API_URL = 'http://localhost:3000';

export async function login(data: { email: string; password: string }) {
    const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    return response.json();
}

export async function register(data: { email: string; password: string }) {
    const response = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error('Register failed');
    }

    return response.json();
}

export async function refreshTokenRequest(refreshToken: string) {
    const response = await fetch(`${API_URL}/api/auth/refresh`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ refreshToken })
    });

    if (!response.ok) {
        throw new Error('Refresh failed');
    }

    return response.json();
}

export async function logout(accessToken: string) {
    const response = await fetch(`${API_URL}/api/auth/logout`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    if (!response.ok) {
        throw new Error('Logout failed');
    }

    return response.json();
}