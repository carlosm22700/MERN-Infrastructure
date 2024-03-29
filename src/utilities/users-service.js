import * as usersAPI from './users-api';

export function logOut() {
    localStorage.removeItem('token');
}

export async function signUp (userData) {
// Delegate the network request code to the users-api.js API module
//which will ultimately return a JSOn Web Token
const token = await usersAPI.signUp(userData);
localStorage.setItem('token', token);
//TODO: more user service related tasks to be handled here later
return getUser();
};

export async function login(credentials) {
    const token = await usersAPI.login(credentials);
    localStorage.setItem('token', token);
    return getUser();
}

export function getToken() {
    //attempt to get the token from localstorage
    const token = localStorage.getItem('token');
    if(!token) return null;
    //if token is retrieved
        // decode payload from token so we can check if it's still valid
    const payload = JSON.parse(atob(token.split('.')[1]));
        //check if expired
    if(payload.exp < Date.now() / 1000) {
        //remove the token from localstorage
        localStorage.removeItem('token')
        return null;
    }
    // if still valid, we return the token.
    return token;
};

export function getUser() {
    const token = getToken();
    //if there's a token, return the user in the payload, oterwise return null
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
};

export function checkToken() {
  // Just so that you don't forget how to use.then
  return (
    usersAPI.checkToken()
      // checkToken returns a string, but let's
      // make it a Date object for more flexibility
      .then((dateStr) => new Date(dateStr))
  );
}