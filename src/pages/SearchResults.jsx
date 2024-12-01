import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Input from '../components/Input';
import Button from '../components/Button';

export default function SearchResults() {
    return (
        <>
            <Header />
            <SubHeader />
            <Input />
            <Button value='Search Again'/>
            <p>Results: </p>
        </>
    )
}
