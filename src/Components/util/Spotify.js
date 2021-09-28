export const Spotify = {
  _accessToken: null,
  _expiresIn: null,
  _userId: null,

  getAccessToken(){
    if (this._accessToken){
      return this._accessToken;
    } else if (window.location.href.match(/access_token=([^&]*)/)){
      this._accessToken = window.location.href.match(/access_token=([^&]*)/)[1];
      this._expiresIn = window.location.href.match(/expires_in=([^&]*)/)[1];
      window.setTimeout(() => this._accessToken = '', this._expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return this._accessToken;

    } else {
      const clientID = "f7827d17dafd4d18aee166e694d61941";
      const spotifyAuthorizeEndpoint = 'https://accounts.spotify.com/authorize'
      let redirectURLAfterLogin = window.location.href.replaceAll('/', '%2F');
      redirectURLAfterLogin = redirectURLAfterLogin.replaceAll('-', '%2D');
  
      const scopes = ['playlist-modify-public']
      const spaceDelimiter = "%20"
      const scopesURLParam = scopes.join(spaceDelimiter)

      window.location = `${spotifyAuthorizeEndpoint}?client_id=${clientID}&redirect_uri=${redirectURLAfterLogin}&scope=${scopesURLParam}&response_type=token&show_dialogue=true`;
    }
  },

  async search (term) {
    try {
      const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        headers: {Authorization: `Bearer ${this.getAccessToken()}`}
      });

      if (!response.ok) throw new Error("Request failed.");

      const json = await response.json();

      if (!json) return [];

      const unmappedSearchResults = await json.tracks.items;

      const searchResults = await unmappedSearchResults.map(track => {
        return {
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
      }})

      return searchResults;
    
    } catch(e){
      console.log(e)
    }

  },

  async savePlaylist(name, uriArr) {
    if (!name || !uriArr) return;
    let headersObj = {Authorization: `Bearer ${this.getAccessToken()}`}

    try {
      const response = await fetch('https://api.spotify.com/v1/me', {
        headers: headersObj
      })

      if (!response.ok) throw new Error('User ID request failed.');

      const json = await response.json();
      this._userId = json.id;

      const createPlaylistResponse = await fetch(`https://api.spotify.com/v1/users/${this._userId}/playlists`, {
        method: 'POST',
        headers: headersObj, 
        body: JSON.stringify({name: name})
      })

      if (!createPlaylistResponse.ok) throw new Error('Playlist creation request failed.');

      const playlistJson = await createPlaylistResponse.json();
      const playlistId = await playlistJson.id;

      await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        method: 'POST',
        headers: headersObj, 
        body: JSON.stringify({uris: uriArr})
      })

      
      
    } catch (e){
      console.log(e)
    } 

  },

}

