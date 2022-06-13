let prevNumber = '';
let operatorSimbol = '';
let currentNumber = '';
let onScreen = '';

const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen = (number) => {
    let tampilLayar
    tampilLayar = number;
    calculatorScreen.value = tampilLayar;
}

const numbers = document.querySelectorAll(".number");
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

let angka = '';
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        angka = event.target.value;
        inputNumber(angka);
        console.log(currentNumber);
        updateScreen(currentNumber);
    })
});

const operators = document.querySelectorAll(".operator");
const inputOperator = (operator) => {
    if (operatorSimbol === '') {
        prevNumber = currentNumber;
    }
    operatorSimbol = operator;
    onScreen = currentNumber + operatorSimbol;
    currentNumber = '';
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
        console.log(onScreen);
        updateScreen(onScreen);
    })
});

const calculate = () => {
    let result = '';
    switch (operatorSimbol) {
        case "/":
            result = prevNumber / currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        default:
            break;
    }

    currentNumber = result;
    operatorSimbol = '';
};

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', (event) => {
    calculate();
    console.log(currentNumber);
    updateScreen(currentNumber);
});

const clearBtn = document.querySelector('.all-clear');

const clearAll = () => {
    prevNumber = '';
    operatorSimbol = '';
    currentNumber = '0';
};

clearBtn.addEventListener('click', (event) => {
    clearAll();
    updateScreen(currentNumber);
})

const decimalSign = document.querySelector('.decimal');

const inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
};

decimalSign.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

const deleteBy = document.querySelector('.delete-by-item');
const deleteByItem = (number) => {
    if (number === parseInt(number))
        number = number.toString();
    currentNumber = number.substring(0, number.length - 1);
    if (currentNumber === '')
        currentNumber = '0';
}

deleteBy.addEventListener('click', (event) => {
    deleteByItem(currentNumber);
    updateScreen(currentNumber);
});