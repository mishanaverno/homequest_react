export default class DataProvider{
    constructor(api_token){
        this._apiBase = 'http://homequest';
    }
    

    async getResource(url, method = 'GET', token = false , body = false){

        
        const headers = new Headers();
        headers.append('Accept','application/json');
        if (token) headers.append('Cookie', 'api_key= '+token);
        const init = {
            method: method,
            credentials: 'include',
            headers: headers,
            //mode: 'no-corse'
        }
        
        if (body) init.body = body;
        const request = new Request(this._apiBase+url, init);
        const response = await fetch(request);
        return await response.clone().json();
    }
}