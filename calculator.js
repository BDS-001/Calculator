const buttons = document.querySelector('.buttons')

function createButtons() {
    let buttonRow = document.createElement('div');
    buttonRow.setAttribute('class', 'buttonRow')
    for (i=1; i < 10; i++) {
        const button = document.createElement('button');
        button.innerHTML = i;
        buttonRow.appendChild(button)
        console.log(buttonRow.innerHTML)
        if (i % 3 === 0) {
            buttons.prepend(buttonRow)
            buttonRow = document.createElement('div')
            buttonRow.setAttribute('class', 'buttonRow')
        }
    }
}

createButtons();