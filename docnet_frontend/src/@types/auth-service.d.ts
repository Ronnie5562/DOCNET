export interface AuthServiceProps {
    login: (username: string, password: string) => any;
    isLoggedIn: boolean;
    logout: () => void;
    refreshAccessToken: () => Promise<void>
    register: (username: string, password: string) => Promise<any>;
}