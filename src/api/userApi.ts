const API_URL = 'http://localhost:3000';

export async function getMe(accessToken: string) {
    return fetch(`${API_URL}/api/auth/me`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
}

export async function profile(data: { email: string; password: string }, accessToken: string) {
    const response = await fetch(`${API_URL}/api/auth/profile`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error('Profile failed');
    }

    return response.json();
}