const numRows = 16;
const numColumns = 16;

const grid = document.querySelector('.grid');

for (let i = 0; i < numRows; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    row.style.backgroundColor = 'black';


    for (let j = 0; j < numColumns; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square)

    }
    grid.appendChild(row);

}




const body = document.body

const grid1 = document.createElement('div')
grid1.classList.add('grid1')
body.appendChild(grid1)

const headerbox = document.createElement('div')
headerbox.classList.add('headerbox')
grid1.appendChild(headerbox)

const header = document.createElement('h1')
header.classList.add('header');
header.textContent = 'Etch-a-Sketch';
headerbox.appendChild(header)

const headerbox1 = document.createElement('div')
headerbox1.classList.add('headerbox1')
grid1.appendChild(headerbox1)

const headerbox2 = document.createElement('div')
headerbox2.classList.add('headerbox2')
grid1.appendChild(headerbox2)

const headerbox3 = document.createElement('div')
headerbox3.classList.add('headerbox3')
grid1.appendChild(headerbox3)


const squareBoxes = document.querySelectorAll('.square');


squareBoxes.forEach(squareBox => {
    squareBox.addEventListener('mouseenter', () => {
        changeColor(squareBox, 'yellow');
    });


    squareBox.addEventListener('mouseleave', () => {
        delayChangeColor(squareBox, 'skyblue', 800);
    });

});


function changeColor(squareBox, color) {
    squareBox.style.backgroundColor = color;
}

function delayChangeColor(squareBox, color, delay) {
    setTimeout(() => {
        changeColor(squareBox, color);
    }, delay);
}



const btn = document.createElement('button')
btn.classList.add('btn')
btn.textContent = '16x16'
headerbox1.appendChild(btn)

const btn1 = document.createElement('button')
btn1.classList.add('btn1')
btn1.textContent = 'Custom Size'
headerbox1.appendChild(btn1)













