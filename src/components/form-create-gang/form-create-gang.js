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
                className: "reject",
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
        //name
        if(!validator.notEmpty(name)){
            valid = false;
            errors.name = 'Should be not empty';
        }
        return valid;
    }
}