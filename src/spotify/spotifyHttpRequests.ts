import { refreshAccessToken } from '../spotify/spotifypkceAuthorization';

// Check whether access token has or is about to expire; if so, refresh it
const maybeRefreshAccessToken = async () => {
    const expirationTimeStr = localStorage.getItem('expiration_time');
    const now = new Date().getTime() / 1000; // current time in seconds

    const expirationTime = expirationTimeStr ? Number(expirationTimeStr) : null;

    if (expirationTime && now >= expirationTime - 300) {
        console.log('Access token expired or about to expire, refreshing...');
        await refreshAccessToken();
    }
};

const getSpotifyData = async (searchTerm: string) => {
    let accessToken = localStorage.getItem('access_token');
    const TRACKLIST_ENDPOINT = 'https://api.spotify.com/v1/search';
    const urlToFetch = `${TRACKLIST_ENDPOINT}?q=${encodeURIComponent(searchTerm)}&type=artist`;

    try {
        // Check for token expiration before making the API call
        await maybeRefreshAccessToken();
      
        const response = await fetch(urlToFetch, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        });
      
        if (response.ok) {
            const data = await response.json();
            const searchData = data;
            return searchData;
        } else {
            console.error('Search request failed.');
            return null;
        }
    } catch(error) {
        console.error('Error during API call: ', error);
    }
};

export { getSpotifyData };
