const getMusicBrainzData = async (searchTerm: string) => {
    const urlToFetch = `http://musicbrainz.org/ws/2/artist/?query=${searchTerm}&inc=genres&fmt=json`;
    try {
      const response = await fetch(urlToFetch);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
      return null;
    }
}

export { getMusicBrainzData };
