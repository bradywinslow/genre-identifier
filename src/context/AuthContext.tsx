import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthContextType } from '../context/AuthContext.types';
import { exchangeAuthCodeForToken } from '../spotify/spotifypkceAuthorization';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [isLoggingIn, setIsLoggingIn] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [refreshToken, setRefreshToken] = useState<string | null>(null);
    const [expiresIn, setExpiresIn] = useState<string | null>(null);
    const [codeVerifier, setCodeVerifier] = useState<string>('');

    useEffect(() => {
        const handleLogin = async () => {
            // Redirect user back to the specified redirect_uri after login
            const urlParams = new URLSearchParams(window.location.search);
            let code = urlParams.get('code');

            // Exchange authorization code for an access token
            if (code) {
                const codeToExchange = code;
                window.history.replaceState({}, document.title, '/');
                const data = await exchangeAuthCodeForToken(codeToExchange);
                setAccessToken(data.access_token);
                setRefreshToken(data.refresh_token);
                setExpiresIn(data.expires_in);
                setIsAuthenticated(true);
            };
            setIsLoggingIn(false);
        }
        handleLogin();
    }, [accessToken, refreshToken, expiresIn]);

    if (isLoggingIn) {
        return null;
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
                accessToken,
                setAccessToken,
                refreshToken,
                setRefreshToken,
                expiresIn,
                setExpiresIn,
                codeVerifier,
                setCodeVerifier
            }}>
            {children}
        </AuthContext.Provider>
    )
};
