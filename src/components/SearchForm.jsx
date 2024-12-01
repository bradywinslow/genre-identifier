import { useNavigate } from "react-router";
import { useState } from 'react';

export default function SearchForm({ value }) {
    let navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    function handleInputChange(event) {
        setSearchTerm(event.target.value);
    }

    function handleSearch(event) {
        event.preventDefault();
        if (searchTerm) {
            navigate('/results');
        }
    }

    return (
        <form onSubmit={handleSearch}>
            <input
                type='search'
                id='artist'
                name='artist'
                value={searchTerm}
                onChange={handleInputChange}
            />
            <input
                type='submit'
                id='submit'
                name='submit'
                value={value}
            />
        </form>
    )
}
