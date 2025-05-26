import Header from '../components/Header';
import SpotifySearchForm from '../components/SpotifySearchForm';
import SpotifyLoginButton from '../components/SpotifyLoginButton';

export default function HomePage() {
    let isAuthenticated = localStorage.getItem('isLoggedIn');
    
    return (
        <>
            <Header />
            {isAuthenticated ? (
                <SpotifySearchForm />
            ) : (
                <SpotifyLoginButton />
            )}
        </>
    )
}
