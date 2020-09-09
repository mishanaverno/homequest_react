import React from 'react';

const DashboardHeroInfo = ({ 
        avatar, 
        name,
        style
}) => {
    return (
        <div className="dashboard-hero-info">
            <img
                src={avatar}
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