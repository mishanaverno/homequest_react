import React from 'react';
import AppFrame from '../app-frame';
import FormCreateQuest from '../form-create-quest';
import { FRAMES } from '../app/app';

export default class CreateQuest extends AppFrame{
    onCancelClick = (e) => {
        this.props.openFrame(FRAMES.DASHBOARD);
    }
    onSubmitForm = (params) => {
        this.props.createQuest(params);
    }
    render() {
        const { data } = this.props.frameData;
        return this.frame(
            <div className="form">
                <div className="form-header">
                    <p className="header-title">Create Quest</p>
                    <p className="header-extratext">Create new quest for anthoer heroes!</p>
                </div>
                <FormCreateQuest
                    frameData={this.props.frameData}
                    onSubmit={this.onSubmitForm}
                    onCancel={this.onCancelClick}
                />
            </div>
        );
    }
}