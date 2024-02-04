const container = document.querySelector('.container');
const button = document.querySelector('#changeGrid');

for(let s = 1; s <= 256; s++){
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.style.backgroundColor = 'white';
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'red';
    })
    container.appendChild(square);
}

button.addEventListener('click', () => {
    const newGrid = prompt('Must be between 16 - 100', 16);
})