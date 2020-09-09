export default class Validator{
    email(value){
        const match =/(\w|\d)+@(\w|\d)+\.(\w|\d)+/.exec(value);
        return (match && match[0] && match[0] === value);
        
    }
    passwordEquals(value1,value2){
        return value1 === value2;
    }
    notEmpty(value){
        return !!value;
    }
    length(value, length){
        return value && value.length && value.length >= length;
    }
}