import { useLocation } from 'react-router';

type SearchResultsProps = {
    className?: string;
};

export default function SearchResults({ className }: SearchResultsProps) {
    const location = useLocation();

    const { spotifySearchResults } = location.state || {};
    const { searchTerm } = location.state || {};
    
    const artistInfo = spotifySearchResults.artists.items[0];

    return (
        <div className={className}>
            {artistInfo && (
                <div className='max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white mb-6'>
                    <div className='aspect-w-4 aspect-h-3'>
                        <img className='object-cover w-full h-full' src={artistInfo.images[1].url} alt='Artist photo'></img>
                    </div>
                    <div className='p-6 space-y-2'>
                        <h2 className='text-2xl font-bold text-gray-800'>{artistInfo.name}</h2>
                        <h3 className='text-lg text-gray-600'>Genre(s):</h3>
                            <ul className='mt-4 list-disc list-inside text-gray-700 space-y-1'>
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
