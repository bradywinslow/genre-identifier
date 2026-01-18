// Spotify Autohrization Code with PKCE Flow documentation: https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow

import { generateRandomString, sha256, base64encode } from '../utils/loginUtils';

// Spotify application details
const clientId = '78c0de151a834520bebb7c0b1509b3d7';
const getRedirectUri = () => {
    const origin = window.location.origin;
    /* if (origin.includes('5173')) {
        return 'http://127.0.0.1:5173';
    } */
    return origin;
};
const redirectUri = getRedirectUri();

const scope = 'playlist-modify-private playlist-modify-public user-read-private user-read-email';
const authUrl = new URL('https://accounts.spotify.com/authorize');

const handlePkceLogin = async () => {
  // Create code verifier and store in local storage
  const codeVerifier = generateRandomString(64);
  window.localStorage.setItem('code_verifier', codeVerifier);

  // Generate code challenge
  const hashed = await sha256(codeVerifier)
  const codeChallenge = base64encode(hashed);

  // Request user authorization
  const params =  {
    response_type: 'code',
    client_id: clientId,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  };
  
  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();
};

// Function to exchange authorization code for an access token
const exchangeAuthCodeForToken = async (code: string) => {

  const codeVerifier = localStorage.getItem('code_verifier');

  const url = "https://accounts.spotify.com/api/token";
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier ?? '',
    }),
  }

  try {
    const body = await fetch(url, payload);
    const response = await body.json();
    return response;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return null;
  }
};

// Function to get refresh token
const refreshAccessToken = async (refreshToken: string) => {
    // refresh token that has been previously stored
    const token = refreshToken;
    const url = "https://accounts.spotify.com/api/token";
 
     const payload = {
       method: 'POST',
       headers: {
         'Content-Type': 'application/x-www-form-urlencoded'
       },
       body: new URLSearchParams({
         grant_type: 'refresh_token',
         refresh_token: token ?? '',
         client_id: clientId
       }),
     }

    try {
      const body = await fetch(url, payload);
      const response = await body.json();
      return response;
    } catch (error) {
      console.error('Error fetching data: ', error);
      return null;
    }
};

export { handlePkceLogin, exchangeAuthCodeForToken, refreshAccessToken };
