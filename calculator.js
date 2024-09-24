let firstNumber = '';
let secondNumber = '';
let operator = '';
let runningTotal = 0;
const operators = ['+','-','*','/','='];

const display = document.querySelector('.display');
const calculator = document.querySelector('.button-container');
calculator.addEventListener("click", handleClick);

function add(num1, num2){
    return Number(num1) + Number(num2);
}

function subtract(num1, num2){
    return Number(num1) - Number(num2);
}

function multiply(num1, num2){
    return Number(num1) * Number(num2);
}

function divide(numerator, denominator){
    return Number(numerator) / Number(denominator);
}

function handleClick(event){
    let input = event.target.innerText;
    let isOperator = operators.includes(input);

    if(!isOperator && operator == ''){
        firstNumber += input;
        changeDisplay(firstNumber);
    }

    if(!isOperator && operator != ''){
        secondNumber += input;
        changeDisplay(secondNumber);
    }

    if(isOperator){
        if(operator == ''){
            operator = input;
            changeDisplay(secondNumber);
        }

        if(input == '='){
            console.log(firstNumber, secondNumber, operator)
        }
    }

    if(input == 'Clear'){
        clear();
    }
}

function changeDisplay(value){
    let isNumber = !isNaN(value);

    if(isNumber){
        display.innerText = value;
    }

    if(value === ''){
        display.innerText = 0;
    }
}

function operate(num1, num2, operator){
    console.log(num1, num2, operator);
    let total;

    switch(operator){
        case '+': 
            total = add(num1, num2);
            break;
        case '-':
            total = subtract(num1, num2);
            break;
        case '*':
            total = multiply(num1, num2);
            break;
        case '/':
            total = divide(num1, num2);
        default:
            break;
    }
}

function clear(){
    changeDisplay('clear');
    firstNumber = 0;
    secondNumber = 0;
    operator = '';
    runningTotal = 0;
}
