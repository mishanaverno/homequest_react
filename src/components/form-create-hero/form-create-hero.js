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
                className: "reject",
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
        if(!validator.notEmpty(login)){
            valid = false;
            errors.login = 'Should be not empty';
        }
        //name
        if(!validator.notEmpty(name)){
            valid = false;
            errors.name = 'Should be not empty';
        }
        //pass
        if(!validator.length(password, 6)){
            valid = false;
            errors.password = 'Length should be more than 5';
        }
        if(!validator.notEmpty(password)){
            valid = false;
            errors.password = 'Should be not empty';
        }
        //c_pass
        if(!validator.notEmpty(c_password, password)){
            valid = false;
            errors.c_password = 'Passwords are different';
        }
        if(!validator.notEmpty(c_password)){
            valid = false;
            errors.c_password = 'Should be not empty';
        }
        this.indicateInvalidInputs(errors);
        return valid;
    }
}