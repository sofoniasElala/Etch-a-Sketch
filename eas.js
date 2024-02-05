const container = document.querySelector('.container');
const button = document.querySelector('#changeGrid');
let currentGrid = 16;

button.addEventListener('click', () => {
    let newGrid = 0;
    while(newGrid < 16 || newGrid > 100){
        newGrid = +prompt('Must be between 16 - 100', currentGrid);
    }
    currentGrid = newGrid;
    displayGrid(500/newGrid, newGrid * newGrid);
})


function displayGrid(size = 31.25,grid = 256){
    container.textContent = '';
    for(let s = 1; s <= grid; s++){
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.style.width = size + 'px';
        square.style.height = size + 'px';
        square.style.backgroundColor = 'white';
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = randomRgbValue();
        })
        container.appendChild(square);
    }

}

function randomRgbValue(){
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}

displayGrid();