import Header from '../components/Header';
import MusicBrainzSearchForm from '../components/MusicBrainzSearchForm';
import MusicBrainzSearchResults from '../components/MusicBrainzSearchResults';

export default function ResultsPage() {
    return (
        <>
            <Header />
            <MusicBrainzSearchForm />
            <MusicBrainzSearchResults />
        </>
    )
}
