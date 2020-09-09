import React from 'react';
import AppFrame from '../app-frame';
import { FRAMES } from '../app/app';
import FormCreateHero from '../form-create-hero';

export default class CreateHero extends AppFrame {

    state = {
        login: "",
        name: "",
        password: "",
        password_c: "",
    }    
    onCancelClick = (e) => {
        this.props.openFrame(FRAMES.LOGIN);
    }
    onSubmitForm = (params) => {
        this.props.createHero(params);
    }
    render(){
        
        return this.frame(
            <div className="form">
                <div className="form-header">
                    <p className="header-title">Create hero</p>
                    <p className="header-extratext">Enter your login and password.</p>
                </div>
                <FormCreateHero
                    onSubmit={this.onSubmitForm}
                    onCancel={this.onCancelClick}
                />
            </div>
        );
    }
}