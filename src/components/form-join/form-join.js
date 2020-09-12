import Form from '../form';
import Validator from '../../lib/validator';

export default class FormJoin extends Form{
    state = {
        inputs: [
            {
                name: "code",
                label: "Code",
                type: "text",
            },
        ],
        buttons: [
            {
                name: 'ok',
                label: "Ok",
                className: "success",
                type: 'submit'
            },
            {
                name: 'back',
                label: "Back",
                className: "cancel",
                onClick: this.props.onBackButtonClick
            }
        ],
        data: {}
    }
    validate = () => {
        const validator = new Validator();
        const { code } = this.state.data;
        let valid = true;
        let errors = {};
        //code
        if(!validator.minLength(code, 6)){
            valid = false;
            errors.code = 'Length should be 6';
        }
        if(!validator.maxLength(code, 6)){
            valid = false;
            errors.code = 'Length should be 6';
        }
        this.indicateInvalidInputs(errors);
        return valid;
    }
}