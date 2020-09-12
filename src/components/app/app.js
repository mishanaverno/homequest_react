import React from 'react';
import DataProvider from '../../lib/data-provider';
import Dashboard from '../frames/dashboard';
import Login from '../frames/login';
import CreateHero from '../frames/create-hero';
import CreateGang from '../frames/create-gang';
import CreateQuest from '../frames/create-quest';
import QuestDetail from '../frames/quest-detail';
import GangDetail from '../frames/gang-detail';
import Invite from '../frames/invite';
import Join from '../frames/join';

export const TOKEN = 'api_token';
export const FRAMES = {
    LOGIN: 'login',
    DASHBOARD: 'dashboard',
    QUEST_DETAIL: 'quest-detail',
    GANG_DETAIL: 'gang-detail',
    USER: 'user',
    PROFILE: 'profile',
    INVITE: 'invite',
    JOIN: 'join',
    CREATE_HERO: 'create-hero',
    CREATE_GANG: 'create-gang',
    CREATE_QUEST: 'create-quest',
    EDIT_HERO: 'edit-hero',
    EDIT_GANG: 'edit-gang',
    EDIT_QUEST: 'edit-quest'
}
export default class App extends React.Component 
{   
    state = {
        active_frame: '',
        api_token: localStorage.getItem(TOKEN),
        panel_buttons: [
            
        ]
    }
    provider = new DataProvider();
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
    // provider
    login = (credentials) => {
        this.provider.login(credentials).then((response)=>{
            return this._processResponse({
                c200: (r) => {
                    this._authorized(r.data);
                    this.openFrame(FRAMES.DASHBOARD);
                },
                c403: (r) => {
                    console.log(r)
                }
            }, response);
        });
    }
    dashboard = () => {
        const { api_token = false } = this.state;
        return this.provider.getDashboard(api_token).then((response)=>{
            return this._processResponse({
                c200: (r) => {
                    return r;
                },
                c403: (r) => {
                    console.log(r)
                }

            }, response)
        });
    }
    createHero = (params) => {
        this.provider.createHero(params).then((response)=>{
            return this._processResponse({
                c200: (r) => {
                    this._authorized(r.data);
                    this.openFrame(FRAMES.DASHBOARD);
                },
                c403: (r) => {
                    console.log(r);
                }
            }, response);
        });
    }
    
