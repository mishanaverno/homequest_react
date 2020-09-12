import React from 'react';
import AppFrame from '../../app-frame';
import FormLogin from '../../form-login';
import { FRAMES } from '../../app/app';

export default class Login extends AppFrame {

    onSubmitForm = (params) => {
        this.props.login(params);
    }
    onCreateNewClick = (e) => {
        this.props.openFrame(FRAMES.CREATE_HERO);
    }
    render() {
        return this.frame(
            <div className="form">
                <div className="form-header">
                    <p className="header-title">Please Login</p>
                    <p className="header-extratext">Enter your login and password.</p>
                </div>
                <FormLogin
                    onSubmit={this.onSubmitForm}
                    onCreateNewClick={this.onCreateNewClick}
                />
            </div>
        );
    }
}