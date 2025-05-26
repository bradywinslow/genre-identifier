import { useNavigate } from "react-router";
import { useState } from 'react';
import { getSpotifyData } from '../spotify/spotifyHttpRequests';

export default function SearchForm() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleInputChange = (event: any) => {
        setSearchTerm(event.target.value);
    }

    const handleSearch = async (searchTerm: string) => {
        const results = await getSpotifyData(searchTerm);
        return results;
    }

    const handleSubmission = async (event: any) => {
        event.preventDefault();
        if (searchTerm) {
            const data = await handleSearch(searchTerm);
            if (data) {
                navigate('/results', {
                    state: {
                        spotifySearchResults: data,
                        searchTerm
                    }
                });
                setSearchTerm('');
                console.log(data);
            } else {
                console.error('No data returned from API.');
            }
        }
    }

    return (
        <form onSubmit={handleSubmission}>
            <input
                type='search'
                id='artist'
                name='artist'
                placeholder='Search an artist to discover their genre(s)'
                value={searchTerm}
                onChange={handleInputChange}
            />
            <input
                type='submit'
                id='submit'
                name='submit'
                value='Search'
            />
        </form>
    )
}
