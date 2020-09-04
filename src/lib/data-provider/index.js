import * as mockData from './mock-data';
export default class DataProvider{
    constructor(api_token){
        this._apiBase = 'http://homequest';
    }
    

    async getResource(url, method = 'GET', token = false , body = false){
        
        const headers = new Headers();
        headers.append('Accept','application/json');

        if (token) headers.append('Token', token);
        const init = {
            method: method,
            credentials: 'include',
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
    async login(login, password){
        const credentials = {
            login: login,
            password: password
        }
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

export class DataProviderMock{
    constructor(){
        this.api_token = '033946a3c0efc166c3fd900fe328aa78'
    }
    async createPromise(resolved, rejected = {}){
        return new Promise((resolve, reject) => {
            console.log(resolved);
            resolve(resolved);
            reject(rejected);
        });
    }
    async login(login, pass){
        let response = {};
        response = (login === 'bob' && pass === '777') ? mockData.authorized : mockData.notAuthorized;
        return this.createPromise(response);
    }
    async getDashboard(api_token){
        let response = {};
        response = (this.api_token === api_token) ? mockData.dashboard : mockData.notAuthorized;
        return this.createPromise(response);
    }
}