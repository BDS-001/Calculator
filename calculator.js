const buttons = document.querySelector('.buttons')
const display = document.querySelector('.display')

function createButtons() {
    let buttonRow = document.createElement('div');
    buttonRow.setAttribute('class', 'buttonRow')
    for (i=1; i < 10; i++) {
        const button = document.createElement('button');
        button.innerHTML = i;
        button.dataset.num = i
        button.addEventListener('click', numClick)

        buttonRow.appendChild(button)
        console.log(buttonRow.innerHTML)
        if (i % 3 === 0) {
            buttons.prepend(buttonRow)
            buttonRow = document.createElement('div')
            buttonRow.setAttribute('class', 'buttonRow')
        }
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

createButtons();