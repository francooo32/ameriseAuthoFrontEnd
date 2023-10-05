export function formaterDateToYYYYmmDD(date){
    date.setDate(date.getDate() - 1);
    return date.toISOString().split('T')[0]
}

export function formaterDateToDDmmYYYYNoISO(dateString){
    const dateFormated = dateString;
    if(dateString != undefined && dateString != null){
        const dateSplited = dateString.split('-');
        const dateFormated = dateSplited[2]+'-'+dateSplited[1]+'-'+dateSplited[0];
        return dateFormated;
    }
    return dateFormated;
}

export function formaterDateToDDmmYYYY(dateString){
    const dateFormated = dateString;
    if(dateString != undefined && dateString != null){
        const dateSliced = dateString.slice(0, -14)
        const dateSplited = dateSliced.split('-');
        const dateFormated = dateSplited[2]+'-'+dateSplited[1]+'-'+dateSplited[0];
        return dateFormated;
    }
    return dateFormated;
}

export function formaterStringBlockInvalidInput(valueToRemove){
    return valueToRemove.slice(0, -1)
}

export function formaterNullStringFromDb(variableToFormat, shouldHaveBar){
    if(shouldHaveBar){
        return variableToFormat != undefined || variableToFormat != null ? variableToFormat + " / "  : ""
    }else{
        return variableToFormat != undefined || variableToFormat != null ? variableToFormat : ""
    }
    
}