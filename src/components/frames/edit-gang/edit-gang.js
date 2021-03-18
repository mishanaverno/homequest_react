import React from 'react';
import AppFrame from '../../app-frame';
import FormCreateGang from '../../forms/form-create-gang';
import { FRAMES } from '../../app/app';

export default class EditGang extends AppFrame{
    onCancelClick = (e) => {
        this.props.openFrame(FRAMES.DASHBOARD);
    }
    onSubmitForm = (params) => {
        this.props.updateGang(params);
    }
    render() {
        console.log(this.props, this.state)
        const { name, id  } = this.props.frameData;
        const previousData = {};
        previousData.data = { name, id };
        return this.frame(
            <div className="form">
                <div className="form-header">
                    <p className="header-title">Edit Gang</p>
                    <p className="header-extratext"></p>
                </div>
                <FormCreateGang 
                    frameData={previousData}
                    onSubmit={this.onSubmitForm}
                    onCancel={this.onCancelClick}
                />
            </div>
        );
    }
}