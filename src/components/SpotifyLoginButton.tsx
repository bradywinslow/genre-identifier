import { handlePkceLogin } from '../spotify/spotifypkceAuthorization';
import { useAuth } from '../context/AuthContext';

type SpotifyLoginButtonProps = {
    className?: string;
};

export default function SpotifyLoginButton({ className }: SpotifyLoginButtonProps) {
    const { isAuthenticated } = useAuth();

    return (
        <div className={className}>
            <div className='w-81 mx-auto'>
                <div onClick={handlePkceLogin}>
                    {!isAuthenticated && 
                        <button className='w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-semibold bg-[#1DB954] text-black hover:bg-[#1ed760] active:bg-[#1aa34a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1DB954] text-center mt-6'>
                            <img src='/spotify-icon.svg' alt='Spotify' className='w-5 h-5' />
                            Continue with Spotify
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}
