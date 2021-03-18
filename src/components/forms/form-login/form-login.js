import Form from '../../form';
import Validator from '../../../lib/validator';

export default class FormLogin extends Form{
    state = {
        inputs: [
            {
                name: "login",
                label: "Email",
                type: "text",
            },
            {
                name: "password",
                label: "Password",
                type: "password",
            },
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
                label: "Create New",
                className: "create",
                onClick: this.props.onCreateNewClick
            }
        ],
        data: {}
    }
    validate = () => {
        const validator = new Validator();
        const { login, password } = this.state.data;
        let valid = true;
        let errors = {};
        //login
        if(!validator.email(login)){
            valid = false;
            errors.login = 'Invalid email format';
        }
        if(!validator.minLength(login, 1)){
            valid = false;
            errors.login = 'Should be not empty';
        }
        if(!validator.maxLength(login, 95)){
            valid = false;
            errors.login = 'Should be not empty';
        }
        //pass
        if(!validator.minLength(password, 6)){
            valid = false;
            errors.password = 'Length should be more than 5';
        }
        if(!validator.maxLength(password, 50)){
            valid = false;
            errors.password = 'Length should be more than 5';
        }
        this.indicateInvalidInputs(errors);
        return valid;
    }
}