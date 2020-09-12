import Form from '../form';
import Validator from '../../lib/validator';

export default class FormCreateHero extends Form{
    state = {
        inputs: [
            {
                name: "login",
                label: "Email",
                type: "text",
            },
            {
                name: "name",
                label: "Name",
                type: "text",
            },
            {
                name: "password",
                label: "Password",
                type: "password",
            },
            {
                name: "c_password",
                label: "Confirm password",
                type: "password",
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
        const { login, name, password, c_password } = this.state.data;
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
        //name
        if(!validator.minLength(name, 1)){
            valid = false;
            errors.name = 'Should be not empty';
        }
        if(!validator.maxLength(name, 95)){
            valid = false;
            errors.name = 'Should be not empty';
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
        //c_pass
        if(!validator.passwordEquals(c_password, password)){
            valid = false;
            errors.c_password = 'Passwords are different';
        }
        this.indicateInvalidInputs(errors);
        return valid;
    }
}