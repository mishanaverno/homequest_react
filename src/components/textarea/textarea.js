import React from 'react';
import Input from '../input';

export default class Textarea extends Input{
    
    render(){
        const {label, value = '', invalid, error} = this.state;
        let classNames = 'form-row ';
        if(invalid) classNames += 'invalid ';
        return (
            <div className={classNames}>
                <label>
                    <span>{label}</span>
                    <span className="error">{error}</span>
                </label>
                <textarea 
                    rows="5"
                    onChange={this.onChange}
                    onBlur={this.onUpdate}
                    value={value}
                ></textarea>
            </div>
        );
    }
}