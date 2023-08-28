const buttons = document.querySelector('.buttons')
const display = document.querySelector('.display')

function createButtons() {
    let buttonRow = document.createElement('div');
    buttonRow.setAttribute('class', 'buttonRow')

    for (i=0; i < 10; i++) {
        const button = document.createElement('button');
        button.innerHTML = i;
        button.dataset.num = i
        button.id = `--${i}`
        button.addEventListener('click', numClick)
        buttonRow.appendChild(button)

        if (i % 3 === 0 || i === 0) {
            buttons.prepend(buttonRow)
            buttonRow = document.createElement('div')
            buttonRow.setAttribute('class', 'buttonRow')
        }
    }
}

function addOperators() {
    const operators = ['+','-','*','/']
    const operatorClasses = ['add', 'subtract', 'multiply', 'divide']
    const rows = document.querySelectorAll('.buttonRow')
    console.log(rows)

    for (i=0; i < operators.length; i++) {
        const operatorButton = document.createElement('button')
        operatorButton.innerHTML = operators[i]
        operatorButton.dataset.operator = operators[i]
        operatorButton.id = operatorClasses[i]

        rows[i].append(operatorButton)
    }
}

function numClick(e) {
    display.innerHTML = e.target.dataset.num
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

createButtons();
addOperators();