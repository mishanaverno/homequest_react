import React from 'react';
import AppFrame from '../app-frame';
import { FRAMES } from '../app/app';

export default class CreateHero extends AppFrame {

    state = {
        name: "",
        password: "",
        avatar: ""
    }    

    onChangeName = (e) => {
        const { value } = e.target;
        this.setState({
            name: value
        });
    }
    onChangePassword = (e) => {
        const { value } = e.target;
        this.setState({
            password: value
        });
    }
    onCancelClick = (e) => {
        this.props.openFrame(FRAMES.LOGIN);
    }
    render(){
        
        const { name, password } = this.state;

        return this.frame(
            <div className="form">
                <div className="form-header">
                    <p className="header-title">Create hero</p>
                    <p className="header-extratext">Enter your login and password.</p>
                </div>
                <div className="form-container">
                    <div className="form-row">
                        <label>Name</label>
                        <input 
                            type="text" 
                            value={name}
                            onChange={this.onChangeName}
                            />
                    </div>
                    <div className="form-row">
                        <label>Password</label>
                        <input 
                            type="password" 
                            value={password}
                            onChange={this.onChangePassword}
                            />
                    </div>
                    <div className="form-group ">
                        <button className="btn success" onClick={this.onOkClick}>Ok</button>
                        <button className="btn reject" onClick={this.onCancelClick}>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}