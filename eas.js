const container = document.querySelector('.container');
const button = document.querySelector('#changeGrid');


button.addEventListener('click', () => {
    let newGrid = 0;
    while(newGrid < 16 || newGrid > 100){
        newGrid = +prompt('Must be between 16 - 100', 16);
    }
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
            square.style.backgroundColor = 'red';
        })
        container.appendChild(square);
    }

}

displayGrid();