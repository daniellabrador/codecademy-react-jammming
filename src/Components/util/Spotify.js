export const Spotify = {
  _accessToken: null,
  _expiresIn: null,
  getAccessToken: ()=>{
    if (this._userToken){
      return this._userToken;
    } else if (window.location.href.match(/access_token=([^&]*)/)){
      this._accessToken = window.location.href.match(/access_token=([^&]*)/)[1];
      this._expiresIn = window.location.href.match(/expires_in=([^&]*)/)[1];
      window.setTimeout(() => this._accessToken = '', this._expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    } else {
      const clientID = "f7827d17dafd4d18aee166e694d61941";
      const spotifyAuthorizeEndpoint = 'https://accounts.spotify.com/authorize'
      const redirectURLAfterLogin = window.location.href//.replaceAll('/', '%2F');
  
      const scopes = ['playlist-modify-public']
      const spaceDelimiter = "%20"
      const scopesURLParam = scopes.join(spaceDelimiter)

      window.location = `${spotifyAuthorizeEndpoint}?client_id=${clientID}&redirect_uri=${redirectURLAfterLogin}&scope=${scopesURLParam}&response_type=token&show_dialogue=true`;
    }
  }
}

// https://accounts.spotify.com/authorize?client_id=5fe01282e94241328a84e7c5cc169164&redirect_uri=http:%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123

// http://localhost:3000/#access_token=BQB1cSyZ0kIFIhU36VByy3EGFDLI8TcEJ3awaUMn8wl4bRt9-mZUQmqYeDwBk7NQYjVIFLCyv2-DrmThOXnrDUjLA_brr3b0l8YkgjM5uu_0cXNuY8dFRPSIUNZgLFCmp0NPIOgJR-ZI9g6J3GvGLO5bzMoBpychKtsCz_FLaB2BWpHkWJHnUIBh4eEz118&token_type=Bearer&expires_in=3600

