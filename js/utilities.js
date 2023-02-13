function getInputValueById(inputId){
    const inputValueString = document.getElementById(inputId);
    const inputValue = parseFloat(inputValueString.value);
    inputValueString.value = '';
    return inputValue;
}

function getTextElementValueById(elementId){
    const elementValueString = document.getElementById(elementId);
    const elementValue = parseFloat(elementValueString.innerText);
    return elementValue;
}

function setElementValueById(elementId, newValue){
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}