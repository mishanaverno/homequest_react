import React from 'react';
import AppFrame from '../../app-frame';
import { FRAMES } from '../../app/app';
import Form from '../../form';



export default class GangDetail extends AppFrame{
    onSubmitForm = (params) => {
    }
    getButtons(){
        const {
            id
        } = this.props.frameData;
        const buttons = [];
        buttons.push({
            name: 'invite',
            label: 'Invite',
            className: 'success',
            onClick: ()=>{this.props.invite(id)}
        });
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
            name
        } = this.props.frameData;
        const buttons = this.getButtons();
        return this.frame(
            <div className="form gang gang-detail">
                <div className="form-header">
                    <p className="header-title">{name}</p>
                    <p className="header-extratext">Some info</p>
                </div>
                <Form 
                    buttons={buttons}
                />
            </div>
        );
    }
}