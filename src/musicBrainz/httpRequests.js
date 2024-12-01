async function getData(searchQuery) {
    const url = `http://musicbrainz.org/ws/2/release/?query=artist:${searchQuery}&inc=genres&fmt=json`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
}

export { getData };
