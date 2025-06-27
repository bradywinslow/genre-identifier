export interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: ((value: boolean) => void);
    accessToken: string | null;
    setAccessToken: ((value: string) => void);
    refreshToken: string | null;
    setRefreshToken: ((value: string) => void);    
    expiresIn: string | null;
    setExpiresIn: ((value: string) => void);
    codeVerifier: string;
    setCodeVerifier: ((value: string) => void);
}
