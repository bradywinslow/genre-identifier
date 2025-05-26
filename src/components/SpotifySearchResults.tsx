import { useLocation } from 'react-router';

export default function SearchResults() {
    const location = useLocation();

    const { spotifySearchResults } = location.state || {};
    const { searchTerm } = location.state || {};
    
    const artistInfo = spotifySearchResults.artists.items[0];

    return (
        <div>
            {artistInfo && (
                <div>
                    <h2>{searchTerm}</h2>
                    <div>
                        <h3>Genre(s):</h3>
                            <ul>
                                {artistInfo.genres ? (
                                    artistInfo.genres.map((genre: string, index: number) => (
                                        <li key={index}>
                                            {genre}<br></br>
                                        </li>
                                    ))
                                ) : (
                                    <p>No associated genres</p>
                                )}
                            </ul>
                    </div>
                </div>
            )}

            { /* Show if no genres listed for artist */}
            {artistInfo.name === searchTerm && artistInfo.genres.length === 0 && (
                <div>
                    <p>No genres listed</p>
                </div>
            )}
        </div>
    )
}
