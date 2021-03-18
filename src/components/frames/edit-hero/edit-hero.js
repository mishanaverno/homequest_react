import React from 'react';
import AppFrame from '../../app-frame';
import { FRAMES } from '../../app/app';
import FormEditHero from '../../forms/form-edit-hero';

export default class EditHero extends AppFrame {

    state = {
        login: "",
        name: "",
        password: "",
        password_c: "",
    }    
    onCancelClick = (e) => {
        this.props.openFrame(FRAMES.PROFILE);
    }
    onSubmitForm = (params) => {
        this.props.updateHero(params)
    }
    render(){
        console.log(this.props, this.state)
        const { name, login } = this.state;
        const previousData = {};
        previousData.data = { login, name };
        return this.frame(
            <div className="form ">
                <div className="form-header">
                    <p className="header-title">Edit hero</p>
                    <p className="header-extratext"></p>
                </div>
                <FormEditHero
                    frameData={previousData}
                    onSubmit={this.onSubmitForm}
                    onCancel={this.onCancelClick}
                />
            </div>
        );
    }
}