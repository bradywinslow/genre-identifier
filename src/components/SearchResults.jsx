import { useLocation } from 'react-router';

export default function SearchResults() {
    const location = useLocation();

    const { searchResults } = location.state || {};
    
    const artist = searchResults.artists[0];

    return (
        <div>
            {searchResults ? (
                <div>
                    <h2>{artist.name}</h2>
                    <h3>Genres:</h3>
                    <div>
                        {artist.tags.map((tag, index) => (
                            <span key={index}>
                                {tag.name}<br></br>
                            </span>
                        ))}
                    </div>
                </div>
            ) : (
                <p>No results found</p>
            )}
        </div>
    )
}
