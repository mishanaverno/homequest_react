import React from 'react';
import Input from '../input';
import InputReward from '../input-reward';
import Textarea from '../textarea';

export default class Form extends React.Component{
    // input = {
    //     name: '',
    //     label: '',
    //     type: '',
    //     validation: ''
    // }
    // button = {
    //     name
    //     label: ''
    //     className: ''
    //     onClick: ''
    // }
    state = {
        inputs: this.props.inputs,
        buttons: this.props.buttons,
        data: {}
    }
    validate = () => {
        return true;
    }
    //------------------------------------------------------
    getData(){
        const { data = {}} = this.props.frameData;
        return data;
    }
    indicateInvalidInputs(errors){
        this.setState((state) => {
            const inputs = this.state.inputs.map((el) => {
                const newEl = { ...el};
                newEl.invalid = false;
                return newEl;
            });
            const errorsEntry = Object.entries(errors);
            errorsEntry.map((error) => {
                const name = error[0];
                const msg = error[1];
                const input = inputs.find((inp) => {
                    return inp.name === name;
                })
                input.invalid = true;
                input.error = msg;
            })
            return {
                inputs: inputs
            }
        })
    }
    updateFormData = (name, value) => {
        this.setState((state) => {
            const data = { ...state.data};
            data[name] = value;
            return {
                data: data
            };
        });
    } 
    onSubmit = (e) => {
        e.preventDefault();
        if (this.validate()){
            const { onSubmit = ()=>{} } = this.props;
            onSubmit({...this.state.data});
        }
    }
    render(){
        const { inputs = [], buttons = [] } = this.state;
        const inputElements = inputs.map((el) => {
            el.onUpdate = this.updateFormData;
            switch (el.type){
                case 'textarea':
                    return <Textarea { ...el } key={el.name} />
                case 'reward':
                    return <InputReward { ...el } key={el.name}/>;
                    break;
                default:
                    return <Input { ...el } key={el.name}/>;
            }
        })
        const buttonsElements = buttons.map((el) => {
            const { className, onClick, label, type = 'button', name } = el;
            let classNames = "btn " + className;
            return (<button className={classNames} onClick={onClick} type={type} key={name}>{label}</button>);
        })
        return(
            <form 
                className="form-container"
                onSubmit={this.onSubmit}
            >
                {inputElements}
                <div className="form-group ">
                    {buttonsElements}
                </div>
            </form>
        );
    }
}