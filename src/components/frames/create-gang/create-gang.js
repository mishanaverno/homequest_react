import React from 'react';
import AppFrame from '../../app-frame';
import FormCreateGang from '../../forms/form-create-gang';
import { FRAMES } from '../../app/app';

export default class CreateGang extends AppFrame{
    onCancelClick = (e) => {
        this.props.openFrame(FRAMES.DASHBOARD);
    }
    onSubmitForm = (params) => {
        this.props.createGang(params);
    }
    render() {
        return this.frame(
            <div className="form">
                <div className="form-header">
                    <p className="header-title">Create Gang</p>
                    <p className="header-extratext">Create your own gang now!</p>
                </div>
                <FormCreateGang 
                    onSubmit={this.onSubmitForm}
                    onCancel={this.onCancelClick}
                />
            </div>
        );
    }
}