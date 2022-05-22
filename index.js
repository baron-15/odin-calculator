let firstNumber = 0;
let secondNumber = 0;
let numberContainer = 0;
let operator = 'plus';
let display = 0;

const result = document.querySelector(".display ");
const buttons1 = Array.from(document.querySelectorAll('.number'));
buttons1.forEach(boxClass => boxClass.addEventListener('click',bindSecondNumber)); 
const buttons2 = Array.from(document.querySelectorAll('.operator'));
buttons2.forEach(boxClass => boxClass.addEventListener('click',performOperator)); 
const buttons3 = Array.from(document.querySelectorAll('.feature'));
buttons3.forEach(boxClass => boxClass.addEventListener('click',performFeature)); 
const buttons4 = Array.from(document.querySelectorAll('.feature2'));
buttons4.forEach(boxClass => boxClass.addEventListener('click', performFeature2)); 

function bindSecondNumber(current2ndNumber) {
    numberContainer = numberContainer*10 + parseInt(current2ndNumber.target.id);
    display = numberContainer;
    console.log(`Display as 2ndNumber ${display}`);    
}

function performOperator(currentOperator) {
    console.log(currentOperator.target.id);
    secondNumber = numberContainer;
    switch (operator) {
        case "multiply":
            display = firstNumber * secondNumber;
            break;
        case "divide":
            display = firstNumber / secondNumber;
            break;
        case "plus":
            display = firstNumber + secondNumber;
            break;
        case "minus":
            display = firstNumber - secondNumber;
            break;
        case "equal":
            firstNumber = 0;
            break;
    }
    operator = currentOperator.target.id;
    firstNumber = display;
    numberContainer = 0;
    console.log(`Display as calc ${display}`);
    }

function performFeature(currentFeature) {
    switch (currentFeature.target.id) {
        case "clear":
            setDefault();
        case "flip":
            numberFlip();
    }
    }

function setDefault() {
    firstNumber = 0;
    secondNumber = 0;
    numberContainer = 0;
    display = 0;
    operator = 'plus';
    console.log(`Display ${display}`);
}

function numberFlip() {
    display *= -1;
    numberContainer = display;
    console.log(`Display flip ${display}`);
}

function performFeature2() {
    
}