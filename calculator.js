const buttons = document.querySelector('.buttons')
const display = document.querySelector('.display')
const NUMROWS = 5

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
        operatorButton.addEventListener('click', operatorClick)

        if (operators[i] === 'c') {
            buttonRows[i - 1].append(operatorButton)
        } else {
            buttonRows[i].append(operatorButton)
        }
    }
}

function numClick(e) {
    if (display.innerHTML === '0') {
        display.innerHTML = e.target.dataset.num
    } else {
        display.append(e.target.dataset.num)
    }
}

function operatorClick(e) {
    if (e.target.dataset.operator === 'c') {
        display.innerHTML = ''
    }
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
    return a / b
}

function operate(a,b,operator) {
    if (operator === '+') {
        add(a,b)
    } else if (operator === '-') {
        subtract(a,b)
    } else if (operator === '*') {
        multiply(a,b)
    } else if (operator === '/') {
        divide(a,b)
    }
}

createButtonRows();
addNumButtons();
addOperators();