import React from 'react';

export default class Login extends React.Component {

    state = {
        authorized: this.props.authorized,
        login: "",
        password: ""
    }    

    componentDidUpdate(oldProps){
        if(oldProps.authorized != this.props.authorized){
            this.setState({
                authorized: this.props.authorized
            })
        }
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
        const { loginFunc } = this.props;
        const { login , password } =this.state;
        loginFunc(login, password);
    }
    
    render() {
        
        const { login , password } =this.state;
        

        let classNames = 'login ';
        if (!this.state.authorized) classNames += 'opened ';
        return (
            <div className={classNames}>
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
                            <button className="btn primary" onClick={this.onOkClick}>Ok</button>
                            <button className="btn primary">Forgot</button>
                            <button className="btn success">Create new</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}