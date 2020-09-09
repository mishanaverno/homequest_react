export default class DataProvider{
    constructor(api_token){
        this._apiBase = 'http://185.231.245.253';
    }
    

    async getResource(url, method = 'GET', token = false , body = false){
        
        const headers = new Headers();
        headers.append('Accept','application/json');
        if (token) headers.append('Token', token);
        const init = {
            method: method,
            credentials: 'same-origin',
            headers: headers,
            //mode: 'no-cors'
        }
        
        if (body) {
            
            const requestData = new FormData();
            Object.entries(body).map((el) => {
                requestData.append(el[0],el[1]);
            });
            init.body = requestData;
        }
        const request = new Request(this._apiBase+url, init);
        const response = await fetch(request);
        return await response.clone().json();
    }
    async createHero(params){
        const result = await this.getResource('/hero', 'POST', false, params);
        return result;
    }
    async createGang(params, api_token){
        const result = await this.getResource('/gang', 'POST', api_token, params);
        return result;
    }
    async createQuest(params, api_token){
        const result = await this.getResource('/quest', 'POST', api_token, params);
        return result;
    }
    async login(credentials){
        const result = await this.getResource('/login', 'POST', false, credentials);
        return result;
    }
    async getDashboard(api_token){
        console.log(api_token)
        const result = await this.getResource('/hero', 'GET', api_token);
        console.log(result);
        return result;
    }
    
}