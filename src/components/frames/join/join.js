import React from 'react';
import AppFrame from '../../app-frame';
import { FRAMES } from '../../app/app';
import FormJoin from '../../form-join';



export default class Join extends AppFrame{
    onSubmitForm = (params) => {
        this.props.join(params);
    }
    onBackButtonClick = (e) => {
        this.props.openFrame(FRAMES.DASHBOARD);
    }
    render() {
        return this.frame(
            <div className="form">
                <div className="form-header">
                    <p className="header-title">Join gang and start be a hero!</p>
                    <p className="header-extratext">Put code into input</p>
                </div>
                <FormJoin
                    onSubmit={this.onSubmitForm}
                    onBackButtonClick={this.onBackButtonClick}
                />
            </div>
        );
    }
}