import React from 'react';
import Dashboard from '../dashboard';
import Login from '../login';
import DataProvider from '../../lib/data-provider'

export default class App extends React.Component 
{
    constructor(){
        super();
        this.state = {
            loaded: false,
            authorized: true
        }
        this.getData();
    }

    _notAuthorized(){
        this.setState({
            authorized: false
        });
    }
    login = (login, password) => {
        const credentials = new FormData();
        credentials.append('login', login);
        credentials.append('password', password);

        const provider = new DataProvider();

        provider.getResource('/login','POST', false, credentials).then((body)=>{
            console.log(body);
            if (body.code = 200){
                this.setState({
                    api_token: body.data,
                    authorized: true
                })
            }
            this.getData();
        }).catch((e)=>{
            console.log(e)
        });
    }

    getData = () => {
        const provider = new DataProvider();
        const { api_token = false } = this.state;
        console.log(api_token);
        provider.getResource('/hero', 'GET', api_token).then((body)=>{
            switch(body.code){
                case 403: 
                this._notAuthorized();
                break;
                case 200:
                this.setState({
                    ...body.data
                })
            }
            console.log(body);
        })
    }
    render() {
        
        const {
            gangs = [],
            authorized = false
        } = this.state;

        return (
            <div id="app">
                <Login loginFunc={this.login} authorized={authorized}/>
                <Dashboard gangs={gangs} />
            </div>
        );
    }
}
