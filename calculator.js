let firstNumber = '';
let secondNumber = '';
let operator = '';
let runningTotal = '';
let prevInput = '';
const operators = ['+','-','*','/','='];

const display = document.querySelector('.display');
const calculator = document.querySelector('.button-container');
calculator.addEventListener("click", handleClick);

function handleClick(event){
    let input = event.target.innerText;
    let isOperator = operators.includes(input);

    if(prevInput == '=' && !isOperator){ 
        clear();
    }

    if(input === 'Back'){
        if(operator === ''){
            firstNumber = firstNumber.slice(0, firstNumber.length - 1);
            changeDisplay(firstNumber);
            return;
        }

        if(operator != ''){
            secondNumber = secondNumber.slice(0, secondNumber.length - 1);
            changeDisplay(secondNumber);
            return;
        }
    }

    if(input === 'Clear'){
        clear();
        return;
    }

    if(!isOperator && operator === ''){
        if(firstNumber.includes('.') && input === '.'){
            return;
        } else {
            firstNumber += input;
        }
        changeDisplay(firstNumber);
    }

    if(!isOperator && operator != ''){
        if(secondNumber.includes('.') && input === '.'){
            return;
        } else {
            secondNumber += input;
        }
        changeDisplay(secondNumber);
    }

    if(isOperator){
        if(operator != '' && input != '='){       
            if(secondNumber === ''){
                operator = input;
                changeDisplay('');
            }

            if(secondNumber != ''){
                operate(firstNumber, secondNumber, operator);
                operator = input;
            }
        } 

        if(operator === ''){
            if(input === '='){
                return;
            } else {
                operator = input;
                changeDisplay(secondNumber);
            }
        }

        if(input === '='){
            operate(firstNumber, secondNumber, operator);
        }
    }

    prevInput = input;
}

function changeDisplay(value){
    let isNumber = !isNaN(value);

    if(isNumber){
        display.innerText = value;
    }

    if(value === ''){
        display.innerText = 0;
    }

    if(value === 'divide by zero'){
        clear();
        display.innerText = "woah, you can't do that";
    }
}

function operate(num1, num2, operator){

    switch(operator){
        case '+': 
            runningTotal = add(num1, num2);
            changeDisplay(runningTotal);
            firstNumber = runningTotal;
            secondNumber = '';
            operator = '';
            break;
        case '-':
            runningTotal = subtract(num1, num2);
            changeDisplay(runningTotal);
            firstNumber = runningTotal;
            secondNumber = '';
            operator = '';
            break;
        case '*':
            runningTotal = multiply(num1, num2);
            changeDisplay(runningTotal);
            firstNumber = runningTotal;
            secondNumber = '';
            operator = '';
            break;
        case '/':
            if(secondNumber == 0){
                changeDisplay('divide by zero');
                break;
            }
            runningTotal = divide(num1, num2);
            changeDisplay(runningTotal);
            firstNumber = runningTotal;
            secondNumber = '';
            operator = '';
        default:
            break;
    }
}

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

function clear(){
    changeDisplay('');
    firstNumber = '';
    secondNumber = '';
    operator = '';
    runningTotal = '';
}
