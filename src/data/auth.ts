 
export interface User {
    id: number;
    username: string;
    email: string;
    role: 'admin' | 'user' | 'manager';
    token: string;
}

export const users: User[] = [
    {
        id: 1,
        username: 'adminUser',
        email: 'admin@example.com',
        role: 'admin',
        token: 'admin-token-123'
    },
    {
        id: 2,
        username: 'managerUser',
        email: 'manager@example.com',
        role: 'manager',
        token: 'manager-token-456'
    },
    {
        id: 3,
        username: 'regularUser',
        email: 'user@example.com',
        role: 'user',
        token: 'user-token-789'
    }
];