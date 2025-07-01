import { useNavigate } from "react-router";
import { useState } from 'react';
import { getSpotifyData } from '../spotify/spotifyHttpRequests';
import { useAuth } from '../context/AuthContext';

type SearchFormProps = {
    className?: string;
};

export default function SearchForm({ className }: SearchFormProps) {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const { refreshToken, accessToken } = useAuth();
    
    const handleInputChange = (event: any) => {
        setSearchTerm(event.target.value);
    }

    const handleSearch = async (searchTerm: string) => {
        if (accessToken === null || refreshToken === null) {
            return;
        }
        const results = await getSpotifyData(searchTerm, refreshToken, accessToken);
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
        <form className={className} onSubmit={handleSubmission}>
            <div className='w-full mx-auto flex flex-col gap-3 mb-6 mt-6 px-6'>
                <input
                    className='px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 dark:text-white'
                    type='search'
                    id='artist'
                    name='artist'
                    placeholder='Enter an artist to search'
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button
                    type='submit'
                    className='px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition'
                >
                    Search
                </button>
            </div>
        </form>
    )
}
