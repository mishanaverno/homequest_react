import React from 'react';
import { FRAMES } from '../app/app';

const Quest = (props) => {
    const { 
        title,
        base_reward,
        bonus_reward,
        state,
        customer_avatar,
        performer_avatar,
        customer_id,
        performer_id,
        openFrame
    } = props;
    const reward = base_reward + bonus_reward;
    const createAvatar = (avatar, id) => {
        if(avatar){
            return (<img 
                        className="quest-avatar"
                        src={avatar}
                        alt=""
                    />);
        }
    }
    const openDetails = (e) => {
        openFrame(FRAMES.QUEST_DETAIL, props);
    }
    
    let stateClassNames = "quest-header-state "+state;
    return (
        <div className="quest">
            <div className="quest-header">
                <div 
                    className="quest-header-info"
                    onClick={openDetails}
                    >
                    <div className="quest-header-title">
                        {title}
                    </div>
                    <div className="quest-reward">
                        Reward:
                        <span className="quest-reward-value">{reward}</span> 
                    </div>
                </div>
                <div className="quest-header-persons">
                    {createAvatar(customer_avatar, customer_id)}
                    {createAvatar(performer_avatar, performer_id)}
                </div>
                <div className={stateClassNames}></div>
            </div>
        </div>
    );
}    
export default Quest;