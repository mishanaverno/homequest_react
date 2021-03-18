import React from 'react';
import AppFrame from '../../app-frame';
import Gang from '../../gang';
import DashboardHeroInfo from '../../dashboard-hero-info';
import { FRAMES } from '../../app/app';

export default class Dashboard extends AppFrame {
    state = {
        gangs: []
    }
    
    renderGangs(){
        const { openFrame } = this.props;
        const { style , id } = this.state;
        return this.state.gangs.map((gang) => (
            <Gang
                userId={id}
                userStyle={style}
                key={gang.id} 
                openFrame={openFrame}
                {...gang } />
        ));
    }
    onCreateGangClick = (e) => {
        this.props.openFrame(FRAMES.CREATE_GANG);
    }
    onJoinGangClick = (e) => {
        this.props.openFrame(FRAMES.JOIN);
    }
    render(){
        const {
            avatar,
            name,
            style,
            id
        } = this.state;
        return this.frame(
            <div className="dashboard">
                <div className="dashboard-header">
                    <DashboardHeroInfo 
                        id={id}
                        avatar={avatar}
                        name={name}
                        style={style}
                        openFrame={this.props.openFrame}
                    /> 
                </div>
                <div className="dashboard-container">
                    { this.renderGangs() }
                </div>
                <div className="dashboard-buttons-container">
                    <button 
                        className="super-btn create" 
                        onClick={this.onCreateGangClick}
                    >Create gang!</button>
                    <button
                        className="super-btn open"
                        onClick={this.onJoinGangClick}
                    >Join gang!</button>
                </div>
            </div>
        );
    }
}