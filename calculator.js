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
    console.log(firstNumber, secondNumber, operator);

    if(prevInput == '=' && !isOperator){ 
        clear();
    }

    if(input === 'Clear'){
        clear();
        return;
    }

    if(!isOperator && operator === ''){
        firstNumber += input;
        changeDisplay(firstNumber);
    }

    if(!isOperator && operator != ''){
        secondNumber += input;
        changeDisplay(secondNumber);
    }

    if(isOperator){
        if(operator != '' && input != '='){       
            if(secondNumber === ''){
                operator = input;
                changeDisplay('');
            }

            if(secondNumber != ''){
                console.log(firstNumber, secondNumber, operator);
                operate(firstNumber, secondNumber, operator);
                operator = input;
            }
        } 

        if(operator === ''){
            if(input === '='){
                console.log('something')
                return;
            } else {
                operator = input;
                changeDisplay(secondNumber);
            }
        }

        if(input === '='){
            console.log(firstNumber, secondNumber, operator);
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