    createGang = (params) => {
        const { api_token = false } = this.state;
        this.provider.createGang(params, api_token).then((response)=>{
            return this._processResponse({
                c200: (r) => {
                    this.openFrame(FRAMES.DASHBOARD);
                },
                c403: (r) => {
                    console.log(r);
                }
            }, response);
        });
    }
    invite = (id) => {
        const { api_token = false } = this.state;
        this.provider.invite(id, api_token).then((response)=>{
            return this._processResponse({
                c200: (r) => {
                    this.openFrame(FRAMES.INVITE, r);
                },
                c403: (r) => {
                    console.log(r);
                }
            }, response);
        });
    }
    join = (params) => {
        const { api_token = false } = this.state;
        this.provider.join(params, api_token).then((response)=>{
            return this._processResponse({
                c200: (r) => {
                    this.openFrame(FRAMES.DASHBOARD);
                },
                c403: (r) => {
                    console.log(r);
                }
            }, response);
        });
    }
    createQuest = (params) => {
        const { api_token = false } = this.state;
        this.provider.createQuest(params, api_token).then((response)=>{
            return this._processResponse({
                c200: (r) => {
                    this.openFrame(FRAMES.DASHBOARD);
                },
                c403: (r) => {
                    console.log(r);
                }
            }, response);
        });
    }
    questActions = {
        questStart: (id)=>{
            const { api_token = false } = this.state;
            this.provider.progressQuest(id, api_token).then((response)=>{
                return this._processResponse({
                    c200: (r) => {
                        this.openFrame(FRAMES.DASHBOARD);
                    },
                    c403: (r) => {
                        console.log(r);
                    }
                }, response);
            });
        },
        questReady: (id)=>{
            const { api_token = false } = this.state;
            this.provider.pendingQuest(id, api_token).then((response)=>{
                return this._processResponse({
                    c200: (r) => {
                        this.openFrame(FRAMES.DASHBOARD);
                    },
                    c403: (r) => {
                        console.log(r);
                    }
                }, response);
            });
        },
        questReopen: (id)=>{
            const { api_token = false } = this.state;
            this.provider.reopenQuest(id, api_token).then((response)=>{
                return this._processResponse({
                    c200: (r) => {
                        this.openFrame(FRAMES.DASHBOARD);
                    },
                    c403: (r) => {
                        console.log(r);
                    }
                }, response);
            });
        },
        questComplete: (id)=>{
            const { api_token = false } = this.state;
            this.provider.completeQuest(id, api_token).then((response)=>{
                return this._processResponse({
                    c200: (r) => {
                        this.openFrame(FRAMES.DASHBOARD);
                    },
                    c403: (r) => {
                        console.log(r);
                    }
                }, response);
            });
        },
        questReject: (id)=>{
            const { api_token = false } = this.state;
            this.provider.reopenQuest(id, api_token).then((response)=>{
                return this._processResponse({
                    c200: (r) => {
                        this.openFrame(FRAMES.DASHBOARD);
                    },
                    c403: (r) => {
                        console.log(r);
                    }
                }, response);
            });
        },
        questDecline: (id)=>{
            const { api_token = false } = this.state;
            this.provider.declineQuest(id, api_token).then((response)=>{
                return this._processResponse({
                    c200: (r) => {
                        this.openFrame(FRAMES.DASHBOARD);
                    },
                    c403: (r) => {
                        console.log(r);
                    }
                }, response);
            });
        },
        questDelete: (id)=>{
            const { api_token = false } = this.state;
            this.provider.deleteQuest(id, api_token).then((response)=>{
                return this._processResponse({
                    c200: (r) => {
                        this.openFrame(FRAMES.DASHBOARD);
                    },
                    c403: (r) => {
                        console.log(r);
                    }
                }, response);
            });
        }
    }
    //frames
    openFrame = (name, data = {}) => {
        this.setState({
            active_frame: name,
            active_frame_data: data
        })
    }
    _getFrame(name){
        switch(name){
            case FRAMES.LOGIN:
                return (<Login 
                    login={this.login} 
                    openFrame={this.openFrame}
                />)
            case FRAMES.DASHBOARD:
                return (<Dashboard
                    getData={this.dashboard}
                    openFrame={this.openFrame}
                />)
            case FRAMES.QUEST_DETAIL:
                return (<QuestDetail
                    questActions={this.questActions}
                    openFrame={this.openFrame}
                    frameData={this.state.active_frame_data}
                />)
            case FRAMES.GANG_DETAIL:
                return (<GangDetail
                    invite={this.invite}
                    openFrame={this.openFrame}
                    frameData={this.state.active_frame_data}
                />)
            case FRAMES.INVITE:
                return (<Invite
                    openFrame={this.openFrame}
                    frameData={this.state.active_frame_data}
                />)
            case FRAMES.JOIN:
                return (<Join
                    join={this.join}
                    openFrame={this.openFrame}
                />)
            case FRAMES.CREATE_HERO:
                return (<CreateHero 
                    createHero={this.createHero}
                    openFrame={this.openFrame}
                />)
            case FRAMES.CREATE_GANG:
                return (<CreateGang 
                    createGang={this.createGang}
                    openFrame={this.openFrame}
                />)
            case FRAMES.CREATE_QUEST:
                return (<CreateQuest
                    createQuest={this.createQuest}
                    frameData={this.state.active_frame_data}
                    openFrame={this.openFrame}
                />)
            default:
                break;
        }
    }
    render() {
        
        const {
            active_frame
        } = this.state;
        
        return (
            <div id="app">
                <div className="app-container">
                    {this._getFrame(active_frame)}
                </div>
            </div>
        );
    }
}
