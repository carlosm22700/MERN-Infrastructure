export default async function sendRequest (url, method = 'GET', payload = null) {
    //fetch accepts an options obj as the 2nd argument
    //used to include a data payload, set headers, etc..
    const options = { method };
    if (payload){
        options.header = {'Content-Type': 'application/json'};
        options.body = JSON.stringify(payload);
    }
    const res = await fetch(url, options)
    //res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) return res.json();
    throw new Error('Bad Request');
}