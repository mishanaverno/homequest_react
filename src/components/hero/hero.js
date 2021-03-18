import React from 'react';
import { FRAMES } from '../app/app';

const Hero = ({ name, avatar, style, id, openFrame }) => {

    return (
        <div className="hero">
            <div className="hero-container-avatar">
                <img
                    className="hero-avatar"
                    src={avatar}
                    alt={name}
                    onClick={(e)=>{ openFrame(FRAMES.PROFILE, { id }) }}
                />
            </div>
            <div className="hero-info-container">
                <div className="hero-info-name">{name}</div>
    <div className="hero-info-style">Style: <span className="reward-value">{style}</span></div>
            </div>
        </div>
    );
}

export default Hero;