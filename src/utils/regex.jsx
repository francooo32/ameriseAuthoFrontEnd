import { VALIDATE_NUMBER, VALIDATE_NUMBER_MAX100 } from "./regexContants";

export function validateIsNumber(input){
    debugger
    var lastCharToEvaluate = input.substr(input.length - 1);
    return VALIDATE_NUMBER.test(lastCharToEvaluate);
}

export function validateIsNumberMax100(input){
    var lastCharToEvaluate = input.substr(input.length - 1);
    return VALIDATE_NUMBER_MAX100.test(lastCharToEvaluate);
}

export function validateIsNumberAndMaxLengthMax100(input){
    var lastCharToEvaluate = input.substr(input.length - 1);
    if(VALIDATE_NUMBER.test(lastCharToEvaluate) && VALIDATE_NUMBER_MAX100.test(input)){
        return true;
    }
    return false
}
