import Form from '../form';
import Validator from '../../lib/validator';

export default class FormCreateGang extends Form{
    // input = {
    //     name: '',
    //     label: '',
    //     type: '',
    //     validation: ''
    // }
    // button = {
    //     label: ''
    //     className: ''
    //     onClick: ''
    // }
    state = {
        inputs: [
            {
                name: "name",
                label: "Name",
                type: "text",
            }
        ],
        buttons: [
            {
                name: 1,
                label: "Ok",
                className: "success",
                type: 'submit'
            },
            {
                name: 2,
                label: "Cancel",
                className: "cancel",
                onClick: this.props.onCancel
            }
        ],
        data: {}
    }
    validate = () => {
        const validator = new Validator();
        const { name } = this.state.data;
        let valid = true;
        let errors = {};
        console.log(name);
        //name
        if(!validator.minLength(name, 3)){
            valid = false;
            errors.name = 'Too short name!';
        }
        if(!validator.maxLength(name, 250)){
            valid = false;
            errors.name = 'Too long name!';
        }
        this.indicateInvalidInputs(errors);
        return valid;
       
    }
}