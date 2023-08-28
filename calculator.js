const buttons = document.querySelector('.buttons')
const display = document.querySelector('.display')
const NUMROWS = 5
const DIVIDEBYZERO = 'Nice Try! You Cannot Divide By 0!'

let numA = NaN
let numB = NaN
let selectedOperator = ''

function createButtonRows() {

    for (i=0; i < NUMROWS; i++) {
        let buttonRow = document.createElement('div');
        buttonRow.setAttribute('class', 'buttonRow')
        buttons.append(buttonRow)
    }
}

function addNumButtons() {
    const buttonRows = document.querySelectorAll('.buttonRow')
    let currentRow = 3

    for (i=0; i < 10; i++) {
        const button = document.createElement('button');
        button.innerHTML = i;
        button.dataset.num = i
        button.id = `--${i}`
        button.addEventListener('click', numClick)
        buttonRows[currentRow].appendChild(button)

        if (i % 3 === 0 || i === 0) {
            currentRow --;
        }
    }
}

function addOperators() {
    const operators = ['+','-','*','/','=', 'c']
    const operatorClasses = ['add', 'subtract', 'multiply', 'divide','equal', 'clear']
    const buttonRows = document.querySelectorAll('.buttonRow')

    for (i=0; i < operators.length; i++) {
        const operatorButton = document.createElement('button')
        operatorButton.innerHTML = operators[i]
        operatorButton.dataset.operator = operators[i]
        operatorButton.id = operatorClasses[i]
        operatorButton.className = 'operator'
        operatorButton.addEventListener('click', operatorClick)

        if (operators[i] === 'c') {
            buttonRows[i - 1].append(operatorButton)
        } else {
            buttonRows[i].append(operatorButton)
        }
    }
}

function numClick(e) {
    if (display.innerHTML === '0' || display.innerHTML === DIVIDEBYZERO) {
        display.innerHTML = e.target.dataset.num
    } else {
        display.append(e.target.dataset.num)
    }
}

function operatorClick(e) {
    if (e.target.dataset.operator === 'c') {
        display.innerHTML = ''
        resetData()
    } else if (e.target.dataset.operator === '=') {
        numB = parseInt(display.innerHTML)
        if (!isNaN(numB) && !isNaN(numA)) {
            console.log('here')
            console.log(numB, numA)
            display.innerHTML = operate(numA,numB,selectedOperator)
            resetData()
        } 
    } else {
        if (display.innerHTML === DIVIDEBYZERO) {
            resetData()
            display.innerHTML = ''
        } else {
            numA = parseInt(display.innerHTML)
            selectedOperator = e.target.dataset.operator
            display.innerHTML = ''
        }
    }
}

function resetData() {
    numA = NaN
    numB = NaN
    selectedOperator = ''
}

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b === 0 ) {
        return DIVIDEBYZERO
    } else {
        return a / b
    }
}

function operate(a,b,operator) {
    if (operator === '+') {
        return add(a,b)
    } else if (operator === '-') {
        return subtract(a,b)
    } else if (operator === '*') {
        return multiply(a,b)
    } else if (operator === '/') {
        return divide(a,b)
    }
}

createButtonRows();
addNumButtons();
addOperators();