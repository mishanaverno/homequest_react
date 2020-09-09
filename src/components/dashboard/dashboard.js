import React from 'react';
import AppFrame from '../app-frame';
import Gang from '../gang';
import DashboardHeroInfo from '../dashboard-hero-info';
import { FRAMES } from '../app/app';

export default class Dashboard extends AppFrame {
    state = {
        gangs: []
    }
    componentDidMount(){
        this.updateData();
    }
    async updateData(){
        const response = await this.props.getData();
        if(response) {
            const { data = {}} = response;
            this.setState({
                ...data
            });
        }
    }
    renderGangs(){
        const { openFrame } = this.props;
        const { style } = this.state;
        return this.state.gangs.map((gang) => (
            <Gang
                userStyle={style}
                key={gang.id} 
                openFrame={openFrame}
                {...gang } />
        ));
    }
    onCreateGangClick = (e) => {
        this.props.openFrame(FRAMES.CREATE_GANG);
    }
    render(){
        const {
            avatar,
            name,
            style
        } = this.state;
        return this.frame(
            <div className="dashboard">
                <div className="dashboard-header">
                    <DashboardHeroInfo 
                        avatar={avatar}
                        name={name}
                        style={style}
                    /> 
                </div>
                <div className="dashboard-container">
                    { this.renderGangs() }
                </div>
                <div className="dashboard-buttons-container">
                    <button 
                        className="super-btn create-gang" 
                        onClick={this.onCreateGangClick}
                    >Create gang!</button>
                    <button className="super-btn join-gang">Join gang!</button>
                </div>
            </div>
        );
    }
}