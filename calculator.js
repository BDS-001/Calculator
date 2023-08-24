const grid = document.querySelector('#grid')
const gridSelect = document.querySelector('.selectSize')
const gridClear = document.querySelector('.gridClear')
const rainbowModeButton = document.querySelector('.rainbowMode')
let gridSize = 16;
let rainbowMode = false;

gridSelect.addEventListener('click', function() {
    let size = parseInt(prompt("Enter a number between 1-100 to select the number of pixels in each row and column:"))
    console.log(size);
    if (isNaN(size)) {
        alert(`Please only enter numbers between 1-100`)
    } else if (size > 100) {
        alert(`${size} is too high! Only enter numbers between 1-100`)
    } else if (size < 1) {
        alert(`${size} is too low! Only enter numbers between 1-100`)
    } else {
        gridSize = size;
        grid.innerHTML = '';
        createGrid(gridSize);
    }
})


gridClear.addEventListener('click', function() {
    grid.innerHTML = '';
    createGrid(gridSize);
})

rainbowModeButton.addEventListener('click', function() {
    if (rainbowMode === false) {
        rainbowMode = true;
        rainbowModeButton.innerHTML = 'Raindbow Mode: ON'
        rainbowModeButton.style.border = '5px solid yellow'
    } else {
        rainbowMode = false;
        rainbowModeButton.innerHTML = 'Raindbow Mode: OFF'
        rainbowModeButton.style.border = 'none'
    }
})

function createGrid(gridSize) {
    for (i=0;i<gridSize;i++) {
        const gridRow = document.createElement('div')
        gridRow.className = 'row'
    
        for (j=0;j<gridSize;j++) {
            const block = document.createElement('div')
            block.className = 'block'
            block.addEventListener('mouseover', function() {
                colorBlock(block)
            })
            gridRow.appendChild(block)
        }
        grid.appendChild(gridRow)
    }
}

function randomColor() {
    var color = Math.floor(Math.random() * 16777216).toString(16);
    return '#000000'.slice(0, -color.length) + color;
}

function colorBlock(block) {
    if (rainbowMode === false) {
        block.style.backgroundColor = 'black'
    } else {
        block.style.backgroundColor = randomColor();
    }
}

createGrid(gridSize);