//makes calls to backend for any user specific information
//anytime we need to access user info from database, functionality will go in this file

// This is the base path of the Express route we'll define
const BASE_URL = '/api/users';

export async function signUp(userData) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    // Fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    body: JSON.stringify(userData)
  });
  // Check if request was successful
  if (res.ok) {
    // res.json() will resolve to the JWT (JSON Web Token)
    return res.json();
  } else {
    throw new Error('Invalid Sign Up');
  }
}
