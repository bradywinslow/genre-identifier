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
                <div onClick={handlePkceLogin}>
                    {!isLoggedIn && 
                        <button className='w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-semibold bg-[#1DB954] text-black hover:bg-[#1ed760] active:bg-[#1aa34a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1DB954] text-center mt-6'>
                            <img src='src/assets/spotify-icon.svg' alt='Spotify' className='w-5 h-5' />
                            Continue with Spotify to Search
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}
