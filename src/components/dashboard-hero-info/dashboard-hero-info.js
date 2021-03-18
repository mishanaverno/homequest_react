import React from 'react';
import { FRAMES } from '../app/app';

const DashboardHeroInfo = ({
        id,
        avatar, 
        name,
        style,
        openFrame
}) => {
    const onClick = (e) => {
        openFrame(FRAMES.PROFILE, { id })
    }
    return (
        <div className="dashboard-hero-info">
            <img
                src={avatar}
                alt={name}
                onClick={onClick}
            />
            <div className="dashboard-hero-description">
                <div className="dashboard-hero-description-top">
                    <span className="dashboard-hero-name">{name}</span>
                    <span className="dashboard-hero-style">Style: <span className="dashboard-hero-style-value">{style}</span></span>
                </div>
                <div className="dashboard-hero-description-bottom"></div>
            </div>
        </div>
    );
}
export default DashboardHeroInfo;