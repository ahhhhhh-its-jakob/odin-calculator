let firstNumber = 0;
let secondNumber = 0;
let operator = '';
let displayValue = 0;

const display = document.querySelector('.display');
const calculator = document.querySelector('.button-container');

calculator.addEventListener("click", handleClick);

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(numerator, denominator){
    return numerator / denominator;
}

function handleClick(event){
    let input = event.target.innerText;

    if(!isNaN(input)){
        firstNumber += input;
        changeDisplay(input)
    }
}


function operate(num1, num2, operator){
    switch(operator){
        case '+': 
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
        default:
            break;
    }
}

function changeDisplay(value){
    display.innerText += value;
}

function clear(){
    display.innerText = 0;
    firstNumber = 0;
    secondNumber = 0;
}
