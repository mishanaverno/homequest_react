export default class Validator{
    email(value){
        const match =/(\S)+@(\w)+\.(\w)+/.exec(value);
        return (match && match[0] && match[0] === value);
        
    }
    passwordEquals(value1,value2){
        return value1 === value2;
    }
    minValue(value, min){
        return value >= min;
    }
    maxValue(value, max){
        return value <= max;
    }
    minLength(value, length){
        return value && value.length && value.length >= length;
    }
    maxLength(value, length){
        return value && value.length && value.length <= length;
    }
    //deprecated
    notEmpty(value){
        return !!value;
    }
    
    length(value, length){
        return value && value.length && value.length >= length;
    }
}