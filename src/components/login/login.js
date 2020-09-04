import React from 'react';
import AppFrame from '../app-frame';
import { FRAMES } from '../app/app';

export default class Login extends AppFrame {

    state = {
        login: "bob",
        password: "777"
    }    

    onChangeLogin = (e) => {
        const { value } = e.target;
        this.setState({
            login: value
        });
    }
    onChangePassword = (e) => {
        const { value } = e.target;
        this.setState({
            password: value
        });
    }

    onOkClick = (e) => {
        const { login , password } = this.state;
        this.props.login(login, password);
    }
    onCreateNewClick = (e) => {
        this.props.openFrame(FRAMES.CREATE_HERO);
    }
    render() {
        const { login , password } =this.state;

        return this.frame(
            <div className="form">
                <div className="form-header">
                    <p className="header-title">Please Login</p>
                    <p className="header-extratext">Enter your login and password.</p>
                </div>
                <div className="form-container">
                    <div className="form-row">
                        <label>Login</label>
                        <input 
                            type="text" 
                            value={login}
                            onChange={this.onChangeLogin}
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
                        <button className="btn primary">Forgot</button>
                        <button className="btn primary" onClick={this.onCreateNewClick}>Create new</button>
                    </div>
                </div>
            </div>
        );
    }
}