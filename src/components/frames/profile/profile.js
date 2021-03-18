import React from 'react';
import AppFrame from '../../app-frame';
import { FRAMES } from '../../app/app';
import Form from '../../form';



export default class Profile extends AppFrame{
    onSubmitForm = (params) => {
    }
    getButtons(){
        const buttons = [];
        buttons.push({
            name: 'edit',
            label: 'Edit',
            className: 'create',
            onClick: ()=>{
                this.props.openFrame(FRAMES.EDIT_HERO);
            }
        });
        buttons.push({
            name: 'logout',
            label: 'Logout',
            className: 'reject',
            onClick: ()=>{
                
            }
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
        console.log(this.props, this.state)
        return this.frame(
            <div className="form profile">
                
                <Form 
                    buttons={this.getButtons()}
                />
            </div>
        );
    }
}