import { useLocation } from 'react-router';

export default function SearchResults() {
    const location = useLocation();

    const { spotifySearchResults } = location.state || {};
    
    const artistInfo = spotifySearchResults.artists.items[0];

    return (
        <div>
            {artistInfo && (
                <div className='max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-[#232323] mx-auto'>
                    <div className='aspect-w-4 aspect-h-3'>
                        <img className='object-cover w-full h-full' src={artistInfo.images[1].url} alt='Artist photo'></img>
                    </div>
                    <div className='p-6 space-y-2'>
                        <h2 className='text-2xl font-bold dark:text-white opacity-87'>{artistInfo.name}</h2>
                        <h3 className='text-lg dark:text-white opacity-60'>Genre(s):</h3>
                            <ul className='mt-4 list-disc list-inside dark:text-white opacity-60 space-y-1'>
                                {artistInfo.genres ? (
                                    artistInfo.genres.map((genre: string, index: number) => (
                                        <li key={index}>
                                            {genre}<br></br>
                                        </li>
                                    ))
                                ) : (
                                    <li>No results found</li>
                                )}
                            </ul>
                    </div>
                </div>
            )}
        </div>
    )
}
