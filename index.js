let firstNumber = 0;
let secondNumber = 0;
let numberContainer = 0;
let operator = 'plus';
let display = 0;
const round = 10000;

const resultDisplay = document.querySelector('.display');
const result = document.createElement('div');
function dp(displayText) {
    if (display >= 100000000 || display <= -100000000) {
        setError();
        return;
    }
    if (displayText.charAt(0)=='-') {
        let trimmedDisplay = displayText.toString().substring(0,10);
    }
    else {
            let trimmedDisplay = displayText.toString().substring(0,9);
    }

    if (trimmedDisplay.charAt(trimmedDisplay.length-1)=='.')
    {
        trimmedDisplay = trimmedDisplay.substring(0,trimmedDisplay.length-1);
    }
    result.textContent = trimmedDisplay;
    resultDisplay.appendChild(result);
}
dp(display);

const buttons1 = Array.from(document.querySelectorAll('.number'));
buttons1.forEach(number => number.addEventListener('click',bindSecondNumber)); 
const buttons2 = Array.from(document.querySelectorAll('.operator'));
buttons2.forEach(operator => operator.addEventListener('click',performOperator)); 
const buttons3 = Array.from(document.querySelectorAll('.feature'));
buttons3.forEach(feature => feature.addEventListener('click',performFeature));

const buttonsAll = Array.from(document.querySelectorAll('.number, .operator, .feature'));
buttonsAll.forEach(displayAll => displayAll.addEventListener('click',addTransition));
buttonsAll.forEach(displayAll => displayAll.addEventListener('transitionend',removeTransition));

function addTransition(e) {
    e.target.classList.add('playing');
  }

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

function bindSecondNumber(current2ndNumber) {
    if (numberContainer === 0 && current2ndNumber.target.id != '.') {
        numberContainer = current2ndNumber.target.id;
    }
    else {
        numberContainer = numberContainer.toString() + current2ndNumber.target.id;
    }


    display = numberContainer;
    if (!checkTwoDots(numberContainer.toString())){
        setError();
        return;
    }
    
    dp(display);
}

function performOperator(currentOperator) {
    secondNumber = numberContainer;
    switch (operator) {
        case "multiply":
            display = (firstNumber * round) * (secondNumber * round)/round/round;
            break;
        case "divide":
            display = (firstNumber*round) / (secondNumber*round);
            if (display == Infinity){
                setError();
                return;
            }
            break;
        case "plus":
            display = ((firstNumber*round) + (secondNumber*round))/round;
            break;
        case "minus":
            display = (firstNumber*round - secondNumber*round)/round;
            break;
        case "equal":
            firstNumber = 0;
            break;
    }
    operator = currentOperator.target.id;
    firstNumber = display;
    numberContainer = 0;
    dp(display);
}

function performFeature(currentFeature) {
    switch (currentFeature.target.id) {
        case "clear":
            setDefault();
            break;
        case "flip":
            numberFlip();
            break;
        case "percent":
            numberPercent();
            break;
    }
    }

function setDefault() {
    firstNumber = 0;
    secondNumber = 0;
    numberContainer = 0;
    display = 0;
    operator = 'plus';
    dp(display);
}

function setError() {
    firstNumber = 0;
    secondNumber = 0;
    numberContainer = 0;
    display = "error";
    operator = 'plus';
    dp(display);
}

function numberFlip() {
    display *= -1;
    numberContainer = display;
    dp(display);
}

function numberPercent() {
    display = (display*round)/100/round;
    numberContainer = display;
    dp(display);
}

function checkTwoDots(checkVal) {
    let dots = 0;
    for (let i = 0; i < checkVal.length; i++) {
    if (checkVal.charAt(i) == ".") {
        dots++;
    }
    }
    if (dots < 2) {
        return true;
    }
}