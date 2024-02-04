const container = document.querySelector('.container');

for(let s = 1; s <= 256; s++){
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.style.backgroundColor = 'white';
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'red';
    })
    container.appendChild(square);
}