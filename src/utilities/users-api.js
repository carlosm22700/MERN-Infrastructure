//makes calls to backend for any user specific information
//anytime we need to access user info from database, functionality will go in this file

// This is the base path of the Express route we'll define
import sendRequest from "./send-request";
const BASE_URL = '/api/users';

export function signUp(userData) {
    // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    // Check if request was successful
    // res.json() will resolve to the JWT (JSON Web Token)
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}

export function checkToken(credentials) {
  return sendRequest(`${BASE_URL}/check-token`)
}