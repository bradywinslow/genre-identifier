import Header from '../components/Header';
import SpotifySearchForm from '../components/SpotifySearchForm';
import SpotifyLoginButton from '../components/SpotifyLoginButton';
import { useAuth } from '../context/AuthContext';

export default function HomePage() {
    const { isAuthenticated } = useAuth();
    
    return (
        <div className='mx-auto w-120 p-6'>
            <Header />
            {isAuthenticated ? (
                <SpotifySearchForm className='flex flex-col' />
            ) : (            
                <SpotifyLoginButton />
            )}
        </div>
    )
}
