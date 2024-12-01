import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import SearchForm from '../components/SearchForm';

export default function HomePage() {
    return (
        <>
            <Header />
            <SubHeader />
            <SearchForm value='Search'/>
        </>
    )
}
