const container = document.querySelector('.container');
const button = document.querySelector('#changeGrid');


button.addEventListener('click', () => {
    let newGrid = 0;
    while(newGrid < 16 || newGrid > 100){
        newGrid = +prompt('Must be between 16 - 100', 16);
    }
})


function displayGrid(grid = 256){

    for(let s = 1; s <= grid; s++){
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.style.backgroundColor = 'white';
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'red';
        })
        container.appendChild(square);
    }

}

displayGrid();