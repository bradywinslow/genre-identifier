import Header from '../components/Header';
import SpotifySearchForm from '../components/SpotifySearchForm';
import SpotifySearchResults from '../components/SpotifySearchResults';

export default function ResultsPage() {
    return (
        <div className='mx-auto w-120 p-6'>
            <Header />
            <SpotifySearchForm className='flex flex-col'/>
            <SpotifySearchResults/>
        </div>
    )
}
