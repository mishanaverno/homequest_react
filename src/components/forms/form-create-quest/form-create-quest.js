import Form from '../../form';
import Validator from '../../../lib/validator';

export default class FormCreateQuest extends Form{
    state = {
        inputs: [
            {
                name: "title",
                label: "Title",
                type: "text",
            },
            {
                name: "description",
                label: "Description",
                type: "textarea",
            },
            {
                name: "bonus_reward",
                label: "Reward",
                type: "reward",
                value: 0,
                max: this.props.frameData.userStyle,
                base: this.props.frameData.base
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
        const { title, description } = this.state.data;
        let valid = true;
        let errors = {};
        //title
        if(!validator.notEmpty(title)){
            valid = false;
            errors.title = 'Should be not empty';
        }
        if(!validator.maxLength(title, 95)){
            valid = false;
            errors.title = 'Should be not empty';
        }
        //description
        if(!validator.notEmpty(description)){
            valid = false;
            errors.description = 'Should be not empty';
        }
        if(!validator.maxLength(description, 250)){
            valid = false;
            errors.description = 'Should be not empty';
        }
        this.indicateInvalidInputs(errors);
        return valid;
    }
}