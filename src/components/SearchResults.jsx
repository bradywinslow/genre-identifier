import { useLocation } from 'react-router';

export default function SearchResults() {
    const location = useLocation();

    const { searchResults } = location.state || {};
    
    const artist = searchResults.artists[0];
    const count = searchResults.count;

    return (
        <div>
            {artist && count > 0 && (
                <div>
                    <h2>{artist.name}</h2>
                    <div>
                        <h3>Genres:</h3>
                        {artist.tags ? (
                            artist.tags.map((tag, index) => (
                                <span key={index}>
                                    {tag.name}<br></br>
                                </span>
                            ))
                        ) : (
                            <p>no associated genres</p>
                        )}
                    </div>
                </div>
            )}

            {count === 0 && artist.length === 0 && (
                <div>
                    <h4>No results found</h4>
                </div>
            )}
        </div>
    )
}
