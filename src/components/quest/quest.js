import React from 'react';

const Quest = ({ 
    title,
    reward,
    state,
    customer_avatar,
    performer_avatar
}) => {
    const createAvatar = (avatar) => {
        if(avatar){
            return (<img className="quest-avatar" src={avatar} alt=""/>);
        }
    }
    let stateClassNames = "quest-header-state "+state;
    return (
        <div className="quest">
            <div className="quest-header">
                <div className="quest-header-info">
                    <div className="quest-header-title">
                        {title}
                    </div>
                    <div className="quest-reward">
                        Reward:
                        <span className="quest-reward-value">{reward}</span> 
                    </div>
                </div>
                <div className="quest-header-persons">
                    {createAvatar(customer_avatar)}
                    {createAvatar(performer_avatar)}
                </div>
                <div className={stateClassNames}></div>
            </div>
        </div>
    );
}    
export default Quest;