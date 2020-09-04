import React from 'react';
import Dashboard from '../dashboard';
import Login from '../login';
import Panel from '../panel';
import CreateHero from '../create-hero';
import DataProvider from '../../lib/data-provider'

export const TOKEN = 'api_token';
export const FRAMES = {
    LOGIN: 'login',
    DASHBOARD: 'dashboard',
    CREATE_HERO: 'create-hero'
}
export default class App extends React.Component 
{   
    state = {
        active_frame: '',
        api_token: localStorage.getItem(TOKEN),
        panel_buttons: [
            
        ]
    }
    componentDidMount(){
        this.openFrame(FRAMES.DASHBOARD);
    }
    
    _processResponse(callbacks = {}, response = {}){
        if(response.code)
        switch(response.code){
            case 200:
                return callbacks.c200(response);
            case 403:
                this._notAuthorized();
                return callbacks.c403(response);
            default:
        }
    }
    _authorized(api_token){
        this.setState({
            api_token: api_token
        })
        localStorage.setItem(TOKEN, api_token);
    }

    _notAuthorized(){
        this.setState({
            api_token: ''
        })
        localStorage.removeItem(TOKEN);
        this.openFrame(FRAMES.LOGIN);
    }
    
    login = (login, password) => {
        const provider = new DataProvider();
        provider.login(login, password).then((response)=>{
            return this._processResponse({
                c200: () => {
                    this._authorized(response.data);
                    this.openFrame(FRAMES.DASHBOARD);
                }
            }, response);
        })
    }
    getData = () => {
        const provider = new DataProvider();
        const { api_token = false } = this.state;
        provider.getDashboard(api_token).then((response)=>{
            return this._processResponse({
                c200: (r) => {
                    console.log(r)
                },
                c403: (r) => {
                    console.log(r)
                }

            }, response)
        })
    }
    addToPanel = (buttons = []) => {
        if (!(buttons instanceof Array)) buttons = [buttons];
        this.setState((state) => {
            const panel_buttons = [...state.panel_buttons, ...buttons ];
            return  { 
                panel_buttons: panel_buttons
            }
        })
    }
    removefromPanel = (buttons = []) => {
        if (!(buttons instanceof Array)) buttons = [buttons];
        this.setState((state) => {
            const panel_buttons = state.panel_buttons.filter((element) => {
                return !buttons.includes(element.name);
            });
            return {
                panel_buttons: panel_buttons
            }
        })
    }
    openFrame = (name) => {
        this.setState({
            active_frame: name
        })
    }
    _getFrame(name){
        switch(name){
            case FRAMES.LOGIN:
                return (
                    <Login 
                        login={this.login} 
                        openFrame={this.openFrame}
                    />)
                break;
            case FRAMES.CREATE_HERO:
                return (
                    <CreateHero 
                        login={this.login}
                        openFrame={this.openFrame}
                    />
                )
            break;
            case FRAMES.DASHBOARD:
                return (
                    <Dashboard
                        getData={this.getData}
                        openFrame={this.openFrame}
                        addToPanel={this.addToPanel}
                        removefromPanel={this.removefromPanel} 
                    />
                )
            break;
            default:
                break;
        }
    }
    render() {
        
        const {
            gangs = [],
            panel_buttons,
            active_frame
        } = this.state;

        return (
            <div id="app">
                <div className="app-container">
                    {this._getFrame(active_frame)}
                </div>
                <Panel buttons={panel_buttons} removefromPanel={this.removefromPanel}/>
            </div>
        );
    }
}
