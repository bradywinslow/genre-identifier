import { useEffect, useState } from 'react';
import { handlePkceLogin, exchangeAuthCodeForToken } from '../spotify/spotifypkceAuthorization';

type SpotifyLoginButtonProps = {
    className?: string;
};

export default function SpotifyLoginButton({ className }: SpotifyLoginButtonProps) {
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
        <div className={className}>
            <div className='w-81 mx-auto'>
                <div className='w-full px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition text-center mt-6'>
                    {!isLoggedIn && 
                        <a>
                            <button
                                onClick={handlePkceLogin}
                            >
                                Login to Spotify to Search
                            </button>
                        </a>
                    }
                </div>
            </div>
        </div>
    )
}
