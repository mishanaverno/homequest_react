import React from 'react';
import Dashboard from '../dashboard';

export default class App extends React.Component 
{
    constructor(){
        super();
        this.state = {
            gangs: this.getDashboardData()
        };
        
    }
    getDashboardData = () => {
        return [
            { 
                id: 1,
                name: "First gang",
                quests: [
                    { id: 1, title: "Quest 1"},
                    { id: 2, title: "Quest 2"}
                ]
            },
            { 
                id: 2,
                name: "Second gang",
                quests: [
                    { id: 1, title: "Quest 3"},
                    { id: 3, title: "Quest 3.1"},
                    { id: 2, title: "Quest 4"}
                ]
            }

        ];
    }
    render() {
        return (
            <Dashboard gangs={this.state.gangs} />
        );
    }
}
