export default class DataProvider{
    constructor(api_token){
        this._apiBase = 'http://185.231.245.253/api';
    }
    

    async getResource(url, method = 'GET', token = false , body = false){
        
        const headers = new Headers();
        headers.append('Accept','application/json');
        if (token) headers.append('Token', token);
        
        const init = {
            credentials: 'same-origin',
            headers: headers,
            //mode: 'no-cors'
        }
        const requestData = new FormData()
        if (body) {
            Object.entries(body).map((el) => {
                requestData.append(el[0],el[1]);
                return el;
            });
        }
        if (method === 'PUT') requestData.append('_method','PUT');
        if (method !== 'GET') init.body = requestData;
        init.method = method === 'PUT' ? 'POST' : method;
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
    async logout(api_token){
        const result = await this.getResource('/logout', 'POST', api_token);
        return result;
    }
    async getDashboard(api_token){
        const result = await this.getResource('/hero', 'GET', api_token);
        console.log(result);
        return result;
    }
    async getGang(id, api_token){
        const result = await this.getResource('/gang/'+id, 'GET', api_token);
        console.log(result);
        return result;
    }
    async getHero(id, api_token){
        const result = await this.getResource('/hero/'+id, 'GET', api_token);
        console.log(result);
        return result;
    }
    async invite(id, api_token){
        const result = await this.getResource('/gang/'+id+'/invite', 'GET', api_token);
        console.log(result);
        return result;
    }
    async join(params, api_token){
        const result = await this.getResource('/gang/join', 'POST', api_token, params);
        console.log(result);
        return result;
    }
    async deleteQuest(id, api_token){
        const result = await this.getResource('/quest/'+id+'/delete', 'PUT', api_token);
        console.log(result);
        return result;
    }
    async progressQuest(id, api_token){
        const result = await this.getResource('/quest/'+id+'/progress', 'PUT', api_token);
        console.log(result);
        return result;
    }
    async pendingQuest(id, api_token){
        const result = await this.getResource('/quest/'+id+'/pending', 'PUT', api_token);
        console.log(result);
        return result;
    }
    async completeQuest(id, api_token){
        const result = await this.getResource('/quest/'+id+'/complete', 'PUT', api_token);
        console.log(result);
        return result;
    }
    async declineQuest(id, api_token){
        const result = await this.getResource('/quest/'+id+'/decline', 'PUT', api_token);
        console.log(result);
        return result;
    }
    async reopenQuest(id, api_token){
        const result = await this.getResource('/quest/'+id+'/reopen', 'PUT', api_token);
        console.log(result);
        return result;
    }
    async editHero (params, api_token){
        const result = await this.getResource('/hero', 'PUT', api_token, params);
        console.log(result);
        return result;
    }
    async editGang (id, params, api_token){
        const result = await this.getResource('/gang/'+id, 'PUT', api_token, params);
        console.log(result);
        return result;
    }
    async editQuest (id, params, api_token){
        const result = await this.getResource('/quest/'+id, 'PUT', api_token, params);
        console.log(result);
        return result;
    }
    async info (api_token){
        const result = await this.getResource('/info', 'GET', api_token);
        console.log(result);
        return result;
    }
    
}