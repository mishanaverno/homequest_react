import React from 'react';
import AppFrame from '../../app-frame';
import { FRAMES } from '../../app/app';
import Form from '../../form';


export default class Invite extends AppFrame{
    onSubmitForm = (params) => {
    }
    getButtons(){
        const buttons = [];
        buttons.push({
            name: 'back',
            label: 'Back',
            className: 'cancel',
            onClick: ()=>{this.props.openFrame(FRAMES.DASHBOARD)}
        });
        return buttons;
    }
    render() {
        console.log(this.props)
        const { 
            data: code
        } = this.props.frameData;
        const buttons = this.getButtons();
        return this.frame(
            <div className="form">
                <div className="form-header">
                    <p className="header-title">Invite code</p>
                    <p className="header-extratext">Share this code to another hero.</p>
                </div>
                <div className="invite-code">
                    {code}
                </div>
                <Form 
                    buttons={buttons}
                />
            </div>
        );
    }
}