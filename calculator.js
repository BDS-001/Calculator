const buttons = document.querySelector('.buttons')

function createButtons() {
    for (i=0; i < 10; i++) {
        const button = document.createElement('button');
        button.innerHTML = i;
        buttons.appendChild(button)
    }
}

createButtons();