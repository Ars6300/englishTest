export interface User {
    token: string | null;
    user: {
        email: string | null;
        firstName: string | null;
        id: string | null;
        lastName: string | null;
        role: string | null;
    }
}