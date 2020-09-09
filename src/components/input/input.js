import React from 'react';

export default class Input extends React.Component{
    state = {
        label: this.props.label,
        type: this.props.type,
        invalid: this.props.invalid,
        error: this.props.error,
        value: this._getStartValue()
    }
    _getStartValue(){
        const { value = '' } = this.props;
        return value;
    }
    componentDidUpdate(prev){
        if (
            prev.invalid !== this.props.invalid ||
            prev.error !== this.props.error
        ){
            this.setState({
                invalid: this.props.invalid,
                error: this.props.error
            });
        }
        
    }
    onUpdate = (e) => {
        this.props.onUpdate(this.props.name, this.state.value);
    }
    onChange = (e) => {
        const { value } = e.target;
        this.setState((state) => {
            return {
                value: value
            }
        });
    }
    
    render(){
        const {label, value, type, invalid, error} = this.state;
        let classNames = 'form-row ';
        if(invalid) classNames += 'invalid ';
        return (
            <div className={classNames}>
                <label>
                    <span>{label}</span>
                    <span className="error">{error}</span>
                </label>
                <input 
                    type={type} 
                    value={value}
                    onChange={this.onChange}
                    onBlur={this.onUpdate}
                    />
            </div>
        );
    }
}