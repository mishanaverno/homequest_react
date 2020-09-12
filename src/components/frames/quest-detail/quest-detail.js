import React from 'react';
import AppFrame from '../../app-frame';
import { FRAMES } from '../../app/app';
import Form from '../../form';


const QUEST_STATE = {
    OPEN: 'open',
    PROGRESS: 'progress', 
    PENDING: 'pending', 
    COMPLETE: 'complete'
}

export default class QuestDetail extends AppFrame{
    onSubmitForm = (params) => {
    }
    getButtons(){
        const {
            state,
            userId: user,
            customer_id: customer,
            performer_id: performer
        } = this.props.frameData;
        const buttons = [];
        if (state === QUEST_STATE.OPEN && user !== customer){
            buttons.push({
                name: 'start',
                label: 'Start',
                className: 'success',
                onClick: ()=>{
                    this.props.questActions.questStart(this.props.frameData.id);
                }
            });
        }
        if (state === QUEST_STATE.OPEN && user === customer){
            buttons.push({
                name: 'delete',
                label: 'Delete',
                className: 'reject',
                onClick: ()=>{
                    this.props.questActions.questDelete(this.props.frameData.id);
                }
            });
        }
        if (state === QUEST_STATE.PROGRESS && user === performer){
            buttons.push({
                name: 'decline',
                label: 'Decline',
                className: 'reject',
                onClick: ()=>{this.props.questActions.questDecline(this.props.frameData.id)}
            }); 
            buttons.push({
                name: 'complete',
                label: 'Complete',
                className: 'success',
                onClick: ()=>{this.props.questActions.questReady(this.props.frameData.id)}
            });
        }
        if (state === QUEST_STATE.PENDING && user === customer){
            buttons.push({
                name: 'confirm',
                label: 'Confirm',
                className: 'success',
                onClick: ()=>{this.props.questActions.questComplete(this.props.frameData.id)}
            }); 
            buttons.push({
                name: 'reject',
                label: 'Reject',
                className: 'reject',
                onClick: ()=>{this.props.questActions.questReopen(this.props.frameData.id)}
            });
        }
        buttons.push({
            name: 'back',
            label: 'Back',
            className: 'cancel',
            onClick: ()=>{this.props.openFrame(FRAMES.DASHBOARD)}
        });
        return buttons;
    }
    getPerformer(){
        const {     state,
            performer_avatar,
            performer_name,
            performer_id
        } = this.props.frameData;
        const className = "performer-info " + state;
        if( performer_id ){
            return (<div className={className}>
                        <div className="hero-conainer">
                            <div className="hero-avatar-container">
                                <img
                                    className="hero-avatar"
                                    src={performer_avatar}
                                    alt={performer_name}
                                />
                            </div>
                            <div className="hero_name_container">
                                <div className="hero-role">Performer:</div>
                                <span className="hero_name">{performer_name}</span>
                            </div>
                        </div>
                    </div>)
        }
        return;
    }
    render() {
        console.log(this.props)
        const { 
            title,
            created_at,
            description,
            base_reward,
            bonus_reward,
            state,
            customer_avatar,
            customer_name,
        } = this.props.frameData;
        const reward = base_reward + bonus_reward
        const buttons = this.getButtons();

        return this.frame(
            <div className="form quest-detail">
                <div className="form-header">
                    <p className="header-title">{title}<span className={state}>{state}</span></p>
                    <p className="header-extratext">Created at: {created_at}</p>
                </div>
                <div className="quest-container">
                    <div className="quest-description">
                        {description}
                    </div>
                    <div className="quest-detail-reward">
                        Reward:<span className="quest-reward-value">{reward}</span>
                    </div>
                    <div className="heroes-info">
                        <div className="customer-info">
                            <div className="hero-conainer">
                                <div className="hero-avatar-container">
                                    <img
                                        className="hero-avatar"
                                        src={customer_avatar}
                                        alt={customer_name}
                                    />
                                </div>
                                <div className="hero_name_container">
                                    <div className="hero-role">Customer:</div>
                                    <span className="hero_name">{customer_name}</span>
                                </div>
                            </div>
                        </div>
                        {this.getPerformer()}
                    </div>
                </div>
                <Form 
                    buttons={buttons}
                />
            </div>
        );
    }
}