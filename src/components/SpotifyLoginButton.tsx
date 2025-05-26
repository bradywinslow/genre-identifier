import { useEffect, useState } from 'react';
import { handlePkceLogin, exchangeAuthCodeForToken } from '../spotify/spotifypkceAuthorization';

export default function SpotifyLoginButton() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(true);

    useEffect(() => {
        const handleLogin = async () => {
            // Redirect user back to the specified redirect_uri after login
            const urlParams = new URLSearchParams(window.location.search);
            let code = urlParams.get('code');

            // Exchange authorization code for an access token
            if (code) {
                await exchangeAuthCodeForToken(code);
                window.history.replaceState({}, document.title, '/');
            };

            let accessToken = localStorage.getItem('access_token');
            let refreshToken = localStorage.getItem('refresh_token');
            
            if (accessToken && refreshToken) {
                setIsLoggedIn(true);
                localStorage.setItem('isLoggedIn', 'true');
            }
            setIsAuthenticating(false);
        }

        handleLogin();
    }, []);

    if (isAuthenticating) {
        return null;
    }
    
    return (
        <>
            {!isLoggedIn && 
                <a>
                    <button
                        onClick={handlePkceLogin}
                    >
                        Login to Spotify to Search
                    </button>
                </a>}
        </>
    )
}
