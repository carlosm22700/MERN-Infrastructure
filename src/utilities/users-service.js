import * as userAPI from './users-api';

export async function signUp (userData) {
// Delegate the network request code to the users-api.js API module
//which will ultimately return a JSOn Web Token
const token = await userAPI.signUp(userData)
//TODO: more user service related tasks to be handled here later
return token;
} 